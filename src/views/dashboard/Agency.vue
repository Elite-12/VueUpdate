<template>
  <div>
    <v-container fluid grid-list-xl>
      <v-layout row wrap>
        <v-col xl6 lg6 md6 sm7 xs12>
          <today-weather></today-weather>
          <div class="welcome-message mb-4">
            <h4>Good morning, Jacqueline.</h4>
            <p>Here’s what’s happening with your store this week.</p>
          </div>
          <div class="welcome-chart">
            <v-layout row wrap>
              <v-col xl6 lg6 md6 sm6 xs12>
                <h2 class="mb-0 grey--text">$21,349.29</h2>
                <span class="d-block fs-12 mb-4 grey--text fw-normal">Earned Today</span>
                <bar-chart :height="110" :dataSets="earnedToday"> </bar-chart>
              </v-col>
              <v-col xl6 lg6 md6 sm6 xs12>
                <h2 class="mb-0 grey--text">15,800</h2>
                <span class="d-block fs-12 mb-4 grey--text fw-normal">Items Sold</span>
                <bar-chart :height="110" :dataSets="itemsSold"> </bar-chart>
              </v-col>
            </v-layout>
          </div>
        </v-col>
        <v-col xl6 lg6 md6 xs12 sm5 class="d-sm-block d-none">
          <div class="d-custom-flex align-items-center justify-center">
            <img
              class="img-responsive"
              src="/static/img/agency-welcome.png"
              height="300"
              width="550"
              alt="agency block"
            />
          </div>
        </v-col>
      </v-layout>
      <v-layout row wrap>
        <app-card
          :heading="$t('message.salesAndEarning')"
          :fullBlock="true"
          :reloadable="true"
          :fullScreen="true"
          :closeable="true"
          colClasses="xl6 lg6 md6 sm12 xs12"
          customClasses="sales-chart-widget"
        >
          <div class="pa-4">
            <h2 class="mb-0">$35,455</h2>
            <p class="fs-12 grey--text fw-normal">Total Sales This Month</p>
          </div>
          <line-chart-with-area
            :color="salesAndEarning.color"
            :dataSet="salesAndEarning.data"
            :dataLabels="salesAndEarning.labels"
            :enableXAxesLine="false"
            :height="115"
          >
          </line-chart-with-area>
        </app-card>
        <v-col xl6 lg6 md6 sm12 xs12>
          <v-layout row wrap>
            <v-col xl6 lg6 md6 sm6 xs12 class="col-height-auto">
              <app-card custom-classes="mb-5">
                <h6 class="mb-0">$2156</h6>
                <p class="fs-12 grey--text fw-normal">{{ $t('message.totalEarnings') }}</p>
                <line-chart-shadow
                  :dataSet="totalEarnings.data"
                  :lineTension="totalEarnings.lineTension"
                  :dataLabels="totalEarnings.labels"
                  :width="370"
                  :height="100"
                  :borderColor="totalEarnings.borderColor"
                  :enableGradient="false"
                >
                </line-chart-shadow>
              </app-card>
              <app-card>
                <h6 class="mb-0">$2156</h6>
                <p class="fs-12 grey--text fw-normal">{{ $t('message.totalExpences') }}</p>
                <line-chart-shadow
                  :dataSet="totalExpences.data"
                  :lineTension="totalExpences.lineTension"
                  :dataLabels="totalExpences.labels"
                  :width="370"
                  :height="100"
                  :borderColor="totalExpences.borderColor"
                  :enableGradient="false"
                >
                </line-chart-shadow>
              </app-card>
            </v-col>
            <v-col xl6 lg6 md6 sm6 xs12 class="col-height-auto">
              <app-card custom-classes="mb-5">
                <h6 class="mb-0">$2156</h6>
                <p class="fs-12 grey--text fw-normal">{{ $t('message.netProfit') }}</p>
                <line-chart-shadow
                  :dataSet="netProfit.data"
                  :lineTension="netProfit.lineTension"
                  :dataLabels="netProfit.labels"
                  :width="370"
                  :height="100"
                  :borderColor="netProfit.borderColor"
                  :enableGradient="false"
                >
                </line-chart-shadow>
              </app-card>
              <app-card>
                <h6 class="mb-0">$2156</h6>
                <p class="fs-12 grey--text fw-normal">{{ $t('message.onlineRevenue') }}</p>
                <line-chart-shadow
                  :dataSet="onlineRevenue.data"
                  :lineTension="onlineRevenue.lineTension"
                  :dataLabels="onlineRevenue.labels"
                  :width="370"
                  :height="100"
                  :borderColor="onlineRevenue.borderColor"
                  :enableGradient="false"
                >
                </line-chart-shadow>
              </app-card>
            </v-col>
          </v-layout>
        </v-col>
      </v-layout>
      <v-layout row wrap>
        <app-card
          :heading="$t('message.newRequest')"
          colClasses="xl4 lg4 md4 xs12 sm12"
          :fullBlock="true"
          :reloadable="true"
          :closeable="true"
          :fullScreen="true"
        >
          <users-list></users-list>
        </app-card>
        <app-card
          colClasses="xl8 lg8 md8 xs12 sm12"
          :heading="$t('message.projectStatus')"
          :fullBlock="true"
          :reloadable="true"
          :closeable="true"
          :fullScreen="true"
        >
          <project-status></project-status>
        </app-card>
      </v-layout>
      <v-layout row wrap>
        <app-card
          colClasses="xl8 lg8 md7 xs12 sm12"
          :heading="$t('message.adCampaignPerfomance')"
          :closeable="true"
          :fullScreen="true"
          :reloadable="true"
          contentCustomClass="pos-relative d-flex"
          customClasses="ad-campaign justify-space-between"
        >
          <ad-campaign-perfomance
            style="width: 100%"
            :height="450"
            :data="adCampaignPerfomanceData"
          ></ad-campaign-perfomance>
        </app-card>
        <app-card colClasses="xl4 lg4 md5 xs12 sm12" :fullBlock="true" customClasses="quote-wrap2">
          <quote-of-the-day></quote-of-the-day>
        </app-card>
      </v-layout>
      <v-layout row wrap>
        <app-card
          colClasses="xl4 lg4 md4 xs12 sm6"
          :heading="$t('message.todoList')"
          :fullBlock="true"
          :reloadable="true"
          :closeable="true"
          :fullScreen="true"
        >
          <todo-list></todo-list>
        </app-card>
        <app-card
          :heading="$t('message.topSellingTheme')"
          colClasses="xl4 lg4 md4 sm6 xs12"
          :fullBlock="true"
          :reloadable="true"
          :closeable="true"
          :fullScreen="true"
          :footer="true"
        >
          <recent-sales></recent-sales>
          <div class="action" slot="footer">
            <v-btn small color="primary">{{ $t('message.viewAll') }}</v-btn>
          </div>
        </app-card>
        <v-col xl4 lg4 md4 sm12 d-xs-full>
          <v-layout row wrap>
            <app-card colClasses="xl12 lg12 md12 sm6 xs12">
              <new-order-countdown></new-order-countdown>
            </app-card>
            <app-card colClasses="xl12 lg12 md12 sm6 xs12">
              <followers></followers>
            </app-card>
            <app-card
              :fullBlock="true"
              customClasses="booking-info-wrap"
              colClasses="xl12 lg12 md12 sm12 xs12"
            >
              <booking-info></booking-info>
            </app-card>
          </v-layout>
        </v-col>
      </v-layout>
      <v-layout row wrap>
        <app-card
          :fullBlock="true"
          colClasses="xl4 lg4 md4 sm12 xs12 col-height-auto active-user-wrap"
        >
          <active-user :data="activeUser"></active-user>
        </app-card>
        <app-card
          :heading="$t('message.employeePayroll')"
          :withTabs="true"
          :tabs="[$t('message.lastMonth'), $t('message.allTime')]"
          :fullBlock="true"
          colClasses="xl8 lg8 md8 sm12 d-xs-full"
        >
          <employee-payroll></employee-payroll>
        </app-card>
      </v-layout>
      <v-layout row wrap>
        <v-col xl8 lg8 md8 sm12 xs12 class="col-height-auto">
          <v-layout row wrap>
            <v-col xl12 lg12 md12 xs12>
              <mailbox></mailbox>
            </v-col>
          </v-layout>
          <v-layout row wrap>
            <app-card
              colClasses="xl6 lg6 md6 sm6 xs12"
              :heading="$t('message.newsletter')"
              :fullScreen="true"
              :reloadable="true"
              :closeable="true"
            >
              <news-letter-campaign
                :height="350"
                :labels="['1', '2', '3', '4', '5', '6', '7']"
                :data1="[19, 21, 18, 20, 23, 16, 18, 30]"
                :data2="[10, 8, 14, 11, 10, 12, 10, 0]"
              ></news-letter-campaign>
            </app-card>
            <app-card
              colClasses="xl6 lg6 md6 sm6 xs12 col-height-auto"
              :fullBlock="true"
              class="top-author-wrap"
            >
              <top-authors></top-authors>
            </app-card>
          </v-layout>
        </v-col>
        <v-col xl4 lg4 md4 xs12 sm12>
          <v-layout row wrap>
            <app-card
              colClasses="xl12 lg12 md12 xs12 sm6"
              :heading="$t('message.profitShare')"
              :closeable="true"
              :fullScreen="true"
              :reloadable="true"
              customClasses="profit-share-widget"
            >
              <profit-share></profit-share>
            </app-card>
            <v-col xl12 lg12 md12 sm6 xs12>
              <activity></activity>
            </v-col>
          </v-layout>
        </v-col>
      </v-layout>
      <v-layout row wrap>
        <v-col xl6 lg6 md6 sm12 xs12>
          <chat></chat>
        </v-col>
        <v-col xl6 lg6 md6 sm12 xs12>
          <event-calendar></event-calendar>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BarChart from '@/components/Charts/BarChart'
