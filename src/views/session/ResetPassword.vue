<template>
  <div class="session-wrapper">
    <div class="session-left">
      <session-slider-widget></session-slider-widget>
    </div>
    <div class="session-right text-center">
      <div class="session-table-cell">
        <div class="session-content">
          <img :src="appLogo" class="img-responsive mb-4" width="78" height="78" />
          <h2 class="mb-4">{{ $t('message.resetPassword') }}</h2>
          <p class="fs-14">{{ $t('message.pleaseEnterYourPasswordToReset') }}.</p>
          <v-form v-model="valid" class="5">
            <v-text-field
              label="New Password"
              v-model="newPassword"
              type="password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-text-field
              label="Confirm Password"
              v-model="confirmPassword"
              type="password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-btn large @click="submit" block color="primary">{{
              $t('message.resetPassword')
            }}</v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SessionSliderWidget from '@/components/Widgets/SessionSlider'
import AppConfig from '@/constants/AppConfig'

export default {
  components: {
    SessionSliderWidget,
  },
  data() {
    return {
      valid: false,
      newPassword: '',
      confirmPassword: '',
      passwordRules: [(v) => !!v || 'Password is required'],
      appLogo: AppConfig.appLogo2,
    }
  },
  methods: {
    submit() {
      console.log('Reset Password')
    },
  },
}
</script>
