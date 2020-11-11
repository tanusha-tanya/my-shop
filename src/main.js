import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
import fb from 'firebase'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  created () {
    var firebaseConfig = {
      apiKey: 'AIzaSyAo-KGngdYwPkBeWbRicnbNoYkMA-83c54',
      authDomain: 'onlinestore-6f57c.firebaseapp.com',
      databaseURL: 'https://onlinestore-6f57c.firebaseio.com',
      projectId: 'onlinestore-6f57c',
      storageBucket: 'onlinestore-6f57c.appspot.com',
      messagingSenderId: '206037325151',
      appId: '1:206037325151:web:30a35a6dd2558b015292ea',
      measurementId: 'G-GK5YH9ZFM8'
    }
    // Initialize Firebase
    fb.initializeApp(firebaseConfig)
  },
  render: h => h(App)
}).$mount('#app')
