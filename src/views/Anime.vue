<template>
  <div id="main">
    <navbar />
    <div id="page">
      <div class="item" v-for="item in animes" :key="item.title">
        <Card v-bind:object="{
          title: item.title,
          ep: item.ep,
          studio: item.studio,
          distrib: item.distrib,
          descr: item.descr
        }" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/card-anime.vue'
import navbar from '@/components/nav.vue'

import {AxiosServices} from '../services/axios'

export default {
  name: 'Anime',
  components: {
    Card,
    navbar
  },
  data: function() {
    return{
      animes: []
    }
  },
  mounted: async function() {
    const getAnimes = await AxiosServices.instance.get('/anime')
    this.animes = getAnimes.data
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>