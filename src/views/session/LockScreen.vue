<template>
  <div class="lock-screen-wrapper">
    <v-container pt-70 px-0>
      <v-layout row wrap>
        <v-col xs12 sm8 md4 mx-auto>
          <div class="mb-70">
            <router-link to="/" class="d-block text-center">
              <img
                src="/static/img/session.png"
                class="img-responsive mb-4"
                width="78"
                height="78"
              />
            </router-link>
          </div>
          <div class="lock-screen-block text-center">
            <div class="s-user mb-6">
              <img
                class="rounded-circle img-responsive"
                src="/static/avatars/user-9.jpg"
                width="143"
                height="143"
              />
            </div>
            <h2 class="white--text">Jerry Cummings</h2>
            <v-form v-model="valid" class="mb-6">
              <v-text-field
                label="Password"
                v-model="password"
                :rules="passwordRules"
                type="password"
                color="white"
                required
              >
              </v-text-field>
            </v-form>
          </div>
        </v-col>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      password: '',
      valid: false,
      passwordRules: [(v) => !!v || 'Password is required'],
    }
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault()
    },
  },
}
</script>
