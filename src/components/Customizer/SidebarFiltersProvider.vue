<template>
  <div class="sidebar-filter" v-if="isDefaultLayout()">
    <h5 class="text-sm-center mb-4">{{ $t('message.sidebarFilters') }}</h5>
    <v-list>
      <v-list-item
        v-ripple="false"
        :class="{ 'active-theme': sidebarFilter === sidebarSelectedFilter }"
        @click="emitSidebarFilters(sidebarFilter)"
        v-for="sidebarFilter in sidebarFilters"
        :key="sidebarFilter.id"
      >
        <template v-slot:prepend>
          <span :class="sidebarFilter.class"></span>
        </template>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
import { getCurrentAppLayout } from '@/helpers/helpers'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['sidebarFilters', 'sidebarSelectedFilter']),
  },
  methods: {
    // color filter handler
    emitSidebarFilters(value) {
      console.log('===========',value.class)
      this.$store.dispatch('changeSidebarFilter', value)
    },
    // function which return app current layout
    isDefaultLayout() {
      const layout = getCurrentAppLayout(this.$router)
      if (layout === 'boxed' || layout === 'horizontal' || layout === 'boxed-v2') {
        return false
      } else {
        return true
      }
    },
  },
}
</script>
