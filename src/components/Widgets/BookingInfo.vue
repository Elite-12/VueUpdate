<!-- Booking Info Widget -->
<template>
  <ul class="p-0 list-group-flush list-unstyled">
    <li class="d-custom-flex align-center py-2 px-4">
      <span class="w-50 d-custom-flex align-items-center">
        <i class="zmdi zmdi-file-plus mr-4 primary--text font-lg"></i>
        <span class="fs-12 fw-normal">Booking</span>
      </span>
      <div class="w-50 d-custom-flex justify-space-between align-center">
        <span class="fs-12 fw-normal">1450</span>
        <v-btn small icon class="my-2">
          <v-icon icon="md:more_horiz" />
        </v-btn>
      </div>
    </li>
    <li class="d-custom-flex align-center py-2 px-4">
      <span class="w-50 d-custom-flex align-items-center">
        <i class="zmdi zmdi-assignment-check mr-4 success--text font-lg"></i>
        <span class="fs-12 fw-normal">Confirmed</span>
      </span>
      <div class="w-50 d-custom-flex justify-space-between align-center">
        <span class="fs-12 fw-normal">1000</span>
        <v-btn small icon class="my-2">
          <v-icon icon="md:more_horiz" />
        </v-btn>
      </div>
    </li>
    <li class="d-custom-flex align-center py-2 px-4">
      <span class="w-50 d-custom-flex align-items-center">
        <i class="zmdi zmdi-time mr-4 error--text font-lg"></i>
        <span class="fs-12 fw-normal">Pending</span>
      </span>
      <div class="w-50 d-custom-flex justify-space-between align-center">
        <span class="fs-12 fw-normal">450</span>
        <v-btn small icon class="my-2">
          <v-icon icon="md:more_horiz" />
        </v-btn>
      </div>
    </li>
  </ul>
</template>
