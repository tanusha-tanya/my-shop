<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card  class="elevation-12">
          <v-toolbar dark color="black">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field 
                color="black" 
                prepend-icon="person"
                name="login" 
                label="login"
                type="text"
                :rules="emailRules"
                v-model="email"
                required>
              </v-text-field>
              <v-text-field 
                color="black" 
                prepend-icon="lock" 
                name="password" 
                label="password" 
                type="password" 
                id="password"
                :rules="passwordRules"
                :counter="6"
                v-model="password"
                required>
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions color="black" dark>
            <v-spacer></v-spacer>
            <v-btn  
              @click="onSubmit"
              :disabled="!valid">
              Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        email: '',
        password: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be more than 6 characters',
        ],
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()){
          const User = {
            email: this.email,
            password: this.password
          }
          console.log(User)
        }
      }
    }
  }
</script>