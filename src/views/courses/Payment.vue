<template>
  <div class="courses-payment">
    <page-title-bar></page-title-bar>
    <v-container fluid grid-list-xl>
      <course-banner></course-banner>
      <v-layout row wrap align-center justify-center fill-height payment-wrap>
        <v-col xs12 sm12 md9 lg9 xl9>
          <app-card
            :heading="$t('message.paymentOptions')"
            customClasses="shop-by-category tab-wrap"
            contentCustomClass="pt-0"
          >
            <v-tabs light slider-color="primary" v-model="activePayment">
              <v-tab :value="0">Debit/Credit Card</v-tab>
              <v-tab :value="1">NetBanking</v-tab>
            </v-tabs>
            <v-tabs-window v-model="activePayment">
              <v-tabs-window-item :value="0">
                <v-card flat>
                  <v-card-text class="pa-0">
                    <div class="header text-center bg-grey pt-5 pb-3">
                      <div class="mb-5">
                        <img alt="discount" src="/static/img/card.png" />
                      </div>
                      <h4 class="mb-5 font-weight-medium">{{ $t('message.enterCardDetails') }}</h4>
                    </div>
                    <v-form class="form-wrapper py-12" ref="form" v-model="valid">
                      <div class="layout row wrap">
                        <v-col xs12 sm12 md12 lg8 xl8>
                          <div class="layout row wrap">
                            <v-col xs12 sm12 md6 lg10 xl10>
                              <v-text-field
                                class="mt-0 pt-0"
                                :rules="inputRules.basictextRules"
                                light
                                label="Card Number"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col xs12 sm12 md6 lg10 xl10>
                              <v-text-field
                                class="mt-0 pt-0"
                                :rules="inputRules.basictextRules"
                                light
                                label="Name"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col xs12 sm6 md6 lg4 xl4>
                              <v-text-field
                                class="mt-0 pt-0"
                                :rules="inputRules.basictextRules"
                                light
                                label="CVV"
                                required
                              >
                              </v-text-field>
                            </v-col>
                            <v-col xs12 sm6 md6 lg4 xl4>
                              <v-text-field
                                class="mt-0 pt-0"
                                :rules="inputRules.basictextRules"
                                light
                                label="Expiry Date(01/10)"
                                required
                              ></v-text-field>
                            </v-col>
                            <v-col xs12 sm12 md12 lg12 xl12>
                              <div class="text-xl-left">
                                <v-btn class="error mr-4" @click="makePayment">{{
                                  $t('message.submit')
                                }}</v-btn>
                                <v-btn @click="clear">{{ $t('message.clear') }}</v-btn>
                              </div>
                            </v-col>
                          </div>
                        </v-col>
                        <v-col
                          xs12
                          sm12
                          md12
                          lg3
                          xl2
                          hidden-md-and-down
                          d-flex
                          justify-center
                          align-center
                          card-visibility
                        >
                          <img
                            class="atm-img"
                            src="/static/img/credit-card.png"
                            alt="Credit card"
                            width="128"
                            height="128"
                          />
                        </v-col>
                      </div>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>
              <v-tabs-window-item :value="1">
                <v-card flat>
                  <v-card-text class="pa-0">
                    <div class="header text-center bg-grey pt-5 pb-3">
                      <div class="mb-5">
                        <img alt="Bank" src="/static/img/online-shop.png" />
                      </div>
                      <h4 class="mb-5 font-weight-medium">Select Bank For Net Banking</h4>
                    </div>
                    <v-divider class="mt-5 mb-2"></v-divider>
                    <div class="text-center">
                      <v-container grid-list-lg>
                        <v-layout row wrap>
                          <v-radio-group
                            v-model="currentSelectedBank"
                            :mandatory="false"
                            row
                            text-center
                          >
                            <v-radio
                              v-for="bank in netbankingsMerchants"
                              :key="bank.value"
                              :value="bank.value"
                              class="radio-img"
                            >
                              <template slot="label">
                                <img :src="bank.img" width="150" height="30" />
                              </template>
                            </v-radio>
                          </v-radio-group>
                        </v-layout>
                        <h6 class="text-left mb-0">All Banks</h6>
                        <div class="layout">
                          <v-col xs9 sm7 md5 lg5 xl5>
                            <v-select :items="bankListing" class="mt-0 pt-0"></v-select>
                          </v-col>
                        </div>
                        <div class="text-left">
                          <v-btn class="error mx-0" @click="makePayment">{{
                            $t('message.makePayment')
                          }}</v-btn>
                        </div>
                      </v-container>
                    </div>
                  </v-card-text>
                </v-card>
              </v-tabs-window-item>
            </v-tabs-window>
          </app-card>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CourseBanner from './CourseWidgets/CourseBanner'
import { mapGetters } from 'vuex'
export default {
  components: {
    CourseBanner,
  },
  data() {
    return {
      valid: false,
      inputRules: {
        basictextRules: [(v) => !!v || 'This field should not be empty.'],
      },
      val: '',
      currentSelectedBank: 'bank-1',
      netbankingsMerchants: [
        {
          value: 'bank-1',
          img: '/static/img/client-logo-1.png',
        },
        {
          value: 'bank-2',
          img: '/static/img/client-logo-2.png',
        },
        {
          value: 'bank-3',
          img: '/static/img/client-logo-3.png',
        },
        {
          value: 'bank-4',
          img: '/static/img/client-logo-4.png',
        },
        {
          value: 'bank-5',
          img: '/static/img/client-logo-5	.png',
        },
      ],
      bankListing: ['ABC', 'DEF', 'GHI', 'JKL'],
    }
  },
  methods: {
    /**
     * This Function is to make Payment
     */
    makePayment() {
      this.$refs.form.validate()
    },
    clear() {
      this.$refs.form.reset()
    },
  },
}
</script>

<script setup>
import { ref } from 'vue'

const activePayment = ref(0)
</script>