import LineChartWithArea from '@/components/Charts/LineChartWithArea'
import LineChartShadow from '@/components/Charts/LineChartShadow'
import AdCampaignPerfomance from '@/components/Charts/AdCampaignPerfomance'
import DoughnutChartV2 from '@/components/Charts/DoughnutChartV2'
import NewsLetterCampaign from '@/components/Charts/NewsLetterCampaign'

// widgets
import TodoList from '@/components/Widgets/ToDoList'
import ProjectStatus from '@/components/Widgets/ProjectStatus'
import UsersList from '@/components/Widgets/UsersList'
import RecentSales from '@/components/Widgets/RecentSales'
import QuoteOfTheDay from '@/components/Widgets/QuoteOfTheDay'
import NewOrderCountdown from '@/components/Widgets/NewOrderCountdown'
import Followers from '@/components/Widgets/Followers'
import BookingInfo from '@/components/Widgets/BookingInfo'
import EmployeePayroll from '@/components/Widgets/EmployeePayroll'
import Mailbox from '@/components/Widgets/Mailbox'
import ActiveUser from '@/components/Widgets/ActiveUser'
import TopAuthors from '@/components/Widgets/TopAuthors'
import Chat from '@/components/Widgets/Chat'
import EventCalendar from '@/components/Widgets/EventCalendar'
import Activity from '@/components/Widgets/Activity'
import TodayWeather from '@/components/Widgets/TodayWeather'
import ProfitShare from '@/components/Widgets/ProfitShare'

// data
import {
  earnedToday,
  itemsSold,
  salesAndEarning,
  totalEarnings,
  netProfit,
  onlineRevenue,
  totalExpences,
  adCampaignPerfomanceData,
} from './data'
import { activeUser } from '@/views/widgets/data'

export default {
  components: {
    BarChart,
    LineChartWithArea,
    LineChartShadow,
    TodoList,
    ProjectStatus,
    UsersList,
    RecentSales,
    QuoteOfTheDay,
    NewOrderCountdown,
    Followers,
    BookingInfo,
    EmployeePayroll,
    AdCampaignPerfomance,
    DoughnutChartV2,
    Mailbox,
    ActiveUser,
    TopAuthors,
    Chat,
    EventCalendar,
    Activity,
    NewsLetterCampaign,
    TodayWeather,
    ProfitShare,
  },
  data() {
    return {
      earnedToday,
      itemsSold,
      salesAndEarning,
      totalEarnings,
      netProfit,
      onlineRevenue,
      totalExpences,
      adCampaignPerfomanceData,
      activeUser,
    }
  },
}
</script>
