<template>
  <div id="side-bar" :class="open ? 'open' : 'close'">
   <ul>
     <li v-on:click="open = !open"><i class="fas" :class="open ? 'fa-chevron-left': 'fa-chevron-right'"></i><span v-if="open">Fermer le panneau</span></li>
     <li><i class="fas fa-book"></i><span v-if="open">Ma liste de manga</span></li>
     <li><i class="fas fa-tv"></i><span v-if="open">Ma liste d'anime</span></li>
   </ul>
  </div>
</template>

<script>
//import { DexieServices } from '../services/dexie'
//import { AxiosServices } from '../services/axios'

export default {
  name: 'account-nav',
  data: function(){
    return{
      open: false
    }
  },
  mounted: async function(){
    
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
#side-bar{
  z-index: 10;
  height: 100vh;
  top: 60px;
  background-color: #00203FFF;
  position: fixed;
  overflow: hidden;
  ul{
    position: relative;
    li{
      user-select: none;
      list-style: none;
      position: relative;
      height: 30px;
      margin-bottom: 30px;
      font-size: 25px;
      color: white;
      cursor: pointer;
      &:first-of-type{
        margin-top: 20px;
      }
      span{
        position: fixed;
        left: 55px;
      }
    }
  }
}
#side-bar.open{
  width: 20vw;
  transition-duration: 0.5s;
  li{
    left: 15px;
  }
  span{
    opacity: 1;
  }
}
#side-bar.close{
  width: 50px;
  transition-duration: 0.5s;
  li{
    transform: none !important;
    text-align: center;
  }
  span{
    opacity: 0;
  }
}
</style>
