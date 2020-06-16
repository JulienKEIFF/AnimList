<template>
  <div id="side-bar" :class="open ? 'open' : 'close'">
   <ul class="icon">
     <li v-on:click="open = !open"><i class="fas" :class="open ? 'fa-chevron-left': 'fa-chevron-right'"></i></li>
     <li><i class="fas fa-book"></i></li>
     <li><i class="fas fa-tv"></i></li>
   </ul>
   <ul class="descr">
     <li v-if="open" v-on:click="open = !open">Fermer le panneau</li>
     <li v-if="open">Ma liste de manga</li>
     <li v-if="open">Ma liste d'anime</li>
   </ul>
  </div>
</template>

<script>
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
  background-color: #00203FFF;
  position: fixed;
  overflow: hidden;
  .icon{
    position: relative;
    li{
      user-select: none;
      list-style: none;
      position: relative;
      height: 30px;
      margin-bottom: 30px;
      font-size: 25px;
      color: white;
      width: 70px;
      text-align: center;
      cursor: pointer;
      &:first-of-type{
        margin-top: 20px;
      }
    }
  }
  .descr{
    position: absolute;
    top: 30px;
    margin-left: 70px;
    float: left;
    li{
      user-select: none;
      list-style: none;
      position: relative;
      height: 30px;
      margin-bottom: 30px;
      font-size: 25px;
      color: white;
      width: 300px;
      cursor: pointer;
      &:first-of-type{
        margin-top: 20px;
      }
    }
  }
}


@media screen and (min-width: 1180px){
  #side-bar{
      top: 60px;
    .icon{
      top: 30px;
      width: 50px;
    }
  }
  #side-bar.open{
    width: 40vw;
    transition-duration: 0.5s;
  }
  #side-bar.close{
    width: 70px;
    transition-duration: 0.5s;
  }
}

@media screen and (min-width: 650px) and (max-width: 1180px){
  #side-bar{
    top: 40px;
    .icon{
      top: 30px;
      font-size: 200px;
    }
  }
   #side-bar.open{
    width: 40vw;
    transition-duration: 0.5s;
  }
  #side-bar.close{
    width: 70px;
    transition-duration: 0.5s;
  }
}

@media screen and (max-width: 850px){
  #side-bar{
    top: 40px;
    .icon{
      top: 30px;
      width: 50px;
    }
  }
   #side-bar.open{
    width: 100vw;
    transition-duration: 0.5s;
  }
  #side-bar.close{
    width: 70px;
    transition-duration: 0.5s;
  }
}
</style>
