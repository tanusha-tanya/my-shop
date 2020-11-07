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
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dark  prominent
      src="https://img4.goodfon.ru/original/5616x3744/0/82/fon-tekstura-tsvety-rozy-krasnye.jpg">
      <v-app-bar-nav-icon @click="sideNav = !sideNav"></v-app-bar-nav-icon>

      <v-toolbar-title>Online Store</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text depressed v-for="(link, i) in links" :key="i" :to="link.url">
        <v-icon left>{{link.icon}}</v-icon>
        {{link.title}}
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

    <v-footer app>
      <!-- -->
    </v-footer>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        sideNav: false,
        links: [
          {title: 'Login', icon:'account_box', url: '/login'},
          {title: 'Register', icon:'face', url: '/register'},
          {title: 'Cart', icon:'shopping_cart', url: '/chekcout'},
          {title: 'New product', icon:'add', url: '/new'},
          {title: 'My products', icon:'list', url: '/list'}
        ]
      }
    }
  }
</script>