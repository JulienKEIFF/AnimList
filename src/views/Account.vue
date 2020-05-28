<template>
  <div id="main">
    <navbar />
    <sidebar />
    <div id="page">
      Bienvenue {{username}} !!!
      <p>Retrouver bientot ici vos anime et manga favoris !! </p>
      <admin v-if="isAdmin = true" />
    </div>
  </div>
</template>

<script>
import navbar from '@/components/nav.vue'
import sidebar from'@/components/account-nav.vue'
import admin from '@/components/admin.vue'
import {AxiosServices} from '../services/axios'
import {DexieServices} from '../services/dexie'

export default {
  name: 'Account',
  components: {
    navbar,
    sidebar,
    admin
  },
  data: function() {
    return {
      username: '',
      isAdmin: false,
    }
  },
  mounted: async function(){
    await this.initRoute()
    await this.admin()
  },
  methods: {
    initRoute: async function(){
      this.username = await this.$route.params.user
    },
    admin: async function(){
      const res = await AxiosServices.instance.post('/user/token/isadmin', {username: this.$route.params.user})
      this.isAdmin = await res.data.isadmin
    }
  }
}
</script>

<style scoped lang="scss">
#page{
  margin-left: 80px;
}
</style>