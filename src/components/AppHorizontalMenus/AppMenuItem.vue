<!-- Nav Menu Item -->
<template>
  <li class="nav-item">
    <template v-if="menu.items !== null">
      <a href="javascript:void(0);" class="nav-link">
        <i class="zmdi" :class="menu.action"></i>
        {{ $t(menu.title) }}
        <template v-if="menu.label == 'New'">
          <span class="sidebar-label">{{ menu.label }}</span>
        </template>
      </a>
      <ul class="list-unstyled sub-menu-child" :class="{ 'deep-level': menu.items.length > 10 }">
        <template v-for="subMenu in menu.items">
          <li class="nav-item" :key="subMenu.title">
            <router-link
              :to="
                !subMenu.exact ? `/${getCurrentAppLayoutHandler() + subMenu.path}` : subMenu.path
              "
              class="nav-link"
              activeClass="active"
            >
              {{ $t(subMenu.title) }}
              <template v-if="subMenu.label == 'New'">
                <span class="sidebar-label">{{ subMenu.label }}</span>
              </template>
            </router-link>
          </li>
        </template>
      </ul>
    </template>
    <template v-else>
      <router-link
        :to="!menu.exact ? `/${getCurrentAppLayoutHandler() + menu.path}` : menu.path"
        class="nav-link no-arrow"
        activeClass="active"
      >
        <i class="zmdi" :class="menu.action"></i>
        {{ $t(menu.title) }}
        <template v-if="menu.label == 'New'">
          <span class="sidebar-label">{{ menu.label }}</span>
        </template>
      </router-link>
    </template>
  </li>
</template>

<script>
import { getCurrentAppLayout } from '@/helpers/helpers'

export default {
  props: ['menu'],
  methods: {
    getCurrentAppLayoutHandler() {
      return getCurrentAppLayout(this.$router)
    },
  },
}
</script>
