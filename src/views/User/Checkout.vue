<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 class="d-flex justify-center pt-5" v-if="loading">
        <v-progress-circular
            :size="70"
            :width="7"
            color="purple"
            indeterminate
          ></v-progress-circular>
      </v-flex>
      <v-flex xs12 sm6 offset-sm3 v-else-if="!loading && orders.length !== 0">
        <h1 class="text-secondary mb-3">Orders</h1>
         <v-list
      flat
      subheader
      three-line
    >
      <v-list-item-group       
        multiple
        active-class=""
      >
        <v-list-item 
          avatar
          v-for="(order, i) in orders"
          :key="i">
          <template>
            <v-list-item-action>
              <v-checkbox
                color="success"
                :input-value="order.done"
                @change="markDone(order)"
              ></v-checkbox>
            </v-list-item-action>              
            <v-list-item-content>
              <v-list-item-title>{{order.name}}</v-list-item-title>
              <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn 
                :to="'/product/'+order.productId"
                class="primary"
              >Open</v-btn>
            </v-list-item-action>        
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-flex>
      <v-flex xs12 class="d-flex justify-center pt-5" v-else>
        <h1 class="text-secondary mb-3">You have no Orders</h1>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      },
      orders () {
        return this.$store.getters.orders
      }
    },
    methods: {
      markDone (order) {
        this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
        .catch (() => {})
      }
    },
    created () {
      this.$store.dispatch('fetchOrders')
    }
  }
</script>