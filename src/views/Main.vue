<template>
  <div id="main">
    <navbar />
    <div id="page">
      <Card v-bind:object="{
        title: 'Brand New Animal',
        studio: 'Trigger',
        distrib: 'wakanim',
        descr: 'Super anime'
      }" />
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

</style>