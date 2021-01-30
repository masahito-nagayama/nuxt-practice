<template>
  <div>
    <my-header />
    <nuxt /> 
  </div>
</template>

<script>
import MyHeader from "~/components/MyHeader.vue"

export default {
  components: {
    MyHeader
  },
  middleware: "auth"
}
</script>