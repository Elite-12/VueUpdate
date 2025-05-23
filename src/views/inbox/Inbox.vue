<template>
  <v-container fluid grid-list-xl pa-0>
    <div class="app-card inbox">
      <v-navigation-drawer temporary absolute v-model="inboxSidebar" :width="225">
        <sidebar></sidebar>
      </v-navigation-drawer>
      <v-layout row wrap>
        <v-col xs12 sm4 md3 lg3 xl2 class="inbox-sidebar">
          <sidebar></sidebar>
        </v-col>
        <v-col xs12 sm12 md9 lg9 xl10 class="inbox-content">
          <div class="inbox-content-wrap">
            <template v-if="selectedEmail === null">
              <div>
                <div class="inbox-page-list d-custom-flex justify-space-between align-items-center">
                  <div class="d-custom-flex align-items-center">
                    <div class="ham-menu-sm d-none">
                      <v-btn text icon class="mr-3 my-0" @click="toggleInboxSidebar">
                        <v-icon class="grey--text" icon="md:menu" />
                      </v-btn>
                    </div>
                    <span class="mail-count">1-10 from 23</span>
                  </div>
                  <ul class="list-inline">
                    <li>
                      <v-tooltip v-model="reload" top>
                        <template v-slot:activator="{ on }">
                          <a href="javascript:void(0);" @click="on">
                            <i class="ti-reload"></i>
                          </a>
                        </template>
                        <span>Reload</span>
                      </v-tooltip>
                    </li>
                    <li>
                      <v-tooltip v-model="previous" top>
                        <template v-slot:activator="{ on }">
                          <a href="javascript:void(0);" @click="on">
                            <i class="ti-arrow-left"></i>
                          </a>
                        </template>
                        <span>Previous</span>
                      </v-tooltip>
                    </li>
                    <li>
                      <v-tooltip v-model="next" top>
                        <template v-slot:activator="{ on }">
                          <a href="javascript:void(0);" @click="on">
                            <i class="ti-arrow-right"></i>
                          </a>
                        </template>
                        <span>Next</span>
                      </v-tooltip>
                    </li>
                  </ul>
                </div>
                <search-emails></search-emails>
                <email-listing></email-listing>
              </div>
            </template>
            <template>
              <email-detail></email-detail>
            </template>
          </div>
        </v-col>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import EmailListing from './EmailListing'
import Sidebar from './Sidebar'
import EmailDetail from './EmailDetail'
import SearchEmails from './SearchEmails'
import { mapGetters } from 'vuex'
import { getCurrentAppLayout } from '@/helpers/helpers'

export default {
  mounted() {
    const contentWrapper = document.querySelector('.v-main__wrap')
    if (contentWrapper) {
      contentWrapper.style.overflow = 'hidden'
    }
    const selector = document.querySelector('.app-boxed-layout .app-content')
    if (selector) {
      selector.style.overflow = 'hidden'
    }
  },
  destroyed() {
    const contentWrapper = document.querySelector('.v-main__wrap')
    if (contentWrapper !== null) {
      if (
        getCurrentAppLayout(this.$router) === 'boxed' ||
        getCurrentAppLayout(this.$router) === 'boxed-v2'
      ) {
        if (contentWrapper) {
          contentWrapper.style.overflow = ''
        }
      } else {
        contentWrapper.style.overflow = 'auto'
      }
    }
    const selector = document.querySelector('.app-boxed-layout .app-content')
    if (selector) {
      selector.style.overflow = 'auto'
    }
  },
  components: {
    EmailListing,
    Sidebar,
    EmailDetail,
    SearchEmails,
  },
  computed: {
    ...mapGetters(['selectedEmail']),
  },
  data() {
    return {
      reload: false,
      previous: false,
      next: false,
      inboxSidebar: false,
    }
  },
  methods: {
    toggleInboxSidebar() {
      this.inboxSidebar = !this.inboxSidebar
    },
  },
}
</script>
