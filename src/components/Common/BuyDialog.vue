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
      >Buy
      </v-btn>      
    </template>
    <v-card>
      <v-card-title class="mb-3">
        <h2 class="text--primary">Do you want to buy it?</h2>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="mt-3">
        <v-text-field 
          color="black" 
          name="name" 
          label="Your Name" 
          type="text"           
          v-model="name"
          required>
        </v-text-field>
        <v-text-field 
          color="black" 
          name="phone" 
          label="Your Phone" 
          type="text"           
          v-model="phone"
          required>
        </v-text-field>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn 
          text
          outlined 
          @click="onCansel" 
          :disabled="localLoading">Close</v-btn>
        <v-btn  
          text
          class="success"
          :disabled="localLoading"
          :loading="localLoading"
          @click="onSave">Buy it</v-btn>
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
      name: '',
      phone: '',
      localLoading: false
    }
  },
  methods: {
    onCansel () {
      this.name = ''
      this.phone = ''
      this.dialog = false
    },
    onSave () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          productId: this.product.id,
          ownerId: this.product.ownerId
        })
        .finally(() => {
          this.name = ''
          this.phone = ''
          this.localLoading = false
          this.dialog = false
        })
      }
    } 
  }
}
</script>