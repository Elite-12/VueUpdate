<template>
  <div>
    <page-title-bar></page-title-bar>
    <v-container grid-list-xl pt-0>
      <v-layout row wrap>
        <app-card
          :heading="$t('message.slideGroups')"
          customClasses="mb-30"
          colClasses="xl12 lg12 md12 sm12 xs12"
        >
          <div class="mb-30">
            <p>The <code>v-slide-group</code> component is used to display pseudo paginated information.</p>
          </div>
           <v-sheet
            class="mx-auto"
            max-width="700"
          >
            <v-slide-group multiple show-arrows>
              <v-slide-item
                v-for="n in 25"
                :key="n"
                v-slot:default="{ active, toggle }"
              >
                <v-btn
                  class="mx-2"
                  :input-value="active"
                  active-class="purple white--text"
                  depressed
                  rounded
                  @click="toggle"
                >
                  Options {{ n }}
                </v-btn>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </app-card>

        <app-card
          :heading="$t('message.playground')"
          customClasses="mb-30"
          colClasses="xl12 lg12 md12 sm12 xs12"
        >
          <v-row justify="space-around">
            <v-switch v-model="multiple" label="Multiple"></v-switch>
            <v-switch v-model="mandatory" label="Mandatory"></v-switch>
            <v-switch v-model="showArrows" label="Show arrows"></v-switch>
            <v-switch v-model="prevIcon" label="Custom prev icon"></v-switch>
            <v-switch v-model="nextIcon" label="Custom next icon"></v-switch>
            <v-switch v-model="centerActive" label="Center active item"></v-switch>
          </v-row>

          <v-sheet
            class="mx-auto"
            elevation="8"
            max-width="800"
          >
            <v-slide-group
              v-model="model"
              class="pa-4"
              :prev-icon="prevIcon ? 'mdi-minus' : undefined"
              :next-icon="nextIcon ? 'mdi-plus' : undefined"
              :multiple="multiple"
              :mandatory="mandatory"
              :show-arrows="showArrows"
              :center-active="centerActive"
            >
              <v-slide-item
                v-for="n in 15"
                :key="n"
                v-slot:default="{ active, toggle }"
              >
                <v-card
                  :color="active ? 'primary' : 'grey lighten-1'"
                  class="ma-4"
                  height="200"
                  width="100"
                  @click="toggle"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="white"
                        size="48"
                        icon="mdi-close-circle-outline"
                      ></v-icon>
                    </v-scale-transition>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </app-card>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        model: null,
        multiple: false,
        mandatory: false,
        showArrows: true,
        prevIcon: false,
        nextIcon: false,
        centerActive: false
      }
    }
  }
</script>
