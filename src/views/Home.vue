<template>
  <div v-if="!loading">
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="(product, i) in promoProducts"
              :key="i"
              :src="product.imageSrc"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 md4 sm6 mt-10 
          v-for="(product, i) in products"
          :key="i">
          <v-card
           class="mx-auto"
           max-width="400">
          <router-link
          :aria-label="product.title"
          :to="'/product/' + product.id"> 
        <v-img
          class="white--text align-end"
          height="350px"
          :src="product.imageSrc"
        >
        </v-img>
        </router-link> 
          <v-card-title class="primary-title">
            <div>
              <h3 class="card_heading heading">{{product.title}}</h3>
              <div class="card_describe">
                <p class="subheading">{{product.description.substring(0,55)}}...</p>
                <p class="subheading card_price"><span class="title">Price: </span>${{product.price}}</p>
              </div>
            </div>            
          </v-card-title>        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn           
            color="primary" 
            class="headline mr-2"
            elevation="2"
            outlined         
            :to="'product/'+product.id"
          >
            Open
          </v-btn>
          <app-buy-dialog :product="product"/>
        </v-card-actions>
         </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-layout row>
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
  </div>
</template>
<script>
  export default {
    computed: {
      promoProducts () {
        return this.$store.getters.promoProducts
      },
      products () {
        return this.$store.getters.products
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
<style scoped>
  .card_heading{
    font-weight: bold;
    word-wrap: break-word;
    text-align: center;
    margin-bottom: 1.5rem;
  }
  .card_describe{
    margin-top: auto;
    padding-left: 1rem;
  }
  .card_price{
    color: #c00f1b;
    font-size: 18px;
  }
</style>