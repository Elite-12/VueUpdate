<template>
  <div class="email-detail-wrap" v-if="selectedEmail != null">
    <div class="mail-action-wrap d-custom-flex justify-space-between">
      <ul class="list-unstyled primary action-list-wrap">
        <li>
          <a href="javascript:void(0)">
            <i class="material-icons">archive</i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="material-icons">error</i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)" @click="onDeleteEmail">
            <i class="material-icons">delete</i>
          </a>
        </li>
      </ul>
      <ul class="navigate-page primary list-unstyled">
        <li>
          <a href="javascript:void(0)">
            <i class="material-icons">arrow_back</i>
          </a>
        </li>
        <li>
          <a href="javascript:void(0)">
            <i class="material-icons">arrow_forward</i>
          </a>
        </li>
      </ul>
    </div>
    <div class="detail-head d-custom-flex justify-space-between">
      <v-btn fab icon class="grey--text ma-0" small @click="backToEmails">
        <v-icon icon="md:keyboard_backspace" />
      </v-btn>
      <ul class="list-inline">
        <li>
          <v-btn fab icon class="grey--text ma-0" small>
            <v-icon icon="md:reply" />
          </v-btn>
        </li>
        <li>
          <v-btn fab icon class="grey--text ma-0" small>
            <v-icon icon="md:local_printshop" />
          </v-btn>
        </li>
      </ul>
    </div>
    <PerfectScrollbar class="inbox-detail-scroll" :style="getScrollHeight()">
      <div class="mail-subject-wrap">
        <h5 class="mb-0">{{ selectedEmail.subject }}</h5>
      </div>
      <div class="user-detail d-custom-flex justify-content-between">
        <div class="media w-80">
          <img
            :src="selectedEmail.avatarSrc"
            alt="user profile"
            class="rounded mr-3"
            width="50"
            height="50"
          />
          <div class="media-body">
            <h6 class="mb-0">{{ selectedEmail.userName }}</h6>
            <p class="mb-0 fs-14">
              From
              <span class="fs-12 grey--text fw-normal">&lt;{{ selectedEmail.userEmail }}&gt;</span>
            </p>
            <p class="mb-0 fs-14">To: <span class="fs-12 grey--text fw-normal">Me</span></p>
          </div>
        </div>
        <span class="align-items-center fs-12 fw-normal d-custom-flex grey--text w-20 justify-end"
          >{{ selectedEmail.time }} Hour Ago</span
        >
      </div>
      <div class="mail-detail">
        <div>
          <p class="fs-14">{{ selectedEmail.body }}</p>
        </div>
        <p class="mb-0 fs-14 fw-semi-bold">Regards,</p>
        <p class="mb-0 fs-12 fw-normal">{{ selectedEmail.userName }}</p>
      </div>
      <div class="mail-attachment-wrap" v-if="selectedEmail.attachments != null">
        <div class="d-custom-flex justify-space-between attachment-head align-items-center">
          <h6 class="mb-0">{{ selectedEmail.attachments.length }} Attachments</h6>
          <ul class="list-inline">
            <li>
              <v-btn fab icon class="grey--text ma-0" small>
                <v-icon icon="md:insert_drive_file" />
              </v-btn>
            </li>
            <li>
              <v-btn fab icon class="grey--text ma-0" small>
                <v-icon icon="md:cloud_circle" />
              </v-btn>
            </li>
          </ul>
        </div>
        <ul class="d-custom-flex align-items-center attachment-list list-unstyled">
          <li v-for="attachment in selectedEmail.attachments" :key="attachment.id">
            <div class="overlay-wrapper">
              <img
                :src="attachment.src"
                class="img-responsive"
                height="140"
                width="180"
                alt="attachment"
              />
              <a href="javascript:void(0)" class="overlay-content">
                <i class="material-icons">get_app</i>
              </a>
            </div>
            <span class="fs-12 d-block fw-normal">{{ attachment.name }}</span>
          </li>
        </ul>
      </div>
      <div class="mail-reply d-custom-flex align-items-center">
        <v-text-field label="Reply" solo class="mr-4"></v-text-field>
        <v-btn color="primary" class="ma-0 white--text" large>
          Send
          <v-icon right dark icon="md:send" />
        </v-btn>
      </div>
    </PerfectScrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getCurrentAppLayout } from '@/helpers/helpers'

export default {
  computed: {
    ...mapGetters(['selectedEmail']),
  },
  methods: {
    backToEmails() {
      this.$store.dispatch('backToEmails')
    },
    getScrollHeight() {
      let layout = getCurrentAppLayout(this.$router)
      switch (layout) {
        case 'default':
          return 'height:calc(100vh - 220px)'
        case 'mini':
          return 'height:calc(100vh - 220px)'
        case 'horizontal':
          return 'height:calc(100vh - 220px)'
        case 'boxed':
          return 'height:calc(100vh - 391px)'
        case 'boxed-v2':
          return 'height:calc(100vh - 391px)'
        default:
          return 'height:calc(100vh - 220px)'
      }
    },
    onDeleteEmail() {
      this.$store.dispatch('onDeleteEmail')
    },
  },
}
</script>
