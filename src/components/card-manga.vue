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
  position: relative;
  height: 150px;
  overflow: hidden;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgb(231, 231, 231);
  padding-top: 10px;
  h1{
    padding-left: 10px;
    text-transform: uppercase;
  }
  h2{
    padding-left: 20px;
    float: left;
  }
  .twice{
    padding-left: 5px;
  }
  p{
    float: none;
    margin: 20px 0 0 10px;
    text-indent: 10px;
  }
  img{
    position: absolute;
    top: 10px;
    right: 30px;
    height: 50px;
  }
}
</style>
