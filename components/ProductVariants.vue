<template>
  <div>
    Termine
    <ul>
      <li v-for="variant in variants" :key="variant.id">
        {{ variant.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    variants: { type: Object, required: true },
  },
}
</script>
