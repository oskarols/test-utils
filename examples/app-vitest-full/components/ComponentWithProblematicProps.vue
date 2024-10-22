<template>
  <div>
    <a :href="props.url">Link</a>
    <h1 class="error">
      {{ props.error }}
    </h1>
  </div>
</template>

<script lang="ts" setup>
interface ProductCardProps {
  url: string
  error: string
}

const props = defineProps<ProductCardProps>()
</script>
