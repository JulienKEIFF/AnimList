<template>
  <div id="main">
    <navbar />

    <div id="login" v-if="!conected">
      <div class="section">
        <h1>Se connecter</h1>
        <h2>Déja un compte ? Alors connectez-vous ici !</h2>
        <label for="username">Utilisateur</label>
        <input type="text" name="username" v-model="usernameLog">
        <br>
        <label for="password">Mot de passe</label>
        <input type="password" name="password" v-model="passwordLog">
        <button v-on:click="login()">Connexion</button>
      </div>
      <div class="section">
        <h1>Pas encore de compte ?</h1>
        <h2>Creer un compte gratuitement</h2>
        <label for="username">Utilisateur</label>
        <input type="text" name="username" v-model="usernameReg">
        <br>
        <label for="password">Mot de passe</label>
        <input type="password" name="password" v-model="passwordReg">
        <br>
        <label for="password2">Retaper le mot de passe</label>
        <input type="password" name="password2" v-model="password2Reg">
        <button v-on:click="register()">S'inscrire</button>
      </div>
    </div>
    <div v-if="showMessage">
      {{message}}
    </div>
  </div>
</template>

<script>
import navbar from '@/components/nav.vue'
import {AxiosServices} from '../services/axios'
import {DexieServices} from '../services/dexie'

export default {
  name: 'Login',
  components: {
    navbar
  },
  data: function() {
    return {
      conected: false,
      usernameLog: '',
      usernameReg: '',
      passwordLog: '',
      passwordReg: '',
      password2Reg: '',
      message: '',
      showMessage: false
    }
  },
  methods: {
    register: async function(){
      this.showMessage = false
      let tokenGet
      if(this.usernameReg === '' && this.passwordReg === '' && this.password2Reg === '') this.message = 'Veuillez rentrer vos informations', this.showMessage = true
      if(this.usernameReg !== '' && this.passwordReg === '' && this.password2Reg === '') this.message = 'Veuillez rentrer votre mot de passe', this.showMessage = true
      if(this.passwordReg !== this.password2Reg) this.message = "Le mot de passe n'est pas identique", this.showMessage = true
      else tokenGet = await AxiosServices.instance.post('/user/register', {username: this.usernameReg, password: this.passwordReg}), this.message = 'debug', this.showMessage = true
      this.message = tokenGet.data
      if(tokenGet.data) {
        await DexieServices.addToken(tokenGet.data, this.usernameReg)
        const path ='/user/'+this.usernameReg
        this.$router.push({path: path})
      }
    },
    login: async function(){
      this.showMessage = false
      let tokenGet
      if(this.usernameLog == '' && this.passwordLog == '') this.message = 'Veuillez rentrer vos identifiants', this.showMessage = true
      if(this.usernameLog !== '' && this.passwordLog == '') this.message = 'Veuillez indiquer votre mot de passe', this.showMessage = true
      if(this.usernameLog == '' && this.passwordLog !== '') this.message = 'Veuillez renseigner votre identifiant', this.showMessage = true
      else tokenGet = await AxiosServices.instance.post('/user/login', {username: this.usernameLog, password: this.passwordLog})
      if(tokenGet.data){
        await DexieServices.addToken(tokenGet.data, this.usernameLog)
        const path = '/user/'+this.usernameLog
        this.$router.push({path: path})
      }
    }
  }
}
</script>

<style scoped lang="scss">
#login{
  background-color: rgb(173, 173, 173);
  width: 90vw;
  margin: 0 auto;
  margin-top: 150px;
  display: flex;
  background-color: rgb(231, 231, 231);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  box-shadow: 5px 5px 5px rgb(173, 173, 173);
  .section{
    position: relative;
    width: 50%;
    height: 50vh;
    h1{
      margin-top: 20px;
      font-size: 40px;
      padding-left: 15px;
      text-transform: uppercase;
    }
    h2{
      font-size: 18px;
      padding-left: 20px;
      margin-bottom: 20px;
      font-weight: normal;
    }
    input{
      width: 50%;
      height: 25px;
      border-radius: 10px;
      background-color: rgb(233, 233, 233);
      border: 1px solid #00203FFF;
      padding-right: 10px;
      padding-left: 10px;
      font-weight: bold;
      font-style: italic;
      color: #727272;
    }
    label{
      display: inline-block;
      font-size: 18px;
      font-weight: bold;
      width: 40%;
      padding-left: 30px;
      margin-bottom: 30px;
      &:first-of-type{
        margin-top: 20px;
      }
    }
    button{
      position: absolute;
      bottom: 10px;
      left: calc((100% - 200px) / 2);
      width: 200px;
      height: 50px;
      border: none;
      background-color: rgb(90, 216, 159);
      color: #00203FFF;
      text-transform: uppercase;
      font-size: 20px;
      font-weight: bold;
      border-radius: 15px;
      cursor: pointer;
    }
    &:first-of-type{
      border-right: solid 1px black;
    }
  }
}
</style>