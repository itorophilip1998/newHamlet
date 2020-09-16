<template>
    <div>
        <Navbar />

        <!-- Desktop view -->

        <div class="bg-big">
                 <div class="grid desktopShow">
                     <div class="margin-form">
                <div class="form-edit">

                    <form @submit.prevent="createAccount">
                            <div class="active first-form" id="hide-form">

                                <h1>Set Up An Account</h1>

                                <span class="mt-4 text-center" v-if="loader"><app-loader /></span>
                                <div class="mt-4">
                                     <input type="text" class="form-control" id="" name="username" placeholder="Username" v-model="signUp.username"  v-validate="'required'"
                                     :class="{ 'is-invalid': submitted && errors.has('username') }">
                                     <small
                                        v-if="submitted && errors.has('username')"
                                        class="invalid-feedback"
                                    >
                                    {{ errors.first("username")}}
                                    </small>
                                    <!-- validated backend error username -->
                                     <!-- <small v-if="error.username"  class="text-danger" v-for="errors in error.username" :key="index"><span>{{errors}}</span><br></small> -->

                                </div>
                                <div class="mt-4">
                                     <input type="email" name="email" class="form-control" id="" placeholder="Email" v-model="signUp.email" v-validate="'required|email'"
                                     :class="{ 'is-invalid': submitted && errors.has('email') }">
                                       <small
                                        v-if="submitted && errors.has('email')"
                                        class="invalid-feedback"
                                         >
                                    {{ errors.first("email")}}

                                    </small>
                                     <!-- validated backend error email -->
                                     <!-- <small v-if="error.email"  class="text-danger" v-for="errors in error.email" :key="index"><span>{{errors}}</span><br></small> -->

                                </div>
                                <div class="mt-4">
                                     <input type="password" name="password" class="form-control" id="" placeholder="Password" v-model="signUp.password"  v-validate="{ required: true, min: 8 }"
                                     :class="{ 'is-invalid': submitted && errors.has('password') }">
                                     <small v-if="!error.password" id="emailHelp" class="form-text text-muted" style="color : #0065FC; font-size : 10px">(Password must be atleast <b>8 characters, must contain a number & capital letter</b>)</small>
                                     <!-- <small v-if="!error.password" id="emailHelp" class="form-text text-muted" style="color : #0065FC">(Password must contain a <b>Number</b> )</small>
                                     <small v-if="!error.password" id="emailHelp" class="form-text text-muted" style="color : #0065FC">(Password must contain <b>Capital/Small</b> letter)</small> -->
                                      <small
                                        v-if="submitted && errors.has('password')"
                                        class="invalid-feedback"
                                         >

                                    {{ errors.first("password")}}
                                    </small>
                                      <!-- validated backend error password -->
                                      <!-- <small v-if="error.password"  class="text-danger" v-for="errors in error.password" :key="index"><span>{{errors}}</span><br></small> -->
                                </div>
                                <div class="mt-4">
                                     <input type="password" name="password" class="form-control" id="" placeholder="Password Confirmation" v-model="signUp.password_confirmation"
                                     :class="{ 'is-invalid': submitted && errors.has('password') }">
                                       <small v-if="!error.password" id="emailHelp" class="form-text text-muted" style="color : #0065FC; font-size : 10px">(Re-enter password)</small>
                                        <small
                                        v-if="submitted && errors.has('password')"
                                        class="invalid-feedback"
                                         >
                                    {{ errors.first("password")}}
                                    </small>
                                </div>
                            </div>
                            <button type="submit" class="btn1 btn btn-primary">Create Account</button>
                    </form>
                    <div class="account">
                        Already have an account?<span style="color : #0065FC"><nuxt-link to="/signin"> Log in</nuxt-link></span>
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="box-down">
                    </div>

                </div>


            </div>

                </div>

                <!-- Mobile View -->
                <div class="container wrapper mobileShow">
                    <div class="mobile-form">
                       <form @submit.prevent="createAccount">
                            <div class="active first-form" id="hide-form">
                                <h1>Set Up An Account</h1>
                                <span class="mt-4 text-center" v-if="loader"><app-loader /></span>
                                <div class="mt-4">
                                     <input type="text" class="form-control" id="" name="username" placeholder="Username" v-model="signUp.username"  v-validate="'required'"
                                     :class="{ 'is-invalid': submitted && errors.has('username') }">
                                     <small
                                        v-if="submitted && errors.has('username')"
                                        class="invalid-feedback"
                                    >
                                    {{ errors.first("username")}}
                                    </small>
                                </div>
                                <div class="mt-4">
                                     <input type="email" name="email" class="form-control" id="" placeholder="Email" v-model="signUp.email" v-validate="'required|email'"
                                     :class="{ 'is-invalid': submitted && errors.has('email') }">
                                       <small
                                        v-if="submitted && errors.has('email')"
                                        class="invalid-feedback"
                                         >
                                    {{ errors.first("email")}}
                                    </small>
                                </div>
                                <div class="mt-4">
                                     <input type="password" name="password" class="form-control" id="" placeholder="Password" v-model="signUp.password"  v-validate="{ required: true, min: 8 }"
                                     :class="{ 'is-invalid': submitted && errors.has('password') }">
                                     <small id="emailHelp" class="form-text text-muted" style="color : #0065FC; font-size : 10px">(Password must be atleast <b>8 characters, must contain a number & capital letter</b>)</small>
                                      <small
                                        v-if="submitted && errors.has('password')"
                                        class="invalid-feedback"
                                         >
                                    {{ errors.first("password")}}
                                    </small>
                                </div>
                                <div class="mt-4">
                                     <input type="password" name="password" class="form-control" id="" placeholder="Password Confirmation" v-model="signUp.password_confirmation"
                                     :class="{ 'is-invalid': submitted && errors.has('password') }">
                                       <small id="emailHelp" class="form-text text-muted" style="color : #0065FC; font-size : 10px">(Re-enter password)</small>
                                        <small
                                        v-if="submitted && errors.has('password')"
                                        class="invalid-feedback"
                                         >
                                    {{ errors.first("password")}}
                                    </small>
                                </div>
                            </div>
                            <button type="submit" class="btn1 btn btn-primary">Create Account</button>
                    </form>
                        <div class="account">
                        Already have an account?<span style="color : #0065FC"><nuxt-link to="/signin"> Log in</nuxt-link></span>

                    </div>
                    </div>
                </div>
                <!-- Mobile View End -->
    </div>
