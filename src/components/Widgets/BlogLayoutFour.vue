<template>
  <div class="blog-four-layout white--text pa-4 d-custom-flex align-end">
    <div>
      <a :href="`/${getCurrentAppLayoutHandler() + '/pages/blog'}`">
        <h3 class="white--text">Where Can You Find Unique Myspace Layouts Nowadays</h3>
      </a>
      <span class="white--text fs-14">11 Nov 2017 , By: Admin , 5 Comments </span>
      <div class="d-custom-flex justify-space-between">
        <div>
          <v-btn icon class="mr-3">
            <v-icon class="white--text" icon="md:share" />
          </v-btn>
          <v-btn icon>
            <v-icon class="white--text" icon="md:favorite" />
          </v-btn>
        </div>
        <v-btn icon>
          <v-icon class="white--text" icon="md:more_horiz" />
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
import { getCurrentAppLayout } from '@/helpers/helpers'

export default {
  methods: {
    getCurrentAppLayoutHandler() {
      return getCurrentAppLayout(this.$router)
    },
  },
}
</script>
