<!-- New Order Countdown Widget -->
<template>
  <div class="app-block countdown-wrap">
    <div class="d-custom-flex">
      <div class="w-20 mr-3 d-inline-flex justify-center">
        <v-btn fab dark small class="ma-0" color="warning">
          <i class="zmdi zmdi-notifications-active animated infinite wobble zmdi-hc-fw font-lg"></i>
        </v-btn>
      </div>
      <div>
        <h6 class="mb-0">New order from John</h6>
        <span class="fs-12 mb-3 grey--text d-inline-block fw-normal">Accept or Reject Within</span>
        <div class="d-custom-flex align-items-center">
          <h3 class="count-value grey--text rounded d-inline-block text-center mb-0 mr-3">
            <CountDown :time="5300047000" />
          </h3>
          <div class="d-inline-flex">
            <v-btn icon small class="mr-3">
              <v-icon color="success" icon="md:check" />
            </v-btn>
            <v-btn icon small>
              <v-icon color="error" icon="md:close" />
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// components
import CountDown from '../CountDown/CountDown'

export default {
  components: {
    CountDown,
  },
}
</script>
