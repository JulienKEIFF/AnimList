<template>
  <div id="admin">
    <select name="type" v-model="value">
      <option value="manga">Manga</option>
      <option value="anime">Anime</option>
    </select>
    <br>
    <label for="title">Titre</label>
    <input type="text" name="title" v-model="title">
    <br>
    <label for="descr">Description</label>
    <input type="text" name="descr" v-model="descr">
    <br>
    <label for="distrib">Distributeur</label>
    <select for="distrib" v-model="distrib">
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
    <input type="text" name="auteur" v-if="value == 'manga'" v-model="auteur">
    <label for="studio" v-if="value == 'anime'">Studio</label>
    <input type="text" name="studio" v-if="value == 'anime'" v-model="studio">
    <br>
    <label for="nbrtome" v-if="value == 'manga'">Nombre de tome</label>
    <input type="number" name="nbrtome" v-if="value == 'manga'" v-model="nbrTome">
    <label for="nbrep" v-if="value == 'anime'">Nombre d'épisode</label>
    <input type="number" name="nbrep" v-if="value == 'anime'" v-model="ep">
    <br>
    <button v-on:click="addItem()">Ajouter</button>
  </div>
</template>

<script>
import {AxiosServices} from '../services/axios'

export default {
  name: 'admin',
  data: function(){
    return{
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
    
  },
  methods: {
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
            ep: this.ep,
            studio: this.studio,
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
</style>
