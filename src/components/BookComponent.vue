<script lang="ts">
import {defineComponent, PropType} from 'vue'
import {Book} from "@/models/book";
export default defineComponent({
  name: "Book",
  props: {
    bookprop: {
      type: Object as PropType<Book>,
      required: true
    },
  }
})
</script>

<template>

</template>

<style scoped>

</style>