<template>
  <div class="courses-wrap">
    <page-title-bar></page-title-bar>
    <v-container fluid grid-list-xl>
      <course-banner></course-banner>
      <v-layout row wrap align-center justify-center fill-height courses-inner>
        <v-col sm12 xs12 md12 lg12 xl12>
          <div class="courses-grid-sec">
            <v-layout row wrap custom-align-stretch fill-heigh course-grid-layout>
              <app-card
                :fullScreen="true"
                :closeable="true"
                colClasses="xs12 sm12 md12 lg4 xl4"
                customClasses="custom-grey collection-group"
              >
                <h2>Best collection from best tutors from around the globe</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </app-card>
              <app-card
                :fullScreen="true"
                :closeable="true"
                colClasses="xs12 sm12 md12 lg8 xl8"
                customClasses="tab-wrap pa-0"
                content
              >
                <v-tabs v-if="CourseData.courses" slider-color="primary" v-model="tabType">
                  <v-tab :value="CourseData.courses.management" ripple>
                    {{ $t('message.management') }}
                  </v-tab>
                  <v-tab :value="CourseData.courses.design" ripple>
                    {{ $t('message.design') }}
                  </v-tab>
                  <v-tab :value="CourseData.courses.development" ripple>
                    {{ $t('message.development') }}
                  </v-tab>
                </v-tabs>
                <v-tabs-window v-model="tabType">
                  <v-tabs-window-item :value="CourseData.courses.management">
                    <course-card
                      :data="isManagement.slice(0, 3)"
                      :cols="6"
                      :colxl="4"
                      :collg="4"
                      :colmd="4"
                      :colsm="12"
                      :colxs="12"
                    ></course-card>
                  </v-tabs-window-item>
                  <v-tabs-window-item :value="CourseData.courses.design">
                    <course-card
                      :data="isDesign"
                      :cols="6"
                      :colxl="4"
                      :collg="4"
                      :colmd="4"
                      :colsm="12"
                      :colxs="12"
                    ></course-card>
                  </v-tabs-window-item>
                  <v-tabs-window-item :value="CourseData.courses.development">
                    <course-card
                      :data="isDevelop"
                      :cols="6"
                      :colxl="4"
                      :collg="4"
                      :colmd="4"
                      :colsm="12"
                      :colxs="12"
                    ></course-card>
                  </v-tabs-window-item>
                </v-tabs-window>
                <div class="view-all-link">
                  <router-link :to="`/${getCurrentAppLayoutHandler() + '/courses/courses-list'}`"
                    >View All</router-link
                  >
                </div>
              </app-card>
            </v-layout>
          </div>
          <div class="courses-grid">
            <v-layout row wrap align-start justify-start fill-height mb-0>
              <v-col sm12 xs12 md12 lg12 xl12>
                <div class="popularity tab-wrap">
                  <v-tabs v-if="CourseData.courses" slider-color="primary" v-model="tabPopularity">
                    <v-tab :value="CourseData.courses.top" ripple>
                      {{ $t('message.top') }}
                    </v-tab>
                    <v-tab :value="CourseData.courses.new" ripple>
                      {{ $t('message.new') }}
                    </v-tab>
                    <v-tab :value="CourseData.courses.trending" ripple>
                      {{ $t('message.trending') }}
                    </v-tab>
                  </v-tabs>
                  <v-tabs-window v-model="tabPopularity">
                    <v-tabs-window-item :value="CourseData.courses.top">
                      <course-card
                        :data="isTop"
                        :cols="6"
                        :colxl="3"
                        :collg="3"
                        :colmd="4"
                        :colsm="6"
                        :colxs="12"
                      ></course-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item :value="CourseData.courses.new">
                      <course-card
                        :data="isNew"
                        :cols="6"
                        :colxl="3"
                        :collg="3"
                        :colmd="4"
                        :colsm="6"
                        :colxs="12"
                      ></course-card>
                    </v-tabs-window-item>
                    <v-tabs-window-item :value="CourseData.courses.trending">
                      <course-card
                        :data="isTrending"
                        :cols="6"
                        :colxl="3"
                        :collg="3"
                        :colmd="4"
                        :colsm="6"
                        :colxs="12"
                      ></course-card>
                    </v-tabs-window-item>
                  </v-tabs-window>
                </div>
              </v-col>
            </v-layout>
          </div>
          <div class="instructor-card-wrap">
            <h3>{{ $t('message.popularInstructors') }}</h3>
            <instructor-card></instructor-card>
          </div>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import CourseBanner from './CourseWidgets/CourseBanner'
import InstructorCard from './CourseWidgets/InstructorCard'
import CourseData from './data'
import CourseCard from './CourseWidgets/CourseCard'
import { getCurrentAppLayout } from '@/helpers/helpers'
export default {
  data() {
    return {
      CourseData,
    }
  },
  computed: {
    isManagement() {
      return this.CourseData.courses.filter((item) => {
        return item.type == 'management'
      })
    },
    isDesign() {
      return this.CourseData.courses.filter((item) => {
        return item.type == 'design'
      })
    },
    isDevelop() {
      return this.CourseData.courses.filter((item) => {
        return item.type == 'develop'
      })
    },
    isTop() {
      return this.CourseData.courses.filter((item) => {
        return item.popular == 'top'
      })
    },
    isNew() {
      return this.CourseData.courses.filter((item) => {
        return item.popular == 'new'
      })
    },
    isTrending() {
      return this.CourseData.courses.filter((item) => {
        return item.popular == 'trending'
      })
    },
  },
  components: {
    CourseBanner,
    InstructorCard,
    CourseCard,
  },
  methods: {
    getCurrentAppLayoutHandler() {
      return getCurrentAppLayout(this.$router)
    },
  },
}
</script>

<script setup>
import { ref } from 'vue'
import CourseData from './data'

const tabType = ref(CourseData.courses.management)
const tabPopularity = ref(CourseData.courses.top)
</script>
