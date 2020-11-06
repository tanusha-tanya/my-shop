<template>
  <div>
    <v-navigation-drawer app temporary> 
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app dark  prominent
      src="https://thumbs.dreamstime.com/b/%D1%80%D0%BE%D0%B7%D1%8B-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D1%8B-%D1%80%D0%BE%D0%B7%D0%BE%D0%B2%D1%8B%D0%B5-%D0%B1%D0%B5%D0%B7%D1%88%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5-%D1%82%D0%B0%D0%BA%D0%B6%D0%B5-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D0%B8-%D0%BF%D1%80%D0%B8%D1%82%D1%8F%D0%B6%D0%BA%D0%B8-corel-123767623.jpg">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Online Store</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text>mdi-magnify</v-btn>
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