<!-- App Main Structure -->
<template>
  <div class="app-mini-layout">
    <template v-if="loading">
      <rotate-square2></rotate-square2>
    </template>
    <template v-else>
      <!-- App Header -->
      <app-header></app-header>
      <!-- App Main Content -->
      <v-main>
        <!-- App Router -->
        <transition name="router-anim" :enter-active-class="`animated ${selectedRouterAnimation}`">
          <router-view></router-view>
        </transition>
      </v-main>
      <!-- app customizer -->
      <app-customizer></app-customizer>
      <!-- User Tour -->
      <!--			<tour></tour>-->
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '@/components/Header/Header.vue'
import Customizer from '@/components/Customizer/Customizer'
import Tour from '@/components/Tour/Tour'
import AppConfig from '@/constants/AppConfig'

export default {
  data() {
    return {
      loading: true,
    }
  },
  components: {
    appHeader: Header,
    appCustomizer: Customizer,
    Tour,
  },
  computed: {
    ...mapGetters(['selectedRouterAnimation']),
  },
  mounted() {
    this.$store.dispatch('setMiniSidebarLayout', true)
    setTimeout(() => {
      this.loading = false
      if (AppConfig.enableUserTour) {
        this.$tours['vuelyTour'].start()
      }
    }, 2000)
  },
  destroyed() {
    this.$store.dispatch('setMiniSidebarLayout', false)
  },
}
</script>

<style scoped>
.app-mini-layout {
  height: 100vh;
}
</style>
