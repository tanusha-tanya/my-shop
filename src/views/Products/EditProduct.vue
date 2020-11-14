<template>
  <v-dialog
    v-model="dialog"
    persistent
    max-width="400px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn 
        color="primary" 
        class="headline mr-2"
        v-bind="attrs"
        v-on="on"
      >Edit
      </v-btn>      
    </template>
    <v-card>
      <v-card-title class="mb-3">
        <h1 class="text--primary">Edit Product</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-3">
        <v-text-field 
          color="black" 
          name="title" 
          label="Title" 
          type="text"           
          v-model="editedTitle"
          required>
        </v-text-field>
        <v-text-field 
          color="black" 
          name="description" 
          label="description" 
          type="text"           
          v-model="editedDescription"
          required>
        </v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn dark color="light-blue darken-4" outlined @click="onCansel">Cansel</v-btn>
        <v-btn dark color="light-blue darken-4" @click="onSave">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      dialog: false,
      editedTitle: this.product.title,
      editedDescription: this.product.description
    }
  },
  methods: {
    onCansel () {
      this.editedTitle = this.product.title
      this.editedDescription = this.product.description
      this.dialog = false
    },
    onSave () {
      if (this.editedTitle !== '' && this.editedDescription !== '') {
        this.$store.dispatch('updateProduct', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.product.id
        })
        this.dialog = false
      }
    } 
  }
}
</script>