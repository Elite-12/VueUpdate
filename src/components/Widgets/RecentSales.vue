<template>
  <div>
    <app-section-loader :status="loader"></app-section-loader>
    <PerfectScrollbar style="height: 409px" :settings="settings">
      <v-list class="card-list top-selling">
        <v-list-item ripple v-for="(sale, index) in recentSales" :key="index" @click="">
          <img height="50" width="50" :src="sale.img" class="mr-4 img-responsive" />
          <template>
            <v-list-item-subtitle>
              <h5 class="mb-1">{{ sale.title }}</h5>
              <span class="mr-3 fs-12 grey--text fw-normal"
                ><i class="ti-download mr-2"></i>{{ sale.sale }}</span
              >
              <span class="mr-3 fs-12 grey--text fw-normal"
                ><i class="ti-eye mr-2"></i>{{ sale.views }}</span
              >
            </v-list-item-subtitle>
          </template>
          <v-list-item-action>
            <h5 class="mb-0 fw-bold primary--text">{{ sale.price }}</h5>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </PerfectScrollbar>
  </div>
</template>
<script>
import api from '@/api'
export default {
  data() {
    return {
      loader: true,
      recentSales: [],
      settings: {
        maxScrollbarLength: 160,
      },
    }
  },
  mounted() {
    this.getRecentSale()
  },
  methods: {
    getRecentSale() {
      api
        .get('vuely/recentSales.js')
        .then((response) => {
          this.loader = false
          this.recentSales = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
