<template>
  <div id="main">
    <navbar />
    <div id="page">
      <Card />
      coucou
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/card.vue'
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
#page{
  //debug
  background-color: blue;
}
</style>