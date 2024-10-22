import { describe, expect, it } from 'vitest'
import { mountSuspended, renderSuspended } from '@nuxt/test-utils/runtime'
import { screen } from '@testing-library/vue'

import ComponentWithProblematicProps from '~/components/ComponentWithProblematicProps.vue'

describe('ComponentWithProblematicProps', () => {
  const props = {
    url: '/test',
    error: 'I am error',
  }

  it('can render with VTL', async () => {
    await renderSuspended(ComponentWithProblematicProps, {
      props,
    })
    expect(screen.getByRole('link').getAttribute('href')).toBe(props.url)
    expect(
      screen.getByRole('heading', { level: 1, name: props.error }),
    ).toBeDefined()
  })

  it('can render with VTU', async () => {
    const wrapper = await mountSuspended(ComponentWithProblematicProps, {
      props,
    })
    expect(wrapper.find('a').attributes('href')).toBe(props.url)
    expect(wrapper.find('h1').text()).toBe(props.error)
  })
})
