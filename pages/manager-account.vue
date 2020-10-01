<template>
    <div>
        <Navbar />
        <!-- Desktop view -->
        <div class="bg-big">
                 <div class="grid desktopShow">
                     <div class="margin-form">
                <div class="form-edit">
                    <form @submit.prevent="addManger">
                            <div class="first-form">
                                <h1>Manager Information</h1>
                                <div class="mt-4">
                                     <input type="text" name="firstName"
                                      class="form-control" id="" placeholder="First Name"
                                       v-model="managerInfo.first_name"
                                        v-validate="'required'"
                                     :class="{ 'is-invalid': submitted && errors.has('firstName') }">
                                     <small
                                        v-if="submitted && errors.has('firstName')"
                                        class="invalid-feedback"
                                    >
                                    {{ errors.first("firstName")}}
                                    </small>
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="lastName" class="form-control" id="" 
                                     placeholder="Last Name" v-model="managerInfo.last_name" 
                                     v-validate="'required'"
                                     :class="{ 'is-invalid': submitted && errors.has('lastName') }">
                                     <small
                                        v-if="submitted && errors.has('lastName')"
                                        class="invalid-feedback"
                                    >
                                    {{ errors.first("lastName")}}
                                    </small>
                                </div>
                                <div class="mt-4">
                                     <input type maxlength="11" name="phone" class="form-control" id="" 
                                      placeholder="Telephone" v-model="managerInfo.phone" 
                                      v-validate="'numeric'"
                                     :class="{ 'is-invalid': submitted && errors.has('phone') }">
                                     <small
                                        v-if="submitted && errors.has('phone')"
                                        class="invalid-feedback"
                                    >
                                    {{ errors.first("phone")}}
                                    </small>
                                </div>
                                <div class="mt-4">
                                     <input type="text" name="address" class="form-control" id="" 
                                      placeholder="Address" v-model="managerInfo.address"
                                       v-validate="'required'"
                                     :class="{ 'is-invalid': submitted && errors.has('address') }">
                                     <small
                                        v-if="submitted && errors.has('address')"
                                        class="invalid-feedback"
                                    >
                                    {{ errors.first("address")}}
                                    </small>
                                </div>
                                 <div class="mt-4">
                                     <label for="">Upload Profile Picture</label> <br>
                                     <input type="file" name="profile-picture" class="file-border" id=""
                                      placeholder="" @change="upload()"
                                       v-validate="'required|ext:jpeg,jpg,svg,png'"
                                     :class="{ 'is-invalid': submitted && errors.has('profile-picture') }">
                                     <small id="emailHelp" class="form-text text-muted">(Picture must be of .jpeg, .png, .svg, .jpg format)</small>
                                     <small
                                        v-if="submitted && errors.has('profile-picture')"
                                        class="invalid-feedback"
                                    >
                                    {{ errors.first("profile-picture")}}
                                    </small>
                                </div>
                            </div>

                            <button type="submit" class="btn1">
                                 <span v-if="loader">Submit</span>
                                <div v-else>
                                <app-loader />
                                </div>
                            </button>
                    </form>

                    </div>
                </div>
                <div class="wrapper">
                    <div class="box-down">
                    </div>
                </div>
            </div>
                </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