</template>

<script>
// import axios from 'axios'
// import VeeValidate from 'vee-validate';
import Navbar from "@/components/navbar2.vue"
import newLoader from "~/components/loader-1.vue";
export default {
  auth: false,
  components : {
        Navbar,
        'app-loader' : newLoader
    },
    data(){
        return{
            signUp : {
                username : '',
                email : '',
                password: '',
                password_confirmation: ''

            },
            loader : false,
            submitted : false,
            getError:'',
            error:'',
        }
    },
    methods : {
        async createAccount(){
            if(this.signUp.username === "" || this.signUp.email === "" || this.signUp.password === "" || this.signUp.password_confirmation === ""){
                this.loader = false
                 this.$message({
                    message: "Fields cannot be empty!",
                    type: 'error'
                    })
            }
            else{
            this.loader = true
            }

            this.submitted = true;
            this.$validator.validateAll().then( async (valid) => {
                if (valid) {
                console.log("Login")
                // this.login = false
                 try {
            let response = await this.$axios.post('https://hamlet.payfill.co/api/auth/signup',this.signUp)
            let token = response.data.token
            this.$auth.$storage.setLocalStorage('jwt', token);
            console.log(response)
             await this.$auth.loginWith('local', {
                data: {
                        email : this.signUp.email,
                        password : this.signUp.password
                },
            })
          this.$message({
          message: "Account created successfully!",
          type: 'success'
        })
         this.$router.push("/manager-account");
      }

      catch (e) {
          if (e.response.status === 422) {
          this.$message({
            message: "Sorry, email already taken!",
            type: "error",
          });
        }
        this.loader = false
      }

                }
                else{
                    this.loader = false
                }
            });
        },

    }
}
</script>>

<style scoped>
*{
    font-family: 'Overpass', sans-serif;
}
.wrapper{
    background: linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url("/img/nesa.jpg") no-repeat center center/cover;
    /* background-position: right; */
    /* background-size: center center/cover; */
    /* background-repeat: no-repeat; */
    height: 100vh;
}
.bg-big{
    /* background-color:#F9F9F9; */
    background-color: rgb(192, 192, 192, 0.1);
    margin-top: 4rem;
}
.margin-form{
    margin-left: 8rem;
}
.grid{
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #F9F9F9;
}
.form-edit{
    padding: 1rem;
}
.first-form{
    margin-top: 6rem;
}
.second-form{
    margin-top: 1rem;
}
input{
    width : 70%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    background-color: rgba(255,255,255,1) !important;
}
.file-border{
    padding: 1rem 5rem 1rem 1rem;
    border: 1px solid rgb(192, 192, 192);
    outline: none;
}
textarea{
    width: 70%;
    height: 10vh;
    border: 1px solid rgb(192, 192, 192);
     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
    background-color: rgba(255,255,255,1) !important;
}
.btn1{
    padding: 1rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    width: 70%;
}
.btn3{
    padding: 1rem 2rem;
    color: #FFFFFF;
    /* background-color: #1DD200; */
    border: 1px solid #FFFFFF;
    margin-left: 2rem;
   outline: none !important;
}

