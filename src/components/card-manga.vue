<template>
  <div class="card-main">
    <h1>{{object.title}}</h1>
    <h2>{{object.auteur}}</h2>
    <h2 v-if="object.distrib !== 'none'" class="twice">- {{object.distrib}}</h2>
    <br>
    <p>{{object.descr}}</p>
    <img v-if="object.distrib === 'ototo'" src="../assets/crunchyroll.png" alt="ototo-logo">
    <img v-if="object.distrib === 'netflix'" src="../assets/netflix.png" alt="netflix-logo">
    <img v-if="object.distrib === 'wakanim'" src="../assets/wakanim.png" alt="wakanim-logo">
    <img v-if="object.distrib === 'prime'" src="../assets/prime.png" alt="prime-video-logo">
    <img v-if="object.distrib === 'none'" src="">
  </div>
</template>

<script>
export default {
  name: 'card-manga',
  props: {
    object: {
      title: String,
      nbrTome: Number,
      distrib: String,
      descr: String
    }
  },
  data: function() {
    return{
      
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
    height: 55px;
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
    top: 10px;
    right: 30px;
    height: 50px;
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
</style>
