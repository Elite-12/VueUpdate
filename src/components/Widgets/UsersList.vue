<!-- UsersList Widget -->
<template>
  <div>
    <app-section-loader :status="reload"></app-section-loader>
    <PerfectScrollbar style="max-height: 325px" :settings="settings">
      <v-list two-line class="list-aqua-ripple recent-user-wrap">
        <v-list-item v-for="(item, index) in usersList" :key="index" ripple @click="">
          <v-avatar>
            <img :src="item.photo_url" alt="avatar" />
            <span class="v-badge success rounded floating" v-if="item.status === 1"></span>
            <span class="v-badge grey rounded floating" v-else></span>
          </v-avatar>
          <template>
            <v-list-item-title>
              <h6 class="mb-0">{{ item.customer_name }}</h6>
            </v-list-item-title>
            <v-list-item-subtitle>
              <a href="javascript:void(0)" class="fs-12 fw-normal">{{ item.customer_email }}</a>
            </v-list-item-subtitle>
          </template>
          <v-list-item-action>
            <v-menu origin="center center" transition="scale-transition" bottom>
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" icon>
                  <v-icon icon="md:more_horiz" />
                </v-btn>
              </template>
              <v-list>
                <v-list-item @click="onEditUser(item)">
                  <v-list-item-title>{{ $t('message.edit') }}</v-list-item-title>
                </v-list-item>
                <v-list-item @click="onDeleteUser(item)">
                  <v-list-item-title>{{ $t('message.delete') }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </PerfectScrollbar>
    <app-section-loader :status="reload"></app-section-loader>
    <v-snackbar :top="y === 'top'" :timeout="timeout" v-model="snackbar">
      {{ snackbarMessage }}
    </v-snackbar>
    <delete-confirmation-dialog
      ref="deleteConfirmationDialog"
      heading="Are You Sure You Want To Delete?"
      message="Are you sure you want to delete this member permanently?"
      @onConfirm="deleteUser"
    ></delete-confirmation-dialog>
    <hr class="ma-0" />
    <v-dialog v-model="dialog2" max-width="500px">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" small class="ma-4" v-bind="props" @click="updateUserModal">{{
          $t('message.addNew')
        }}</v-btn>
      </template>
      <v-card v-if="addUserModal">
        <v-card-title>
          <span class="headline">{{ $t('message.addNewUser') }}</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md class="pa-0">
            <v-layout wrap>
              <v-col xs12>
                <v-text-field
                  :label="$t('message.name')"
                  v-model="addNewUser.customer_name"
                ></v-text-field>
              </v-col>
              <v-col xs12>
                <v-col xs12>
                  <v-text-field
                    :label="$t('message.email')"
                    v-model="addNewUser.customer_email"
                  ></v-text-field>
                </v-col>
              </v-col>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions class="pa-4">
          <v-spacer></v-spacer>
          <v-btn class="px-4" color="error" v-on:click="addUsers">{{ $t('message.add') }}</v-btn>
          <v-btn class="px-4" color="primary" @click.native="dialog2 = false">{{
            $t('message.close')
          }}</v-btn>
        </v-card-actions>
      </v-card>
      <v-card v-else>
        <v-card-title>
          <span class="headline">{{ $t('message.editUser') }}</span>
          <v-spacer></v-spacer>
          <a href="javascript:void(0)">
            <i class="material-icons" @click="dialog2 = false">close</i>
          </a>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-col xs12>
                <v-text-field
                  :label="$t('message.name')"
                  v-model="editUser.customer_name"
                ></v-text-field>
              </v-col>
              <v-col xs12>
                <v-col xs12>
                  <v-text-field
                    :label="$t('message.email')"
                    v-model="editUser.customer_email"
                  ></v-text-field>
                </v-col>
              </v-col>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click.native="dialog2 = false">{{ $t('message.cancel') }}</v-btn>
          <v-btn color="error" v-on:click="updateUser">{{ $t('message.update') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import api from '@/api'

export default {
  data() {
    return {
      usersList: '',
      settings: {
        maxScrollbarLength: 160,
      },
      selectDeletedUser: null,
      editUser: null,
      addUserModal: true,
      dialog2: false,
      addNewUser: {
        customer_name: '',
        customer_email: '',
        photo_url: '/static/avatars/user-8.jpg',
      },
      reload: false,
      snackbar: false,
      snackbarMessage: '',
      timeout: 2000,
      y: 'top',
    }
  },
  // call getusers method
  mounted() {
    this.getUsers()
  },
  methods: {
    // get user details from an API
    getUsers() {
      this.reload = true
      var self = this
      api
        .get('newCustomers.js')
        .then(function (response) {
          self.reload = false
          self.usersList = response.data
        })
        .catch(function (error) {
          console.log('error' + error)
        })
    },
    // function to add a user in a user list
    addUsers() {
      if (this.addNewUser.customer_name !== '') {
        this.dialog2 = false
        this.reload = true
        setTimeout(() => {
          this.reload = false
          this.usersList.push({
            ...this.addNewUser,
            customer_id: new Date().getTime(),
          })
          this.snackbar = true
          this.snackbarMessage = 'User Added Successfully'
          this.addNewUser.customer_name = ''
          this.addNewUser.customer_email = ''
        }, 1500)
      }
    },
    // to edit user
    onEditUser(user) {
      this.addUserModal = false
      this.dialog2 = true
      this.editUser = user
    },
    // to open dialog for update user details
    updateUserModal() {
      this.addUserModal = true
    },
    // to update user list
    updateUser() {
      this.dialog2 = false
      this.reload = true
      setTimeout(() => {
        this.reload = false
        this.snackbar = true
        for (var i = 0; i < this.usersList.length; i++) {
          const user = this.usersList
          if (user[i].customer_id === this.editUser.customer_id) {
            this.usersList[i] = this.editUser
          }
        }
        this.snackbarMessage = 'User Updated Successfully'
      }, 1500)
    },
    // confirmation box to delete user
    onDeleteUser(user) {
      this.$refs.deleteConfirmationDialog.openDialog()
      this.selectDeletedUser = user
    },
    // delete user
    deleteUser() {
      this.$refs.deleteConfirmationDialog.close()
      this.reload = true
      let newUser = this.usersList
      let index = newUser.indexOf(this.selectDeletedUser)
      setTimeout(() => {
        this.reload = false
        this.selectDeletedUser = null
        this.usersList.splice(index, 1)
        this.snackbar = true
        this.snackbarMessage = 'User Deleted Successfully'
      }, 1500)
    },
  },
}
</script>