import newLoader from "~/components/loader.vue";
import Navbar from "@/components/navbar2.vue"
export default {
//   auth: false,
  components : {
        Navbar,
         "app-loader": newLoader,
    },
    data(){
        return{
            managerInfo : {
                first_name : '',
                last_name : '',
                address : '',
                phone : '',
                profile_pic : {}
            },
             user : {},
             loader : true,
             submitted : false
        }
    },
    mounted(){
        this.user= this.$auth.$storage.getLocalStorage('jwt')
          this.$axios.get('https://hamlet.payfill.co/api/auth/admin').then(res=>
            {
              this.id=res.data.user.profile.id
            })

    },
    methods : {
        upload(){
            var input = event.target;
            this.managerInfo.profile_pic = input.files[0];
            console.log(this.managerInfo.profile_pic);
        },
        addManger(){
            if(this.managerInfo.first_name === "" || this.managerInfo.last_name === "" || this.managerInfo.address === "" || this.managerInfo.profile_pic === "" || this.managerInfo.phone === ""){
                this.loader = true
            }
            else{
                 this.loader = false
            }
            this.submitted = true;
            this.$validator.validateAll().then(valid => {
                if (valid) {
                console.log("Login")
                // this.login = false
                }
            });
            const formData = new FormData()
            formData.append('first_name', this.managerInfo.first_name)
            formData.append('last_name', this.managerInfo.last_name)
            formData.append('address', this.managerInfo.address)
            formData.append('phone', this.managerInfo.phone)
            formData.append('profile_pic', this.managerInfo.profile_pic)
            formData.append('_method', 'PUT')
             axios.post(`https://hamlet.payfill.co/api/profile/${this.id}`, formData,
              {headers : {'Authorization' : `Bearer ${this.user}`,'Content-Type':'multipart/form-data'}}).then((res)=> {
                this.$message({
                message: "Manager Successfully Added!",
                type: 'success'
                })
                this.$router.push('/company-details')
                 this.loader = false

            })
            .catch((error) =>{
                console.log(error)
                this.loader = true
            })
        },
    }
}
</script>

<style scoped>
.wrapper{
    background: linear-gradient(to right, rgba(8, 29, 41, 0.7),
       rgba(8, 29, 41, 0.7)), url("/img/nesa.jpg") no-repeat center center/cover;
    /* background-position: right; */
    /* background-size: center center/cover; */
    /* background-repeat: no-repeat; */
    min-height: 100vh;
}
.bg-big{
    /* background-color:#F9F9F9; */
    background-color: rgb(192, 192, 192, 0.1);
    /* margin-top:4.3rem ; */
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
    margin-top: 10rem;
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
    border-radius: 5px;
}
.active {
    display: block !important;
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
    /* .mobileShow{
        display: block;
    }
    .desktopShow{
        display: none;
    } */
    .form-edit{
    padding: .5rem;
}
    .margin-form{
        margin-left: 0;
    }
    input{
        width: 100%;
    }
   .grid{
        grid-template-columns: 1fr;
        background: #E6ECF2;
        height: 100vh;
    }
    .wrapper{
        display: none;
    background: #f9f9f9;
    height: 100vh;
    padding-top: 1rem;
     padding-bottom: 3rem;
    }
    label{
        color: #0065FC;
    }
    textarea{
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
    padding: 1rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    width: 100%;
    }
    .first-form{
        margin-top: 7rem;
    }
    h1{
        color: #0065FC;
        font-size: 1.5rem;
    }
}
@media only screen and (min-width: 360px) and (max-width: 578px) {
    /* .mobileShow{
        display: block;
    }
    .desktopShow{
        display: none;
    } */
    .form-edit{
    padding: .5rem;
}
    .margin-form{
        margin-left: 0;
    }
    input{
        width: 100%;
    }
    .grid{
        grid-template-columns: 1fr;
        background: #E6ECF2;
        height: 100vh;
    }
    .wrapper{
        display: none;
    background: #f9f9f9;
    height: 100vh;
    padding-top: 1rem;
     padding-bottom: 3rem;
    }
    label{
        color: #0065FC;
    }
    textarea{
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
    padding: 1rem!important;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    width: 100%;
    }
    .first-form{
        margin-top: 7rem;
    }
    h1{
        color: #0065FC;
        font-size: 1.5rem;
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
    padding: 1rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    width: 100%;
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
}
@media only screen and (min-width: 996px) and (max-width: 1024px) {
    .btn1{
    padding: 1rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    width: 90%;
    }
    .margin-form{
        margin-left: 2rem;
    }
     input{
        width: 90%;
    }
}
@media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .btn1{
    padding: 1rem;
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
    padding: 1rem;
    margin-top: 2rem;
    color:  #FFFFFF;
    background-color: #0065FC;
    border: 1px solid #0065FC;
    outline: none !important;
    width: 70%;
    }
}
</style>
