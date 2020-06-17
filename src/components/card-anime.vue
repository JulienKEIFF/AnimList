<template>
  <div class="card-main" :class="more ? 'full-card' :''">
    <h1>{{object.title}}</h1>
    <h2>{{object.studio}}</h2>
    <h2 v-if="object.distrib !== 'none'" class="twice">- {{object.distrib}}</h2>
    <h2>- {{object.ep}} épisodes</h2>
    <br>
    <p :class="more ? 'full' : 'minus'">{{object.descr}}</p>
    <img v-if="object.distrib === 'crunchyroll'" src="../assets/crunchyroll.png" alt="crunchyroll-logo">
    <img v-if="object.distrib === 'netflix'" src="../assets/netflix.png" alt="netflix-logo">
    <img v-if="object.distrib === 'wakanim'" src="../assets/wakanim.png" alt="wakanim-logo">
    <img v-if="object.distrib === 'prime'" src="../assets/prime.png" alt="prime-video-logo">
    <img v-if="object.distrib === 'none'" src="">
    <div v-if="readmore" class="readmore" v-on:click="more = !more">Lire {{more ? 'moins' : 'plus'}}</div>
  </div>
</template>

<script>
export default {
  name: 'card-anime',
  props: {
    object: {
      title: String,
      studio: String,
      distrib: String,
      descr: String,
      ep: Number
    }
  },
  data: function() {
    return{
      readmore: true,
      more: false,
    }
  },
  mounted: function () {
    
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
.card-main{
  z-index: 1;
  position: relative;
  margin-top: 40px;
  height: 180px;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgb(231, 231, 231);
  padding-top: 10px;
  h1{
    padding-left: 7px;
    text-transform: uppercase;
  }
  h2{
    padding-left: 7px;
    float: left;
  }
  .twice{
    padding-left: 5px;
  }
  p{
    float: none;
    margin: 20px 20px 0 10px;
    text-indent: 10px;
    text-align: justify;
    justify-content: auto;
    overflow: hidden;
    white-space: pre-line;
  }
  .full{
    height: 100%;
  }
  img{
    position: absolute;
    right: 30px;
  }
  .readmore{
    position: absolute;
    right: 20px;
    bottom: 5px;
    color: #00203FFF;
    cursor: pointer;
  }
}
.full-card{
  height: 100%;
  padding-bottom: 20px;
}
@media screen and (min-width: 800px) {
  .card-main{
    height: 180px;
  }
  h1{
    font-size: 30px;
  }
  h2{
    font-size: 20px;
  }
  p{
    height: 55px;
    font-size: 16px;
  }
  .full{
    height: 100%;
  }
  img{
    top: 10px;
    height: 50px;
  }
  .full-card{
  height: 100%;
  padding-bottom: 20px;
  }
}
@media screen and (min-width: 400px) and (max-width: 800px) {
  .card-main{
    height: 160px;
  }
  h1{
    font-size: 20px;
  }
  h2{
    font-size: 15px;
  }
  p{
    height: 51px;
    font-size: 15px;
  }
  .full{
    height: 100%;
  }
  img{
    top: 15px;;
    height: 35px;
  }
  .full-card{
  height: 100%;
  padding-bottom: 20px;
  }
}
</style>
