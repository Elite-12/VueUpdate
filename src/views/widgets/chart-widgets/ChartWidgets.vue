<template>
  <div>
    <page-title-bar></page-title-bar>
    <v-container fluid grid-list-xl pt-0 pb-3>
      <v-layout row wrap>
        <app-card
          :heading="$t('message.dailySales')"
          colClasses="xl4 lg4 md4 sm6 xs12"
          customClasses="mb-0"
          :fullScreen="true"
          :reloadable="true"
          :closeable="true"
          :footer="true"
        >
          <!-- Daily Sales -->
          <daily-sales
            :label="dailySales.label"
            :chartdata="dailySales.chartdata"
            :labels="dailySales.labels"
          ></daily-sales>
          <div slot="footer" class="justify-space-between footer-flex">
            <span class="fs-14">
              <v-icon class="mr-1 font-md" icon="md:autorenew" />{{ $t('message.updated10MinAgo') }}
            </span>
          </div>
        </app-card>
        <!-- Traffic Channel -->
        <app-card
          :heading="$t('message.trafficChannel')"
          colClasses="xl4 lg4 md4 sm6 xs12"
          customClasses="mb-0"
          :fullScreen="true"
          :reloadable="true"
          :closeable="true"
          :footer="true"
        >
          <traffic-channel :data="trafficChannel"> </traffic-channel>
          <div slot="footer" class="justify-space-between footer-flex">
            <span class="fs-14">
              <v-icon class="mr-1 font-md" icon="md:autorenew" />{{ $t('message.updated10MinAgo') }}
            </span>
            <v-spacer></v-spacer>
            <v-btn color="primary" small>{{ $t('message.goToCampaign') }}</v-btn>
          </div>
        </app-card>
        <!-- Campaign Performance -->
        <app-card
          :heading="$t('message.campaignPerformance')"
          colClasses="xl4 lg4 md4 sm12 xs12"
          :fullScreen="true"
          :reloadable="true"
          :closeable="true"
          :fullBlock="true"
          customClasses="campaign-performance"
        >
          <campaign-performance></campaign-performance>
        </app-card>
      </v-layout>
    </v-container>
    <v-container fluid grid-list-xl py-0>
      <v-layout row wrap>
        <app-card
          colClasses="xl6 lg6 md6 xs12 sm12"
          :heading="$t('message.visitAndSalesStatistics')"
          customClasses="mb-0"
          :fullScreen="true"
          :reloadable="true"
          :closeable="true"
        >
          <visit-and-sales-statistics></visit-and-sales-statistics>
        </app-card>
        <app-card
          :heading="$t('message.totalEarnings')"
          colClasses="xl6 lg6 md6 xs12 sm12"
          :fullScreen="true"
          :reloadable="true"
          :closeable="true"
        >
          <div class="ladgend-wrapper mb-4">
            <p class="mb-0"><span class="ladgend ladgend-success"></span> <span>Open Rate</span></p>
            <p class="mb-0">
              <span class="ladgend ladgend-pink"></span> <span>Recurring Payments</span>
            </p>
          </div>
          <total-earnings :width="300" :height="300"></total-earnings>
        </app-card>
      </v-layout>
      <v-layout row wrap>
        <v-col xl8 lg8 md8 sm12 xs12 b-100>
          <!-- Useful Widget -->
          <div class="dash-card-wrap d-flex flex-wrap overflow-hidden border-rad-sm">
            <div class="dash-card-light">
              <p>{{ $t('message.averageSteps') }}</p>
              <h2 class="primary--text">3261</h2>
              <radial-progress-bar
                :diameter="135"
                :completed-steps="60"
                :total-steps="100"
                startColor="#3B7CFF"
                stopColor="#1E3C72"
                :strokeWidth="6"
                innerStrokeColor="#EAEAEA"
                class="mx-auto my-6"
              >
                <h2>
                  <i class="ti-arrow-up"></i>
                </h2>
              </radial-progress-bar>
              <h2 class="primary--text">5000</h2>
              <p>{{ $t('message.todaysStep') }}</p>
            </div>
            <div class="dash-card-light">
              <p>{{ $t('message.todaysDistance') }}</p>
              <h2 class="warning--text">7.6 Km</h2>
              <radial-progress-bar
                :diameter="135"
                :completed-steps="40"
                :total-steps="100"
                startColor="#FD7266"
                stopColor="#F7981C"
                :strokeWidth="6"
                innerStrokeColor="#EAEAEA"
                class="mx-auto my-6"
              >
                <h2>
                  <i class="ti-arrow-down"></i>
                </h2>
              </radial-progress-bar>
              <h2 class="warning--text">10 Km</h2>
              <p>{{ $t('message.todaysDistance') }}</p>
            </div>
            <div class="dash-card-light">
              <p>{{ $t('message.calories') }}</p>
              <h2 class="info--text">350</h2>
              <radial-progress-bar
                :diameter="135"
                :completed-steps="90"
                :total-steps="100"
                startColor="#007ADF"
                stopColor="#00ecbc"
                :strokeWidth="6"
                innerStrokeColor="#EAEAEA"
                class="mx-auto my-6"
              >
                <h2>
                  <i class="ti-arrow-up"></i>
                </h2>
              </radial-progress-bar>
              <h2 class="info--text">550</h2>
              <p>{{ $t('message.todaysGoal') }}</p>
            </div>
          </div>
        </v-col>
        <!-- Weekly Summary -->
        <app-card
          :heading="$t('message.weeklySummary')"
          colClasses="xl4 lg4 md4 sm12 xs12 b-100"
          :fullScreen="true"
          :reloadable="true"
          :closeable="true"
        >
          <weekly-summary :height="245"></weekly-summary>
        </app-card>
      </v-layout>
      <v-layout row wrap>
        <app-card
          colClasses="xs12 sm12 md12 lg12 xl12 d-xs-full b-100"
          :heading="$t('message.productSales')"
          customClasses="mb-0"
          contentCustomClass="overflow-hidden"
          :fullScreen="true"
          :reloadable="true"
          :closeable="true"
        >
          <product-sales :height="150"></product-sales>
        </app-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// charts component
