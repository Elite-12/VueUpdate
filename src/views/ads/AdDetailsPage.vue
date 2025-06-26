<template>
  <div>
    <app-section-loader :status="loader"></app-section-loader>
    <v-container fluid class="pa-4">
      <div>
        <div class="pa-4 header-section mb-4">
          <h3 class="mb-2">{{ ad.title }}</h3>
          <div class="d-flex align-center flex-wrap">
            <v-chip class="mr-2 mb-2" color="primary" small>
              <v-icon left small class="pr-2">mdi-eye</v-icon>
              {{ ad.views }} views
            </v-chip>
            <v-chip v-if="ad.is_featured" class="mr-2 mb-2" color="warning" small>
              <v-icon left small>mdi-star</v-icon>
              Featured
            </v-chip>
            <v-chip v-if="ad.reports_count > 0" class="mr-2 mb-2" color="error" small>
              <v-icon left small>mdi-alert</v-icon>
              {{ ad.reports_count }} reports
            </v-chip>
          </div>
        </div>
        
        <v-row>
          <v-col cols="12" lg="8" md="12" sm="12" xs="12">
            <app-card customClasses="mb-4">
              <div class="sec-title mb-4">
                <h4>Description</h4>
              </div>
              <div class="sec-content">
                <p>{{ ad.description }}</p>
              </div>
            </app-card>
          </v-col>
          
          <v-col cols="12" lg="4" md="12" sm="12" xs="12">
            <app-card customClasses="mb-4">
              <ad-details-card :ad="ad"></ad-details-card>
            </app-card>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="12" lg="6" md="6" sm="12" xs="12">
            <app-card customClasses="mb-4">
              <category-details-card :ad="ad"></category-details-card>
            </app-card>
          </v-col>
          
          <v-col cols="12" lg="6" md="6" sm="12" xs="12">
            <app-card customClasses="mb-4">
              <user-details-card :user="ad.user"></user-details-card>
            </app-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" lg="8" md="8" sm="12" xs="12">
            <app-card customClasses="mb-4">
              <location-details-card :location="ad.location"></location-details-card>
            </app-card>
          </v-col>
          
          <v-col cols="12" lg="4" md="4" sm="12" xs="12">
            <app-card v-if="$can(VIEW, RESOURCE)" customClasses="mb-4">
              <featured-details-card :ad="ad"></featured-details-card>
            </app-card>
          </v-col>
        </v-row>

        <v-row v-if="ad.reports_count > 0">
          <v-col cols="12">
            <app-card customClasses="mb-4">
              <reports-details-card :ad="ad"></reports-details-card>
            </app-card>
          </v-col>
        </v-row>

        <v-row v-if="adImages && adImages.length > 0">
          <v-col cols="12">
            <app-card customClasses="mb-4">
              <div class="sec-title mb-4">
                <h4>Images ({{ adImages.length }})</h4>
              </div>
              <div class="image-gallery">
                <v-row>
                  <v-col 
                    v-for="(img,index) in adImages" 
                    :key="index"
                    cols="12"
                    sm="6"
                    md="4"
                    lg="3"
                    xl="2"
                  >
                    <v-img
                      :src="img.src"
                      :lazy-src="img.thumbnail || img.src"
                      aspect-ratio="1"
                      class="gallery-image"
                      style="border-radius: 8px; cursor: pointer;"
                    >
                      <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                          <v-progress-circular indeterminate color="primary"></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-col>
                </v-row>
              </div>
            </app-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
// Widgets
import UserDetailsCard from './details-cards/UserDetailsCard';
import AdDetailsCard from './details-cards/AdDetailsCard';
import LocationDetailsCard from './details-cards/LocationDetailsCard';
import CategoryDetailsCard from './details-cards/CategoryDetailsCard';
import FeaturedDetailsCard from './details-cards/FeaturedDetailsCard';
import ReportsDetailsCard from './details-cards/ReportsDetailsCard';
import Permissions from '../../store/modules/admin/permissions';

export default {
  components: {
    UserDetailsCard,
    AdDetailsCard,
    LocationDetailsCard,
    CategoryDetailsCard,
    FeaturedDetailsCard,
    ReportsDetailsCard,
  },

  data() {
    return {
      loader: false,
      VIEW: Permissions.actions.view,
      RESOURCE: Permissions.resources.featuredAdDetails,
    };
  },

  computed: {
    ad() {
      return this.$store.getters.selectedAd;
    },
    adImages() {
      return this.$store.getters.selectedAdImages;
    }
  },
  methods: {}
};
</script>

<style scoped>
.header-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
}

.image-gallery {
  padding: 1rem 0;
}

.gallery-image {
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s ease;
}

.gallery-image:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}
</style>
