<template>
  <v-container>
    <v-layout row v-if="!loading && myProducts.length !== 0">
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Products</h1>
        <v-card 
          class="elevation-10 mb-2" 
          v-for="(product, i) in myProducts"
          :key="i">
          <v-layout row>
            <v-flex xs4>
              <v-img
                :src="product.imageSrc"
                height="250px">
              </v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{product.title}}</h2>
                <p>{{product.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-btn class="info"
                  :to="'/product/'+ product.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout v-if="!loading && myProducts.length === 0">
      <v-flex xs12 class="d-flex justify-center pt-5">
        <h1 class="text--primary">You have no products</h1>
      </v-flex>
    </v-layout>
    <v-layout row v-if="loading">
      <v-flex xs12 class="d-flex justify-center pt-5">
        <v-progress-circular
          :size="70"
          :width="7"
          color="purple"
          indeterminate
        ></v-progress-circular>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    computed: {
      myProducts () {
        return this.$store.getters.myProducts
      },
      loading () {
        return this.$store.getters.loading
      },
    }
  }
</script>