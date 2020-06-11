<template>
  <div id="main">
    <navbar />
    <div id="page">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/card-anime.vue'
import navbar from '@/components/nav.vue'

export default {
  name: 'Main',
  components: {
    Card,
    navbar
  }
}
</script>

<style scoped lang="scss">

</style>