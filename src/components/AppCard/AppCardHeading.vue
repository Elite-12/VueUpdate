<template>
  <div class="app-card-title" v-if="heading">
    <h3>{{ heading }}</h3>
    <template v-if="!withTabs">
      <div class="app-contextual-link" v-if="fullScreen || reloadable || closeable">
        <v-menu transition="scale-transition" origin="right top" bottom left>
          <template v-slot:activator="{ on }">
            <v-btn class="ma-0" icon @click="on">
              <v-icon icon="md:more_vert" />
            </v-btn>
          </template>
          <v-list class="app-card-action">
            <v-list-item @click="$emit('onCollapse')" v-if="fullScreen">
              <i class="zmdi zmdi-fullscreen primary--text mr-2 fs-14"></i>
              <span>{{ $t('message.fullScreen') }}</span>
            </v-list-item>
            <v-list-item @click="$emit('onReload')" v-if="reloadable">
              <i class="zmdi zmdi-refresh success--text mr-2 fs-14"></i>
              <span>{{ $t('message.reload') }}</span>
            </v-list-item>
            <v-list-item @click="$emit('onClose')" v-if="closeable">
              <i class="zmdi zmdi-close mr-2 error--text fs-14"></i>
              <span>{{ $t('message.close') }}</span>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </template>
    <template v-else>
      <div class="app-contextual-link">
        <ul class="custom-tab-wrap list-inline">
          <template v-for="(tab, key) in tabs" :key="key">
            <li @click="onChangeTab(key)">
              <a
                href="javascript:void(0)"
                class="fs-12 fw-normal px-2 py-1 rounded mx-1"
                :class="[{ 'primary white--text': activeTab === key }]"
                >{{ tab }}</a
              >
            </li>
          </template>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: [
    'heading',
    'closeable',
    'reloadable',
    'fullScreen',
    'withTabs',
    'tabs',
    'onCollapse',
    'onReload',
    'onClose',
    'onChangeTabCallback',
  ],
  data() {
    return {
      activeTab: 0,
    }
  },
  methods: {
    onChangeTab(value) {
      this.activeTab = value
      this.$emit('onChangeTabCallback', value)
    },
  },
}
</script>
