<template>
  <div class="app-footer d-custom-flex justify-space-between align-items-center">
    <ul class="list-inline footer-menu mb-0">
      <li>
        <v-btn text :to="`/${getCurrentAppLayoutHandler() + '/pages/blog'}`">{{
          $t('message.blog')
        }}</v-btn>
      </li>
      <li>
        <v-btn text :to="`/${getCurrentAppLayoutHandler() + '/pages/pricing-1'}`">{{
          $t('message.pricing')
        }}</v-btn>
      </li>
      <li>
        <v-btn text :to="`/${getCurrentAppLayoutHandler() + '/pages/gallery'}`">{{
          $t('message.gallery')
        }}</v-btn>
      </li>
      <li>
        <v-btn text :to="`/${getCurrentAppLayoutHandler() + '/inbox'}`">{{
          $t('message.inbox')
        }}</v-btn>
      </li>
      <li>
        <v-btn text :to="`/${getCurrentAppLayoutHandler() + '/ecommerce/shop'}`">{{
          $t('message.shop')
        }}</v-btn>
      </li>
    </ul>
    <h6 class="mb-0 fw-normal">{{ copyrightText }}</h6>
  </div>
</template>

<script>
import AppConfig from '@/constants/AppConfig'
import { getCurrentAppLayout } from '@/helpers/helpers'

export default {
  data() {
    return {
      copyrightText: AppConfig.copyrightText,
    }
  },
  methods: {
    getCurrentAppLayoutHandler() {
      return getCurrentAppLayout(this.$router)
    },
  },
}
</script>
