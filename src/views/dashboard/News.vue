<template>
  <div>
    <v-container fluid grid-list-xl pt-0>
      <v-layout row wrap>
        <v-col xl12 md12 lg12 sm12 xs12 pa-0>
          <div>
            <trending-news></trending-news>
          </div>
        </v-col>
      </v-layout>
      <v-layout row wrap>
        <app-card
          :heading="$t('message.topHeadlines')"
          :closeable="true"
          :fullScreen="true"
          :reloadable="true"
          :fullBlock="true"
          :footer="true"
          colClasses="xl8 lg8 md7 sm12 xs12"
          customClasses="top-headlines-widget"
        >
          <top-headlines></top-headlines>
          <div slot="footer">
            <v-btn color="success" small>{{ $t('message.addNew') }}</v-btn>
          </div>
        </app-card>
        <v-col xl4 md5 lg4 sm12 xs12>
          <v-layout row wrap>
            <app-card
              :heading="$t('message.visitors')"
              colClasses="xl12 lg12 md12 sm6 xs12"
              customClasses="visitors-widget"
            >
              <visitors></visitors>
            </app-card>
            <app-card
              colClasses="xl12 lg12 md12 sm6 xs12"
              :heading="$t('message.subscribers')"
              customClasses="subscribers-widget"
            >
              <subscribers></subscribers>
            </app-card>
          </v-layout>
        </v-col>
      </v-layout>
      <v-layout row wrap>
        <app-card :heading="$t('message.newsletterCampaign')" colClasses="xl6 lg6 md6 sm12 xs12">
          <news-letter-campaign-v2
            :height="340"
            :width="596"
            :color1="ChartConfig.color.info"
            :color2="ChartConfig.color.primary"
            :label1="newsLetterCampaignData3.label1"
            :label2="newsLetterCampaignData3.label2"
            :dataLabels="newsLetterCampaignData3.labels"
            :dataSet1="newsLetterCampaignData3.data1"
            :dataSet2="newsLetterCampaignData3.data2"
          >
          </news-letter-campaign-v2>
        </app-card>
        <app-card
          :heading="$t('message.recentComments')"
          :closeable="true"
          :fullScreen="true"
          :reloadable="true"
          :fullBlock="true"
          :footer="true"
          colClasses="xl6 lg6 md6 sm12 xs12"
        >
          <recent-comments></recent-comments>
          <div slot="footer">
            <v-btn small color="primary">{{ $t('message.viewAll') }}</v-btn>
          </div>
        </app-card>
      </v-layout>
      <!-- Social Feeds -->
      <v-layout row wrap>
        <app-card colClasses="xl3 lg3 md3 sm6 xs12" customClasses="social-share-wrap">
          <social-feeds socialIcon="zmdi zmdi-facebook" friends="89K" feeds="459" type="facebook">
          </social-feeds>
        </app-card>
        <app-card colClasses="xl3 lg3 md3 sm6 xs12" customClasses="social-share-wrap">
          <social-feeds socialIcon="zmdi zmdi-twitter" friends="89K" feeds="459" type="twitter">
          </social-feeds>
        </app-card>
        <app-card colClasses="xl3 lg3 md3 sm6 xs12" customClasses="social-share-wrap">
          <social-feeds socialIcon="zmdi zmdi-linkedin" friends="89K" feeds="459" type="linkedin">
          </social-feeds>
        </app-card>
        <app-card colClasses="xl3 lg3 md3 sm6 xs12" customClasses="social-share-wrap">
          <social-feeds socialIcon="zmdi zmdi-google" friends="89K" feeds="459" type="google">
          </social-feeds>
        </app-card>
      </v-layout>
      <v-layout row wrap>
        <v-col xl4 lg4 md4 sm12 xs12>
          <activity></activity>
        </v-col>
        <app-card
          colClasses="xl8 lg8 md8 sm12 xs12"
          :withTabs="true"
          :fullBlock="true"
          customClasses="top-news-wrap"
        >
          <top-news></top-news>
        </app-card>
      </v-layout>
      <v-layout row wrap>
        <app-card
          :fullBlock="true"
          colClasses=" xl4 lg4 md4 sm6 xs12 col-height-auto"
          class="top-author-wrap"
        >
          <top-authors></top-authors>
        </app-card>
        <app-card
          colClasses="xl4 lg4 md4 xs12 sm6"
          customClasses="twitter-feeds-widget"
          heading="Twitter Feeds"
        >
          <twitter></twitter>
        </app-card>
        <app-card :fullBlock="true" colClasses="xl4 lg4 md4 sm12 xs12">
          <notifications-v2></notifications-v2>
        </app-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TrendingNews from '@/components/Widgets/TrendingNews'
import TopHeadlines from '@/components/Widgets/TopHeadlines'
import Visitors from '@/components/Widgets/Visitors'
import Subscribers from '@/components/Widgets/Subscribers'
import SocialFeeds from '@/components/Widgets/SocialFeeds'
import Activity from '@/components/Widgets/Activity'
import TopNews from '@/components/Widgets/TopNews'
import NewsLetterCampaignV2 from '@/components/Charts/NewsLetterCampaignV2'
import TopAuthors from '@/components/Widgets/TopAuthors'
import Twitter from '@/components/Widgets/Twitter'
import RecentComments from '@/components/Widgets/RecentComments'
import NotificationsV2 from '@/components/Widgets/NotificationsV2'

// chart config
import { ChartConfig } from '@/constants/chart-config'
// data
import { newsLetterCampaignData3 } from './data'

export default {
  data() {
    return {
      ChartConfig,
      newsLetterCampaignData3,
    }
  },
  components: {
    TrendingNews,
    TopHeadlines,
    Visitors,
    Subscribers,
    SocialFeeds,
    Activity,
    TopNews,
    NewsLetterCampaignV2,
    TopAuthors,
    Twitter,
    RecentComments,
    NotificationsV2,
  },
}
</script>
