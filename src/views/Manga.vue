<template>
  <div id="main">
    <navbar />
    <div id="page">
      manga
      <div class="item" v-for="item in mangas" :key="item.title">
        <Card v-bind:object="{
          title: item.title,
          auteur: item.auteur,
          nbrTome: item.tome,
          distrib: item.distrib,
          descr: item.descr
        }" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/card-manga.vue'
import navbar from '@/components/nav.vue'

import {AxiosServices} from '../services/axios'

export default {
  name: 'Manga',
  components: {
    Card,
    navbar
  },
  data: function() {
    return{
      mangas: []
    }
  },
  mounted: async function() {
    const getMangas = await AxiosServices.instance.get('/manga')
    this.mangas = getMangas.data
    console.log(this.mangas)
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>