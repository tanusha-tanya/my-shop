<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card  class="elevation-12">
          <v-toolbar dark color="black">
            <v-toolbar-title>Register form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid">
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
                :rules="passwordRules"
                :counter="6"
                v-model="password"
                required>
              </v-text-field>
              <v-text-field 
                color="black" 
                prepend-icon="repeat" 
                name="confirm-password" 
                label="Confirm Password" 
                type="password"                
                :rules="confirmPasswordRules"
                :counter="6"
                v-model="confirmPassword"
                required>
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions color="black" dark>
            <v-spacer></v-spacer>
            <v-btn  
              @click="onSubmit"
              :disabled="!valid || loading"
              :loading="loading">
              Create account</v-btn>
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
        confirmPassword: '',
        valid: false,
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => (v && v.length >= 6) || 'Password must be more than 6 characters',
        ],
        confirmPasswordRules: [
          v => !!v || 'Password is required',
          v => v === this.password || 'Password should match'
        ],
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit () {
        if (this.$refs.form.validate()){
          const User = {
            email: this.email,
            password: this.password
          }
          
          this.$store.dispatch('registerUser', User)
          .then(() => {
            this.$router.push('/')
          })
          .catch(err => console.log(err))
        }
      }
    }
  }
</script>