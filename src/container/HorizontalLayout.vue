<!-- App Main Structure -->
<template>
  <div class="app-horizontal-layout">
    <template v-if="loading">
      <rotate-square2></rotate-square2>
    </template>
    <template v-else>
      <!-- App Header -->
      <app-header :horizontal="true"></app-header>
      <app-horizontal-menus></app-horizontal-menus>
      <v-navigation-drawer absolute temporary v-model="horizontalLayoutSidebar" :width="250">
        <app-sidebar></app-sidebar>
      </v-navigation-drawer>
      <!-- App Main Content -->
      <v-main>
        <!-- App Router -->
        <transition name="router-anim" :enter-active-class="`animated ${selectedRouterAnimation}`">
          <router-view></router-view>
        </transition>
      </v-main>
      <!-- app customizer -->
      <app-customizer></app-customizer>
    </template>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'
import Customizer from '@/components/Customizer/Customizer'
import AppHorizontalMenus from '@/components/AppHorizontalMenus/AppHorizontalMenus'
import PageTitleBar from '@/components/PageTitleBar/PageTitleBar'
import { mapGetters } from 'vuex'
import Sidebar from '@/components/Sidebar/Sidebar'

export default {
  data() {
    return {
      loading: true,
    }
  },
  components: {
    appHeader: Header,
    appCustomizer: Customizer,
    appHorizontalMenus: AppHorizontalMenus,
    PageTitleBar,
    appSidebar: Sidebar,
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  computed: {
    ...mapGetters(['selectedRouterAnimation']),
    horizontalLayoutSidebar: {
      get() {
        return this.$store.getters.horizontalLayoutSidebar
      },
      set(val) {
        this.$store.dispatch('toggleHorizontalLayoutSidebar', val)
      },
    },
    // computed property to get page breadcrumbs
    pageTitle() {
      return this.$breadcrumbs[0].meta.title
    },
    pageBreadcrumb() {
      return this.$breadcrumbs[0].meta.breadcrumb
    },
  },
}
</script>

<style scoped>
.app-horizontal-layout {
  height: 100vh;
}
</style>
