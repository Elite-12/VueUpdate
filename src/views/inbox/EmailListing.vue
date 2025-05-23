<template>
  <div class="inbox-listing">
    <PerfectScrollbar class="inbox-content-scroll" :style="getScrollHeight()">
      <v-col class="d-custom-flex align-items-center justify-center h-100" v-if="loadingEmails">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
      <template v-else>
        <v-list class="list-aqua-ripple" v-if="emails && emails.length > 0">
          <v-list-item v-for="(item, key) in emails" :key="key" @click="onViewEmail(item)" ripple>
            <template class="py-0">
              <v-checkbox
                color="primary"
                :input-value="item.value"
                @click.stop="onSelectEmail(item)"
              ></v-checkbox>
              <v-btn class="mx-2" icon @click.stop="markAsStarEmail(item)">
                <i
                  class="zmdi zmdi-star font-lg"
                  :class="{ 'warning--text': item.starred, 'grey--text': !item.starred }"
                ></i>
              </v-btn>
              <div class="media">
                <v-avatar class="media-left mr-10">
                  <img
                    :src="item.avatarSrc"
                    alt="avatar"
                    height="40"
                    width="40"
                    class="img-responsive"
                  />
                </v-avatar>
                <div class="media-body d-custom-flex align-items-center">
                  <div class="d-inline-block">
                    <h6 class="mb-1">{{ item.userName }}</h6>
                    <span class="fs-12 d-inline-block fw-normal">{{ item.subject }}</span>
                  </div>
                  <p class="fs-12 grey--text w-75 d-inline-block mb-0 mx-6 fw-normal">
                    {{ item.body }}
                  </p>
                </div>
              </div>
            </template>
            <v-list-item-action class="my-0">
              <span class="ml-auto fs-12 grey--text fw-normal">{{ item.time }} hour ago </span>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <div class="h-100 d-flex align-items-center justify-center" v-else>
          <h3>No Emails Found In Selected Folder</h3>
        </div>
      </template>
    </PerfectScrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCurrentAppLayout } from '@/helpers/helpers'

export default {
  computed: {
    ...mapGetters(['emails', 'loadingEmails']),
  },
  mounted() {
    this.$store.dispatch('getEmails')
  },
  methods: {
    onSelectEmail(email) {
      this.$store.dispatch('onSelectEmail', email)
    },
    markAsStarEmail(email) {
      this.$store.dispatch('markAsStarEmail', email)
    },
    onViewEmail(email) {
      this.$store.dispatch('onViewEmail', email)
    },
    getScrollHeight() {
      let layout = getCurrentAppLayout(this.$router)
      switch (layout) {
        case 'default':
          return 'height:calc(100vh - 220px)'
        case 'mini':
          return 'height:calc(100vh - 220px)'
        case 'horizontal':
          return 'height:calc(100vh - 268px)'
        case 'boxed':
          return 'height:calc(100vh - 390px)'
        case 'boxed-v2':
          return 'height:calc(100vh - 390px)'
        default:
          return 'height:calc(100vh - 220px)'
      }
    },
  },
  data() {
    return {
      notifications: false,
    }
  },
}
</script>
