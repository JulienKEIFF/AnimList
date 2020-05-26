<template>
  <div id="main">
    <navbar />
    <sidebar />
    <div id="page">
      Bienvenue {{username}} !!!
      <p>Retrouver bientot ici vos anime et manga favoris !! </p>
      <div id="admin" v-if="isAdmin">
        <select name="type" v-model="value">
          <option value="manga">Manga</option>
          <option value="anime">Anime</option>
        </select>
        <br>
        <label for="title">Titre</label>
        <input type="text" name="title">
        <br>
        <label for="descr">Description</label>
        <input type="text" name="descr">
        <br>
        <label for="distrib">Distributeur</label>
        <select for="distrib">
          <option value="wakanim" v-if="value == 'anime'">Wakanim</option>
          <option value="crunchyroll" v-if="value == 'anime'">Crunchyroll</option>
          <option value="prime" v-if="value == 'anime'">Prime video</option>
          <option value="netflix" v-if="value == 'anime'">Netflix</option>
          <option value="none" v-if="value == 'anime'">Aucun</option>

          <option value="ankama" v-if="value == 'manga'">Ankama</option>
          <option value="delcourt" v-if="value == 'manga'">Delcourt</option>
          <option value="ototo" v-if="value == 'manga'">Ototo</option>
          <option value="glénat" v-if="value == 'manga'">Glénat</option>
          <option value="kaze" v-if="value == 'manga'">Kazé</option>
          <option value="autre" v-if="value == 'manga'">Autre</option>
        </select>
        <br>
        <label for="auteur" v-if="value == 'manga'">Auteur</label>
        <input type="text" name="auteur" v-if="value == 'manga'">
        <label for="studio" v-if="value == 'anime'">Studio</label>
        <input type="text" name="studio" v-if="value == 'anime'">
        <br>
        <label for="nbrtome" v-if="value == 'manga'">Nombre de tome</label>
        <input type="number" name="nbrtome" v-if="value == 'manga'">
        <label for="nbrep" v-if="value == 'anime'">Nombre d'épisode</label>
        <input type="number" name="nbrep" v-if="value == 'anime'">
        <br>
        <button v-on:click="addItem()">Ajouter</button>
      </div>
    </div>
  </div>
</template>

<script>
import navbar from '@/components/nav.vue'
import sidebar from'@/components/account-nav.vue'
import {AxiosServices} from '../services/axios'
import {DexieServices} from '../services/dexie'

export default {
  name: 'Account',
  components: {
    navbar,
    sidebar
  },
  data: function() {
    return {
      username: '',
      isAdmin: false,
      value: "",
      title: "",
      descr: "",
      auteur: "",
      nbrTome: "",
      ep: "",
      studio: "",
      distrib: ""
    }
  },
  mounted: async function(){
    await this.initRoute()
    await this.admin()
  },
  methods: {
    initRoute: async function(){
      this.username = await this.$route.params.user
    },
    admin: async function(){
      const res = await AxiosServices.instance.post('/user/token/isadmin', {username: this.$route.params.user})
      this.isAdmin = await res.data.isadmin
    },
    addItem: async function(){
      if(this.value == "manga"){
        if(this.title !== "" && this.descr !== "" && this.auteur !== "" && this.nbrTome !== "" && this.distrib !== ""){
          const manga = {
            title: this.title,
            descr: this.descr,
            nbrTome: this.nbrTome,
            auteur: this.auteur,
            distrib: this.distrib
          }
          const res = await AxiosServices.instance.post('/manga/add', manga)
        } else console.error('Remplisser les champs')
      }
      if(this.value == "anime"){
        if(this.title !== "" && this.descr !== "" && this.studio !== "" && this.ep !== "" && this.distrib !== ""){
          const anime = {
            title: this.title,
            descr: this.descr,
            nbrTome: this.nbrTome,
            auteur: this.auteur,
            distrib: this.distrib
          }
          const res = await AxiosServices.instance.post('/anime/add', anime)
        } else console.error('Remplisser les champs')
      }
    }
  }
}
</script>

<style scoped lang="scss">
#page{
  margin-left: 80px;
  #admin{
    label{
      display: inline-block;
      width: 150px;
    }
    input{
      display: inline-block;
      width: 500px;
    }
  }
}
</style>