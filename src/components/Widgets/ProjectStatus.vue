<!-- Project Status Widget -->
<template>
  <div class="project-status-wrap">
    <app-section-loader :status="loader"></app-section-loader>
    <PerfectScrollbar style="height: 396px" :settings="settings">
      <v-data-table
        :headers="headers"
        :items="items"
        v-model="selected"
        item-key="productName"
        hide-default-footer
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>
              <v-checkbox color="primary" hide-details></v-checkbox>
            </td>
            <td>
              <span class="">{{ item.productName }}</span>
            </td>
            <td>
              <v-badge :class="item.labelClasses">{{ item.priority }}</v-badge>
            </td>
            <td>
              <v-progress-linear
                :value="item.progressValue"
                class="my-1"
                height="3"
                color="primary"
              ></v-progress-linear>
              <span class="fs-12 fw-normal">{{ item.status }}</span>
            </td>
            <td class="text-center team-avatar team-avatar-auto">
              <ul class="list-inline">
                <li>
                  <div>
                    <img
                      src="/static/avatars/user-7.jpg"
                      class="img-responsive"
                      alt="user images"
                      width="18"
                      height="18"
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="/static/avatars/user-8.jpg"
                      class="img-responsive"
                      alt="user images"
                      width="18"
                      height="18"
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <img
                      src="/static/avatars/user-9.jpg"
                      class="img-responsive"
                      alt="user images"
                      width="18"
                      height="18"
                    />
                  </div>
                </li>
              </ul>
            </td>
          </tr>
        </template>
      </v-data-table>
    </PerfectScrollbar>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data() {
    return {
      loader: true,
      settings: {
        maxScrollbarLength: 100,
      },
      selected: [],
      headers: [
        {
          text: 'Select',
          align: 'left',
          sortable: false,
          value: 'select',
        },
        {
          text: 'Project Name',
          align: 'left',
          sortable: false,
          value: 'productName',
        },
        {
          text: 'Priority',
          align: 'left',
          sortable: false,
          value: 'priority',
        },
        {
          text: 'Status',
          align: 'left',
          sortable: false,
          value: 'status',
        },
        {
          text: 'Team',
          align: 'center',
          sortable: false,
          value: 'team',
        },
      ],
      items: [],
    }
  },
  mounted() {
    this.getProjects()
  },
  methods: {
    toggleAll() {
      if (this.selected.length) this.selected = []
      else this.selected = this.items.slice()
    },
    getProjects() {
      api
        .get('vuely/projectStatus.js')
        .then((response) => {
          this.loader = false
          this.items = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
