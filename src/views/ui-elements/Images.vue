<template>
  <div class="custom-flex">
    <page-title-bar></page-title-bar>
    <v-container grid-list-xl pt-0>
      <v-layout row wrap>
        <app-card
          :heading="$t('message.simple')"
          customClasses="mb-30"
          colClasses="xl12 lg12 md12 sm12 xs12"
        >
          <v-row>
            <v-col v-for="n in 3" :key="n" class="" cols="12" sm="6" md="4">
              <v-card flat tile class="d-flex">
                <v-img
                  :src="`/static/img/gallery${n}.jpg`"
                  :lazy-src="`/static/img/gallery${n}.jpg`"
                  aspect-ratio="1"
                  class="grey lighten-2 img-responsive"
                >
                  <template v-slot:placeholder>
                    <v-row class="fill-height ma-0" align="center" justify="center">
                      <v-progress-circular
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </app-card>
        <app-card
          :heading="$t('message.containAndCover')"
          customClasses="mb-30"
          colClasses="xl12 lg12 md12 sm12 xs12"
        >
          <div class="mb-5">
            <p>
              If the provided aspect ratio doesn't match that of the actual image, the default
              behaviour is to fill as much space as possible, clipping the sides of the image.
              Enabling the <code>contain</code> prop will prevent this, but will result in empty
              space at the sides.
            </p>
          </div>
          <v-layout row wrap>
            <v-col xs12 sm6>
              <div class="title mb-30">Default (cover)</div>
              <div>
                <v-card class="mb-30">
                  <v-card-title class="title">Matching</v-card-title>
                  <v-img src="/static/img/blog-1.jpg" aspect-ratio="1.7"></v-img>
                </v-card>
              </div>
              <div>
                <v-card class="mb-30">
                  <v-card-title class="title">Too high</v-card-title>
                  <v-img src="/static/img/blog-1.jpg" aspect-ratio="2"></v-img>
                </v-card>
              </div>
              <div>
                <v-card class="mb-30">
                  <v-card-title class="title">Too low</v-card-title>
                  <v-img src="/static/img/blog-1.jpg" aspect-ratio="1.4"></v-img>
                </v-card>
              </div>
            </v-col>
            <v-col xs12 sm6>
              <div class="title mb-30">Contain</div>
              <div>
                <v-card class="mb-30">
                  <v-card-title class="title">Matching</v-card-title>
                  <v-img src="/static/img/blog-1.jpg" aspect-ratio="1.7" contain></v-img>
                </v-card>
              </div>
              <div>
                <v-card class="mb-30">
                  <v-card-title class="title">Too high</v-card-title>
                  <v-img src="/static/img/blog-1.jpg" aspect-ratio="2" contain></v-img>
                </v-card>
              </div>
              <div>
                <v-card class="mb-30">
                  <v-card-title class="title">Too low</v-card-title>
                  <v-img src="/static/img/blog-1.jpg" aspect-ratio="1.4" contain></v-img>
                </v-card>
              </div>
            </v-col>
          </v-layout>
        </app-card>
        <app-card
          :heading="$t('message.height')"
          customClasses="mb-30"
          colClasses="xl12 lg12 md12 sm12 xs12"
        >
          <p>
            <code>v-img</code> will automatically grow to the size of its <code>src</code>,
            preserving the correct aspect ratio. You can limit this with the <code>height</code> and
            <code>max-height</code> props.
          </p>
          <v-fade-transition mode="out-in">
            <v-layout v-if="show" key="0" wrap>
              <v-col xs12 sm6>
                <v-card>
                  <v-img src="/static/img/blog-2.jpg" height="300" class="grey darken-4"></v-img>
                  <v-card-title class="title">height</v-card-title>
                </v-card>
              </v-col>
              <v-col xs12 sm6>
                <v-card>
                  <v-img
                    src="/static/img/blog-2.jpg"
                    height="300"
                    contain
                    class="grey darken-4"
                  ></v-img>
                  <v-card-title class="title">height with contain</v-card-title>
                </v-card>
              </v-col>
              <v-col xs12 sm6>
                <v-card>
                  <v-img
                    src="/static/img/blog-2.jpg"
                    max-height="300"
                    class="grey darken-4"
                  ></v-img>
                  <v-card-title class="title">max-height</v-card-title>
                </v-card>
              </v-col>
              <v-col xs12 sm6>
                <v-card>
                  <v-img
                    src="/static/img/blog-2.jpg"
                    max-height="300"
                    contain
                    class="grey darken-4"
                  ></v-img>
                  <v-card-title class="title">max-height with contain</v-card-title>
                </v-card>
              </v-col>
            </v-layout>
            <v-layout v-else key="1" justify-center>
              <v-btn text @click="show = true">Load images</v-btn>
            </v-layout>
          </v-fade-transition>
        </app-card>
        <app-card
          :heading="$t('message.fixedRatio')"
          customClasses="mb-30"
          colClasses="xl12 lg12 md12 sm12 xs12"
        >
          <v-slider v-model="width" min="200" max="500" step="1"></v-slider>
          <v-navigation-drawer :width="width" :value="true" stateless>
            <v-img :aspect-ratio="16 / 9" src="/static/img/blog-6.jpg">
              <v-layout pa-2 column fill-height class="lightbox white--text ma-0">
                <v-spacer></v-spacer>
                <v-col shrink>
                  <div class="subheading">John Leider</div>
                  <div class="body-1">heyfromjohn@gmail.com</div>
                </v-col>
              </v-layout>
            </v-img>

            <v-list>
              <template v-for="(item, i) in items">
                <v-divider v-if="item.divider" :key="i"></v-divider>
                <v-list-item v-else :key="item.title" @click="">
                  <v-list-item-action>
                    <v-icon :icon="item.icon" />
                  </v-list-item-action>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </template>
            </v-list>
          </v-navigation-drawer>
        </app-card>
        <app-card
          :heading="$t('message.gradients')"
          customClasses="mb-30"
          colClasses="xl12 lg12 md12 sm12 xs12"
        >
          <v-layout row wrap>
            <v-col xs12 sm4>
              <v-img
                src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
              ></v-img>
            </v-col>

            <v-col xs12 sm4>
              <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                <div class="fill-height bottom-gradient"></div>
              </v-img>
            </v-col>

            <v-col xs12 sm4>
              <v-img src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg">
                <div class="fill-height repeating-gradient"></div>
              </v-img>
            </v-col>
          </v-layout>
        </app-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    show: false,
    width: 300,
    items: [
      { icon: 'inbox', title: 'Inbox' },
      { icon: 'star', title: 'Starred' },
      { icon: 'send', title: 'Sent mail' },
      { icon: 'drafts', title: 'Drafts' },
      { divider: true },
      { icon: 'mail', title: 'All mail' },
      { icon: 'delete', title: 'Trash' },
      { icon: 'error', title: 'Spam' },
    ],
  }),
}
</script>

<style scoped>
.v-navigation-drawer {
  transition: none;
}

.lightbox {
  box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.2);
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
}

.bottom-gradient {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
}

.repeating-gradient {
  background-image: repeating-linear-gradient(
    -45deg,
    rgba(255, 0, 0, 0.25),
    rgba(255, 0, 0, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 5px,
    rgba(0, 0, 255, 0.25) 10px
  );
}
</style>
