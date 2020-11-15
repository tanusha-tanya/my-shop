<template>
  <div>
    <v-navigation-drawer app temporary v-model="sideNav"> 
       <v-list>
        <v-list-item v-for="(link, i) in links" :key="i" :to="link.url">
          <v-list-item-icon>
            <v-icon color="pink">
              {{link.icon}}
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="link.title"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="onLogout" v-if="isUserLogedIn">
          <v-list-item-icon>
            <v-icon color="pink">
              exit_to_app
            </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark  prominent
      src="https://coolwallpapers.me/picsup/2213815-blue-geometric-shape-abstract-technology-background.jpg">
      <v-app-bar-nav-icon 
        @click="sideNav = !sideNav"
        class="hidden-md-and-up"
        >
      </v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Online Store</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text depressed v-for="(link, i) in links" :key="i" :to="link.url"  class="hidden-sm-and-down">
        <v-icon left>{{link.icon}}</v-icon>
        {{link.title}}
      </v-btn>
      <v-btn text depressed class="hidden-sm-and-down" @click="onLogout" v-if="isUserLogedIn">
        <v-icon left>exit_to_app</v-icon>
        Logout
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        sideNav: false,
      }
    },
    computed: {
      isUserLogedIn () {
        return this.$store.getters.isUserLogedIn
      },
      links () {
        if(this.isUserLogedIn) {
          return [
            {title: 'Cart', icon:'shopping_cart', url: '/checkout'},
            {title: 'New product', icon:'add', url: '/new'},
            {title: 'My products', icon:'list', url: '/list'}
          ]
        }
        return [
          {title: 'Login', icon:'account_box', url: '/login'},
          {title: 'Register', icon:'face', url: '/register'},
        ]
      }
    },
    methods: {
      onLogout () {
        this.$store.dispatch('logoutUser')
        this.$router.push('/')
      }
    }
  }
</script>
<style scoped>
  .pointer{
    cursor: pointer;
  }
</style>