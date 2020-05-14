<template>
  <div id="main">
    <navbar />
    Logged {{username}}
  </div>
</template>

<script>
import navbar from '@/components/nav.vue'
import {AxiosServices} from '../services/axios'
import {DexieServices} from '../services/dexie'

export default {
  name: 'Account',
  components: {
    navbar
  },
  data: function() {
    return {
      username: ''
    }
  },
  mounted: async function(){
    await this.initRoute()
  },
  methods: {
    initRoute: async function(){
      this.username = await this.$route.params.user
      console.log(this.$route.params.user)
    }
  }
}
</script>

<style scoped lang="scss">

</style>