<template>
  <app-card :fullBlock="true">
    <div class="app-event-calendar">
      <div class="event-tab-wrapper">
        <div class="event-heading-wrap primary darken-1 white--text">
          <span class="font-2x fw-semi-bold">23 May 2018</span>
          <p>Wednesday</p>
          <ul class="list-unstyled">
            <li class="event-tab" @click="onTabChange(0)" :class="{ active: selectedTab === 0 }">
              <a href="javascript:void(0)">{{ $t('message.birthdays') }}</a>
            </li>
            <li class="event-tab" @click="onTabChange(1)" :class="{ active: selectedTab === 1 }">
              <a href="javascript:void(0)">{{ $t('message.events') }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content-wrap">
        <PerfectScrollbar style="height: 370px" :settings="settings">
          <v-list two-line v-if="selectedTab === 0" class="event-user-list list-aqua-ripple">
            <template v-for="birthday in birthdays" :key="birthday.id">
              <v-list-item @click="" ripple>
                <v-avatar>
                  <img class="img-responsive" :src="birthday.userAvatar" />
                </v-avatar>
                <template>
                  <h6 class="mb-1">{{ birthday.userName }}</h6>
                  <span class="grey--text fs-12 fw-normal"
                    >Dob: {{ birthday.dob }} / {{ birthday.year }} Year</span
                  >
                </template>
                <v-list-item-action>
                  <v-btn small color="primary">{{ $t('message.message') }}</v-btn>
                </v-list-item-action>
              </v-list-item>
            </template>
          </v-list>
          <v-list two-line v-else subheader>
            <template v-for="(eventData, key, index) in events">
              <div>
                <v-subheader class="grey--text fw-normal">{{ key }}</v-subheader>
                <template v-for="(event, index) in events[key]" :key="index">
                  <div>
                    <v-list-item :class="`${event.class}-border app-event-item py-1`">
                      <div class="px-4 mr-4 text-center">
                        <h2 class="mb-0">{{ event.date }}</h2>
                        <span class="grey--text fs-12 fw-normal">{{ event.month }}</span>
                      </div>
                      <template>
                        <h6 class="mb-2">{{ event.name }}</h6>
                        <div class="fs-12 grey--text fw-normal">
                          <span class="mr-2"><i class="zmdi zmdi-time"></i> {{ event.time }}</span>
                          <span><i class="zmdi zmdi-pin"></i> {{ event.place }}</span>
                        </div>
                      </template>
                      <v-list-item-action>
                        <v-list-item-action-text class="d-custom-flex">
                          <v-btn small icon class="ma-1" @click="onRescheduleEvent(event, key)">
                            <v-icon class="primary--text font-md" icon="md:edit" />
                          </v-btn>
                          <v-btn small icon class="ma-1" @click="onDeleteEvent(event, key)">
                            <v-icon class="error--text font-md" icon="md:delete" />
                          </v-btn>
                        </v-list-item-action-text>
                      </v-list-item-action>
                    </v-list-item>
                  </div>
                </template>
              </div>
            </template>
          </v-list>
        </PerfectScrollbar>
      </div>
    </div>
  </app-card>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 0,
      birthdays: [
        {
          id: 1,
          dob: '23 May 2019',
          year: 30,
          userName: 'Callie Carpenter',
          userAvatar: '/static/avatars/user-1.jpg',
        },
        {
          id: 2,
          dob: '12 June 2018',
          year: 30,
          userName: 'Charlotte Mclaughlin',
          userAvatar: '/static/avatars/user-2.jpg',
        },
        {
          id: 3,
          dob: '14 June 2018',
          year: 30,
          userName: 'Tasha Tyler',
          userAvatar: '/static/avatars/user-3.jpg',
        },
        {
          id: 4,
          dob: '24 August 2019',
          year: 22,
          userName: 'Eugene Rios',
          userAvatar: '/static/avatars/user-4.jpg',
        },
        {
          id: 5,
          dob: '1 September 2019',
          year: 20,
          userName: 'Jarred Bell',
          userAvatar: '/static/avatars/user-5.jpg',
        },
      ],
      events: {
        'Jun 2018': [
          {
            id: 1,
            name: 'Comapany Aniversery Celebrartion',
            month: 'Jun',
            date: '14',
            place: 'St. 128 New York',
            class: 'info',
            time: '8:00 AM - 10:00 AM',
          },
          {
            id: 2,
            name: 'Night Dinner With Micke',
            month: 'Jun',
            date: '15',
            place: 'GT Raod, Near IT Park New York',
            class: 'danger',
            time: '8:00 AM - 10:00 AM',
          },
          {
            id: 3,
            name: 'Suspendisse luctus est at tincidunt tristique',
            month: 'Jun',
            date: '10',
            place: 'GT Raod, Near IT Park New York',
            class: 'warning',
            time: '8:00 AM - 10:00 AM',
          },
          {
            id: 4,
            name: 'Nunc pellentesque velit orci, nec mattis',
            month: 'Jun',
            date: '8',
            place: 'GT Raod, Near IT Park New York',
            class: 'primary',
            time: '8:00 AM - 10:00 AM',
          },
          {
            id: 5,
            name: 'Aliquam vehicula nisi enim, sed tincidunt leo',
            month: 'Jun',
            date: '5',
            place: 'GT Raod, Near IT Park New York',
            class: 'success',
            time: '8:00 AM - 10:00 AM',
          },
        ],
      },
      settings: {
        maxScrollbarLength: 260,
      },
      selectedEventForReschedule: {
        key: '',
        data: null,
      },
    }
  },
  methods: {
    onTabChange(value) {
      this.selectedTab = value
    },
    onDeleteEvent(eventName, key) {
      let indexOfEvent = this.events[key].indexOf(eventName)
      this.events[key].splice(indexOfEvent, 1)
    },
    onRescheduleEvent(eventName, key) {
      console.log(eventName + key)
    },
  },
}
</script>
