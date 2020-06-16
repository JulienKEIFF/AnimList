<template>
  <div id="nav-bar">
    <ul>
      <router-link tag="li" class="title" to="/">Animlist</router-link>
      <router-link tag="li" to="/mangas"><i class="fas fa-book"></i>Mangas</router-link>
      <router-link tag="li" to="/animes"><i class="fas fa-tv"></i>Animes</router-link>
      <router-link tag="li" :to="path"><i class="fas fa-user"></i>Mon Compte</router-link>
      <li v-if="connected" v-on:click="logout()"><i class="fas fa-sign-out-alt"></i></li>
      <div id="search">
        <input type="text" name="search" placeholder="Rechercher un manga, un anime">
        <i class="fas fa-search search-icon"></i>
      </div>
    </ul>
  </div>
</template>

<script>
import { DexieServices } from '../services/dexie'
import { AxiosServices } from '../services/axios'

export default {
  name: 'navbar',
  data: function(){
    return{
      path: '',
      connected: false
    }
  },
  mounted: async function(){
    await this.getToken()
    this.connected = await this.isConnected()
  },
  methods: {
    getToken: async function(){
      const token = await DexieServices.getToken()
      if(token) this.path = '/user/'+token.username
      if(!token) this.path = '/login'
    },
    isConnected: async function(){
      if(await DexieServices.getToken() === undefined) return false
      const localToken = await DexieServices.getToken()
      let servToken
      if(localToken) servToken = await AxiosServices.instance.post('/user/token', {username: localToken.username})
      if(localToken.token === servToken.data.token) return true
      else return false
    },
    logout: async function(){
      await DexieServices.logout()
      this.$router.go()
    }
  }
}
</script>

<style scoped lang="scss">
#nav-bar{
  z-index: 10;
  position: fixed;
  user-select: none;
  top: 0;
  width: 100%;
  background-color: #00203FFF;
  padding-left: 30px;
  display: flex;
  align-items: center;
  ul{
    height: 100%;
    display: flex;
    li{
      color: white;
      display: flex;
      margin: 0 10px;
      height: 100%;
      list-style: none;
      text-transform: uppercase;
      font-weight: bolder;
      cursor: pointer;
      transition-duration: 0.05s;
      &:hover{
        background-color: #adefd1ff;
        transition-duration: 0.05s;
        color: black;
      }
    }
    .title{
      padding-top: 7px;
      margin-right: 30px;
      &:hover{
        background-color: #00203FFF;
        color: white;
      }
    }
    i{
      margin-right: 7px;
    }
  }
} 
@media screen and (min-width: 1180px) {
  #nav-bar{
    height: 60px;
    ul{
      li{
        padding: 20px 5px;
        font-size: 20px;
      }
      .title{
      font-size: 40px;
      }
      #search{
        position: absolute;
        right: 10px;
        height: 100%;
        display: flex;
        padding: 15px 0;
        input{
          width: 30vw;
          border-radius: 10px;
          background-color: rgb(233, 233, 233);
          border: 1px solid #00203FFF;
          padding-right: 30px;
          padding-left: 10px;
          font-weight: bold;
          font-style: italic;
          color: #727272;
        }
        .search-icon{
          position: relative;
          top: 7px;
          left: -25px;
        }
      }
    }
  }
}
@media screen and (min-width: 850px) and (max-width: 1180px) {
  #nav-bar{
    height: 45px;
    ul{
      li{
        padding: 10px 3px; 
        font-size: 20px;
      }
      .title{
      font-size: 30px;
      }
      #search{
        position: absolute;
        right: 10px;
        height: 100%;
        display: flex;
        padding: 15px 0;
        input{
          width: 4vw;
          z-index: 5;
          opacity: 0;
          transition-duration: 0.5s;
          margin-top: -5px;
          border-radius: 10px;
          height: 150%;
          background-color: rgb(233, 233, 233);
          border: 1px solid #00203FFF;
          padding-right: 0px;
          padding-left: 0px;
          font-weight: bold;
          font-style: italic;
          color: #727272;
          cursor: pointer;
          &:focus{
            width: 40vw;
            transition-duration: 0.5s;
            opacity: 1;
            margin-top: 40px;
            padding-right: 30px;
            padding-left: 10px;
            cursor: text;
          }
        }
        .search-icon{
          position: relative;
          top: -3px;
          left: -25px;
          color: white;
        }
      }
    }
  }
}
@media screen and (max-width: 850px) {
  #nav-bar{
    height: 40px;
    ul{
      li{
        padding: 15px 3px;
        margin: 0 3px;
        font-size: 15px;
      }
      .title{
      font-size: 30px;
      }
      #search{
        position: absolute;
        right: 10px;
        height: 100%;
        display: flex;
        padding: 15px 0;
        input{
          width: 4vw;
          z-index: 5;
          opacity: 0;
          transition-duration: 0.5s;
          margin-top: -5px;
          border-radius: 10px;
          height: 150%;
          background-color: rgb(233, 233, 233);
          border: 1px solid #00203FFF;
          padding-right: 0px;
          padding-left: 0px;
          font-weight: bold;
          font-style: italic;
          color: #727272;
          cursor: pointer;
          &:focus{
            width: 40vw;
            transition-duration: 0.5s;
            opacity: 1;
            margin-top: 40px;
            padding-right: 30px;
            padding-left: 10px;
            cursor: text;
          }
        }
        .search-icon{
          position: relative;
          top: 0px;
          left: -25px;
          color: white;
          font-size: 15px;
        }
      }
    }
  }
}
</style>
