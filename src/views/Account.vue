<template>
  <div id="main">
    <navbar />

    <div id="login" v-if="!conected">
      <div class="section">
        <h1>Se connecter</h1>
        <h2>Déja un compte ? Alors connectez-vous ici !</h2>
        <label for="username">Utilisateur</label>
        <input type="text" name="username">
        <br>
        <label for="password">Mot de passe</label>
        <input type="password" name="password">
        <button>Connexion</button>
      </div>
      <div class="section">
        <h1>Pas encore de compte ?</h1>
        <h2>Creer un compte gratuitement</h2>
        <label for="username">Utilisateur</label>
        <input type="text" name="username">
        <br>
        <label for="password">Mot de passe</label>
        <input type="password" name="password">
        <br>
        <label for="password2">Retaper le mot de passe</label>
        <input type="password" name="password2">
        <button>S'inscrire</button>
      </div>
    </div>

    <div id="connected" v-if="conected">
      coucou conected
    </div>

  </div>
</template>

<script>
import navbar from '@/components/nav.vue'

export default {
  name: 'Account',
  components: {
    navbar
  },
  data: function() {
    return {
      conected: false
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