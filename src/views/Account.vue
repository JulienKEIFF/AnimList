<template>
  <div id="main">
    <navbar />
    <sidebar />
    <div id="page">
      Logged {{username}}
    </div>
  </div>
</template>

<script>
import navbar from '@/components/nav.vue'
import sidebar from'@/components/account-nav.vue'
import {AxiosServices} from '../services/axios'
import {DexieServices} from '../services/dexie'

export default {
  name: 'Account',
  components: {
    navbar,
    sidebar
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
#page{
  margin-left: 80px;
}
</style>