import LineChartShadow from '@/components/Charts/LineChartShadow'
import LineChart from '@/components/Charts/LineChart'
import WeeklySummary from '@/components/Charts/WeeklySummary'
import TotalEarnings from '@/components/Charts/TotalEarnings'
import Sales from '@/components/Charts/SalesChartV2'
import ProductSale from '@/components/Charts/ProductSalesChartV2'
import NewsLetterCampaign from '@/components/Charts/NewsLetterCampaign'
import DoughnutChartV2 from '@/components/Charts/DoughnutChartV2'

// widgets
import ServerLoad from '@/components/Widgets/ServerLoad'
import VisitAndSalesStatistics from '@/components/Widgets/VisitAndSalesStatistics'
import ProductSales from '@/components/Widgets/ProductSales'
import BandwidthUsage from '@/components/Widgets/BandwidthUsage'
import TotalDownloads from '@/components/Widgets/TotalDownloads'
import DailySales from '@/components/Widgets/DailySales'
import TrafficChannel from '@/components/Widgets/TrafficChannel'
import CampaignPerformance from '@/components/Widgets/CampaignPerformance.vue'

import RadialProgressBar from 'vue3-radial-progress'

//chart config
import { ChartConfig } from '@/constants/chart-config'

// data
import { dailySales, trafficChannel } from '../data.js'
import { devicesShare, newsLetterCampaignData } from '@/views/dashboard/data'

export default {
  components: {
    LineChartShadow,
    LineChart,
    VisitAndSalesStatistics,
    RadialProgressBar,
    WeeklySummary,
    TotalEarnings,
    Sales,
    ProductSale,
    ProductSales,
    NewsLetterCampaign,
    BandwidthUsage,
    TotalDownloads,
    ServerLoad,
    DailySales,
    TrafficChannel,
    CampaignPerformance,
    DoughnutChartV2,
  },
  data() {
    return {
      labels: ['A', 'B', 'C', 'D', 'E', 'F', 'J', 'K', 'L', 'M', 'N', 'P'],
      totalEarnings: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
      onlineRevenue: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
      offlineRevenue: [30, 50, 25, 55, 44, 60, 30, 20, 40, 20, 40, 44],
      marketingExpenses: [30, 50, 25, 55, 10, 60, 30, 20, 40, 20, 70, 40],
      newClients: [30, 20, 14, 22, 20, 15, 10, 30, 22, 20, 40, 42],
      dailySales,
      trafficChannel,
      devicesShare,
      newsLetterCampaignData,
      ChartConfig,
    }
  },
}
</script>
