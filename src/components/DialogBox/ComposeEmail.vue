<template>
  <v-dialog v-model="dialog" persistent max-width="600px" max-height="100%">
    <v-card>
      <v-card-title>
        <span class="headline">Compose Email</span>
      </v-card-title>
      <v-card-text>
        <v-text-field label="Email" required></v-text-field>
        <v-text-field label="Subject"></v-text-field>
        <QuillEditor v-model="content" ref="myQuillEditor" :options="editorOption"> </QuillEditor>
      </v-card-text>
      <v-card-actions class="px-5 pb-5 mx-1">
        <v-spacer></v-spacer>
        <v-btn class="bg-error" color="white" @click.native="closeDialog">Close</v-btn>
        <v-btn class="bg-primary" color="white" @click.native="closeDialog">Compose</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      content: '',
      editorOption: {
        modules: {
          toolbar: [
            [
              {
                header: [1, 2, 3, 4, 5, 6, false],
              },
            ],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            ['link', 'image'],
          ],
        },
      },
    }
  },
  methods: {
    open() {
      this.dialog = true
    },
    closeDialog() {
      this.dialog = false
    },
  },
}
</script>
