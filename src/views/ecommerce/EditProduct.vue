<template>
  <div>
    <page-title-bar></page-title-bar>
    <v-container fluid pt-0 grid-list-xl>
      <v-layout row wrap align-items-center search-wrap>
        <v-col xs12 sm12 md12 lg12 align-items-center pt-0>
          <app-card customClasses="mb-0 py-12">
            <v-layout row wrap>
              <v-col xs12 sm12 md12 lg3 align-items-center>
                <h2 class="mb-0">Search</h2>
              </v-col>
              <v-col xs12 sm12 md12 lg9 pb-0>
                <div class="d-flex search-field-wrap">
                  <div class="w-75">
                    <v-text-field class="pt-0 pr-4" label="Search Projects"> </v-text-field>
                  </div>
                  <div>
                    <v-btn color="primary" class="my-0 ml-0 mr-2" medium>Search</v-btn>
                  </div>
                </div>
              </v-col>
            </v-layout>
          </app-card>
        </v-col>
      </v-layout>

      <v-layout wrap class="pa-3 align-items-center justify-space-between">
        <div class="title">
          <h3 class="mb-0">{{ $t('message' + '.' + viewType) }}</h3>
        </div>
        <div class="text-right project-icon">
          <v-icon
            class="mr-2"
            :class="{ active: isActive == 'grid' }"
            style="cursor: pointer"
            @click="girdView()"
            icon="md:apps"
          />
          <v-icon
            :class="{ active: isActive == 'list' }"
            style="cursor: pointer"
            @click="listView()"
            icon="md:list"
          />
        </div>
      </v-layout>
      <div class="d-sm-inline-flex mb-5">
        <v-select :items="type" label="Type" class="mr-sm-5"></v-select>
        <v-select :items="recent" label="Recent" class="mr-sm-5"></v-select>
        <v-select :items="noOfItems" label="No of Items"></v-select>
      </div>
      <div v-show="selectedView == 'grid'">
        <products :productsData="productsData"></products>
      </div>
      <div v-show="selectedView == 'list'">
        <edit :productsData="productsData"></edit>
      </div>
    </v-container>
  </div>
</template>
<script>
import Products from '@/components/Widgets/Products'
import Edit from '@/components/Widgets/EditProductList'

import { productsData } from '@/views/ecommerce/data.js'
export default {
  components: {
    Products,
    Edit,
  },
  data() {
    return {
      productsData,
      type: ['Men', 'Women', 'Gadgets', 'Accessories'],
      recent: ['This Week', 'This Month', 'Past Month'],
      noOfItems: ['10', '20', '30'],
      viewType: 'projectGrid',
      selectedView: 'grid',
      isActive: 'grid',
    }
  },
  methods: {
    listView() {
      this.viewType = 'projectList'
      this.selectedView = 'list'
      this.isActive = 'list'
    },
    girdView() {
      this.viewType = 'projectGrid'
      this.selectedView = 'grid'
      this.isActive = 'grid'
    },
  },
}
</script>
