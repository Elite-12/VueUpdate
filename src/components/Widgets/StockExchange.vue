<!-- Stock Exchange Widget -->
<template>
  <div>
    <app-section-loader :status="loader"></app-section-loader>
    <v-list v-if="ratesData !== null">
      <v-list-item>
        <img src="../../assets/flag-icons/icons8-canada.png" height="50px" />
        <template>
          <v-list-item-title>CAD (Canadian Dollar)</v-list-item-title>
        </template>
        <v-spacer></v-spacer>
        <span>
          <v-icon class="succes" icon="md:arrow_upward" />
          {{ ratesData.rates.CAD.toFixed(2) }}
        </span>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <img src="../../assets/flag-icons/icons8-germany.png" height="50px" />
        <template>
          <v-list-item-title>EUR (Euro)</v-list-item-title>
        </template>
        <v-spacer></v-spacer>
        <span>
          <v-icon class="erro" icon="md:arrow_downward" />
          {{ ratesData.rates.EUR.toFixed(2) }}
        </span>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <img src="../../assets/flag-icons/icons8-new_zealand.png" height="50px" />
        <template>
          <v-list-item-title>NZD (New Zealand Dollar)</v-list-item-title>
        </template>
        <v-spacer></v-spacer>
        <span>
          <v-icon class="erro" icon="md:arrow_downward" />
          {{ ratesData.rates.NZD.toFixed(2) }}
        </span>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <img src="../../assets/flag-icons/icons8-india.png" height="50px" />
        <template>
          <v-list-item-title>INR (Indian Rupees</v-list-item-title>
        </template>
        <v-spacer></v-spacer>
        <span>
          <v-icon class="succes" icon="md:arrow_upward" />
          {{ ratesData.rates.INR.toFixed(2) }}
        </span>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-item>
        <img src="../../assets/flag-icons/icons8-singapore.png" height="50px" />
        <template>
          <v-list-item-title> SGD (Singapore Dollar)</v-list-item-title>
        </template>
        <v-spacer></v-spacer>
        <span>
          <v-icon class="erro" icon="md:arrow_downward" />
          {{ ratesData.rates.SGD.toFixed(2) }}
        </span>
      </v-list-item>
      <v-divider></v-divider>
    </v-list>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      loader: true,
      ratesData: null,
    }
  },
  // call get stock exchange method
  mounted() {
    this.getStockExchange()
  },
  methods: {
    getStockExchange() {
      var self = this
      axios
        .get('http://api.fixer.io/latest?base=usd')
        .then(function (response) {
          self.loader = false
          self.ratesData = response.data
        })
        .catch(function (error) {
          console.log('error' + error)
        })
    },
  },
}
</script>
