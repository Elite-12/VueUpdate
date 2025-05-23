<!-- App Main Structure -->
<template>
  <div class="app-boxed-layout boxed-v2">
    <template v-if="loading">
      <rotate-square2></rotate-square2>
    </template>
    <div class="app-container" v-else>
      <!-- App Header -->
      <app-header :horizontal="true"></app-header>
      <v-navigation-drawer
        temporary
        absolute
        v-model="horizontalLayoutSidebar"
        :right="rtlLayout"
        :width="250"
      >
        <app-sidebar></app-sidebar>
      </v-navigation-drawer>
      <!-- App Main Content -->
      <v-main>
        <!-- App Router -->
        <app-horizontal-menus></app-horizontal-menus>
        <div class="app-content">
          <transition
            name="router-anim"
            :enter-active-class="`animated ${selectedRouterAnimation}`"
          >
            <router-view></router-view>
          </transition>
        </div>
      </v-main>
      <v-footer>
        <app-footer></app-footer>
      </v-footer>
      <!-- app customizer -->
      <app-customizer></app-customizer>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/Sidebar'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'
import Customizer from '@/components/Customizer/Customizer'
import AppHorizontalMenus from '@/components/AppHorizontalMenus/AppHorizontalMenus'
import PageTitleBar from '@/components/PageTitleBar/PageTitleBar'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  },
  components: {
    appHeader: Header,
    appSidebar: Sidebar,
    appFooter: Footer,
    appCustomizer: Customizer,
    appHorizontalMenus: AppHorizontalMenus,
    PageTitleBar,
  },
  computed: {
    ...mapGetters(['selectedRouterAnimation', 'rtlLayout']),
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
.app-boxed-layout {
  height: 100vh;
}
</style>