.active {
    display: block !important;
}
#hide-form{
    display: none;
}
h1{
    color: #0065FC;
}
.text-box{
    color : #FFFFFF;
    font-size: 1.2rem;
    margin-left: 1rem;
}
.box-down{
    padding-left: 20rem;
    margin-top: 17rem;
    text-align: center;
}
.mobile-text{
    color: #FFFFFF;
}
.mobileShow{
    display: none;
}
.account{
    padding: 1rem 2rem 2rem 4rem;
    font-size: 1.1rem;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
     h1{
        font-size: 2rem;
        color: #FFFFFF;
    }
    .mobileShow{
        display: block;
    }
    .desktopShow{
        display: none;
    }
    input{
        width: 100%;
    }
    .wrapper{
    background: linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url("/img/nesa.jpg") no-repeat center center/cover;
    height: 100vh;
    padding-top: 1rem;
     padding-bottom: 0;
    }
    label{
        color: #FFFFFF;
    }
    textarea{
        width: 100%;
    }
    .btn1{
        width: 100%;
        border-radius: 5px;
    }
    .btn2{
        margin-left: .1rem;
    }
    .btn3{
        margin-left: .1rem;
    }
    form{
        padding-bottom: 1rem;
    }
    input[type=button]span{
        color: #FFFFFF !important;
    }
    .btn1{
    padding: 1rem 5.5rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
    .first-form{
        margin-top: 3rem;
    }
    .account{
    padding: 1rem 2rem 2rem .5rem;
    font-size: 1rem;
    color: #FFFFFF;
    }

}
@media only screen and (min-width: 360px) and (max-width: 578px) {
    h1{
        font-size: 2rem;
        color: #FFFFFF;
    }
    .mobileShow{
        display: block;
    }
    .desktopShow{
        display: none;
    }
    input{
        width: 100%;
    }
    .wrapper{
    background: linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url('/img/nesa.jpg') no-repeat center center/cover;
    /* background-position: right; */
    /* background-size: center center/cover; */
    /* background-repeat: no-repeat; */
    height: 100vh;
    padding-top: 1rem;
     padding-bottom: 0;
    }
    label{
        color: #FFFFFF;
    }
    textarea{
        width: 100%;
    }
    .btn1{
        width: 100%;
        border-radius: 5px;
    }
    .btn2{
        margin-left: .1rem;

    }
    .btn3{
        margin-left: .1rem;
    }
    form{
        padding-bottom: 1rem;
    }
    input[type=button]span{
        color: #FFFFFF !important;
    }
    .btn1{
    padding: 1rem 6.8rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
    .first-form{
        margin-top: 3rem;
    }
    .account{
    padding: 1rem 2rem 2rem .5rem;
    text-align: center;
    font-size: 1rem;
    color: #FFFFFF;
    }
}
@media only screen and (min-width: 710px) and (max-width: 768px) {
    .margin-form{
        margin-left: 2rem;
    }
     h1{
        font-size: 2rem;
        color: #0065FC;
    }
    .box-down{
    padding-left: 3rem;
    margin-top: 13rem;
    text-align: center;
    }
    .btn1{
    padding: 1rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
    .account{
    padding: 1rem 2rem 2rem .5rem;
    font-size: 1rem;
    color: #FFFFFF;
    }
    input{
        width: 100%;
    }
    .margin-form{
        margin-left: 1rem;
    }
    .account{
        color: #000000;
        text-align: center;
    }
    .btn1{
        width:100%
    }
}
@media only screen and (min-width: 996px) and (max-width: 1024px) {
    .btn1{
    padding: 1rem 9rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
    .margin-form{
        margin-left: 2rem;
    }
     input{
        width: 90%;
    }
    .btn1{
        width: 90%;
    }
}
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .btn1{
    padding: 1rem 1rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    width: 70%;
    }
}
@media only screen and (min-width: 2000px) and (max-width: 2560px) {
    .btn1{
    /* padding: 1rem 21rem; */
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
}
</style>
