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
                                     <small id="emailHelp" class="form-text text-muted" style="color : #0065FC">(Password must be atleast 8 characters long)</small>
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
                                       <small id="emailHelp" class="form-text text-muted" style="color : #0065FC">(Re-enter password)</small>
                                        <small
                                        v-if="submitted && errors.has('password')"
                                        class="invalid-feedback"
                                         >
                                    {{ errors.first("password")}}
                                    </small>  
                                </div>
                            </div>
                            <button type="submit" class="btn1">Create Account</button>
                    </form>
                    <div class="account">
                        Already have an account?<span style="color : #0065FC"><nuxt-link to="/signin"> Log in</nuxt-link></span> 
                    </div>
                    </div>
                </div>
                <div class="wrapper">
                    <div class="box-down">
                        <!-- <div class="d-flex">
                            <div>
                                 <img src="/img/Rectangle 21.png" class="img-fluid" alt="" srcset="">
                            </div>
                            <div class="text-box">
                                Best Pricing Plans
                            </div>
                        </div>
                        <div class="d-flex mt-3">
                            <div>
                                 <img src="/img/Rectangle 21.png" class="img-fluid" alt="" srcset="">
                            </div>
                            <div class="text-box">
                                Best Pricing Plans
                            </div>
                        </div>
                        <div class="d-flex mt-3">
                            <div>
                                 <img src="/img/Rectangle 21.png" class="img-fluid" alt="" srcset="">
                            </div>
                            <div class="text-box">
                                Best Pricing Plans
                            </div>
                        </div>
                        <div class="d-flex mt-3">
                            <div>
                                 <img src="/img/Rectangle 21.png" class="img-fluid" alt="" srcset="">
                            </div>
                            <div class="text-box">
                                Best Pricing Plans
                            </div>
                        </div> -->
                    </div>
                   
                </div>
            

            </div>
           
                </div>

                <!-- Mobile View -->
                <div class="container wrapper mobileShow"> 
                    <div class="mobile-form">
                        <form  @submit.prevent="createAccount"> 
                            <div class="first-form">
                                <h1 class="mobile-text">Set Up an Account</h1>
                                <div class="mt-4">
                                     <input type="text" name="" class="form-control" id="" required placeholder="Username" v-model="signUp.username">
                                </div>
                                <div class="mt-4">
                                     <input type="email" name="" class="form-control" id="" required placeholder="Email" v-model="signUp.email">
                                </div>
                                <div class="mt-4">
                                     <input type="password" name="" class="form-control" id="" required placeholder="Password" v-model="signUp.password">
                                </div>
                                <div class="mt-4">
                                     <input type="password" name="" class="form-control" id="" required placeholder="Password Confirmation" v-model="signUp.password_confirmation">
                                </div>
                            </div>
                             <button type="submit" class="btn1" style="color:white; ">Create Account</button>
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
        console.log(e);
        this.error = e.res;
        
         if (e.response.status === 422) {
          this.$message({
            message: "Sorry, Email has been taken",
            type: "error"
          });
        }
        this.loader = false
      }
                
                }
                else{

                }
            });
    //          try {
    //         let response = await this.$axios.post('https://hamlet.payfill.co/api/auth/signup',this.signUp)
    //         let token = response.data.token
    //         this.$auth.$storage.setLocalStorage('jwt', token);
    //     // localStorage.setItem("jwt", token);
    //         console.log(response)
    //     //   this.$router.push("/managerAccount");
    //          await this.$auth.loginWith('local', {
    //       data: {
    //             email : this.signUp.email,
    //             password : this.signUp.password
    //       },
    //     }) 
    //      let user = response.data.user
    //      this.$auth.$storage.setLocalStorage('user', user);
    //       this.$message({
    //       message: "Account created successfully!",
    //       type: 'success'
    //     })
    //      this.$router.push("/manager-account");
    //   }
     
    //   catch (e) {
    //     console.log(e);
    //     this.error = e.res;
        
    //     //  if (e.response.status === 422) {
    //     //   this.$message({
    //     //     message: "Sorry, Email has been taken",
    //     //     type: "error"
    //     //   });
    //     // }
    //     this.loader = false
    //   }
        },
        // createAccount(){
        //     axios.post('https://hamlet-hrm.herokuapp.com/api/auth/signup',this.signUp).then(res=> 
        //     {
        //         this.$router.push('/managerAccount')
        //         console.log(res.data)
        //     }) 
        //      .catch((error) => {
        //   this.loader = false;
        //   console.log(error);
        // });
        // }      
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
    margin-top: 4.3rem;
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
    padding: 1rem 10.5rem;
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
    .box-down{
    padding-left: 3rem;
    margin-top: 13rem;
    text-align: center;
    }
     .btn1{
    padding: 1rem 7rem;
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
    h1{
        font-size: 2rem !important;
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
    padding: 1rem 21rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    }
}
</style>