<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create New Product</h1>
        <v-form ref="form" v-model="valid" class="mb-3">
          <v-text-field 
            color="black" 
            name="title" 
            label="Title*"
            type="text"
            :rules="[v => !!v || 'Title is require']"
            v-model="title"
            required>
          </v-text-field>
          <v-text-field 
            color="black" 
            name="vendor" 
            label="Vendor Product" 
            type="text" 
            v-model="vendor">
          </v-text-field>
          <v-text-field 
            color="black" 
            name="color" 
            label="Color Product" 
            type="text" 
            v-model="color">
          </v-text-field>
          <v-text-field 
            color="black" 
            name="material" 
            label="Material Product" 
            type="text" 
            v-model="material">
          </v-text-field>
          <v-text-field 
            color="black" 
            name="price" 
            label="Price Product*" 
            :rules="[v => !!v || 'Price is require']"
            type="text" 
            v-model="price"
            required>
          </v-text-field>
          <v-text-field 
            color="black" 
            name="description" 
            label="Description Product" 
            type="text" 
            multi-line
            v-model="description">
          </v-text-field>
        </v-form>
        <v-layout class="mb-3">
          <v-flex xs12>
            <v-btn class="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <img src="" height="200px">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-switch
              color="primary"
              v-model="promo"
              label="Add to Promo?"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn 
              :loading="loading"
              color="success"
              @click="createProduct"
              :disabled="!valid || loading">
              Create Product</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        title: '',
        vendor: '',
        color: '',
        material: '',
        price: 0,
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createProduct () {
        if (this.$refs.form.validate()) {
          const product = {
            title: this.title,
            vendor: this.vendor,
            color: this.color,
            material: this.material,
            price: this.price,
            description: this.description,
            promo: this.promo,
            valid: this.valid
          }
          this.$store.dispatch('createProduct', product)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
        }
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>