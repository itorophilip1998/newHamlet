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

                <span class="mt-4 text-center" v-if="loader"
                  ><app-loader
                /></span>
                <div class="mt-4">
                  <input
                    type="text"
                    class="form-control"
                    id=""
                    name="username"
                    placeholder="Username"
                    v-model="signUp.username"
                    v-validate="'required'"
                    :class="{
                      'is-invalid': submitted && errors.has('username'),
                    }"
                  />
                  <small
                    v-if="submitted && errors.has('username')"
                    class="invalid-feedback"
                  >
                    {{ errors.first("username") }}
                  </small>
                  <!-- validated backend error username -->
                  <small v-if="error.username" class="text-danger error">
                    {{ error.username[0] }}
                  </small>
                </div>
                <div class="mt-4">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    id=""
                    placeholder="Email"
                    v-model="signUp.email"
                    v-validate="'required|email'"
                    :class="{ 'is-invalid': submitted && errors.has('email') }"
                  />
                  <small
                    v-if="submitted && errors.has('email')"
                    class="invalid-feedback"
                  >
                    {{ errors.first("email") }}
                  </small>
                  <!-- validated backend error email -->
                  <small v-if="error.email" class="text-danger error">
                    {{ error.email[0] }}
                  </small>
                </div>
                <div class="mt-4">
                  <input
                    type="password"
                    @keydown.space.prevent
                    name="password"
                    class="form-control"
                    id=""
                    placeholder="Password"
                    v-model="signUp.password"
                    v-validate="{ required: true, min: 8 }"
                    :class="{
                      'is-invalid': submitted && errors.has('password'),
                    }"
                  />
                  <small
                    v-if="!error.password"
                    id="emailHelp"
                    class="form-text text-muted"
                    style="font-size: 10px"
                    >(Password must be atleast
                    <b>8 characters, must contain a number & capital letter</b
                    >)</small
                  >
                  <!-- <small v-if="!error.password" id="emailHelp" class="form-text text-muted" style="color : #0065FC">(Password must contain a <b>Number</b> )</small>
                                     <small v-if="!error.password" id="emailHelp" class="form-text text-muted" style="color : #0065FC">(Password must contain <b>Capital/Small</b> letter)</small> -->
                  <small
                    v-if="submitted && errors.has('password')"
                    class="invalid-feedback"
                  >
                    {{ errors.first("password") }}
                  </small>
                  <!-- validated backend error password -->
                  <small v-if="error.password" class="text-danger error">
                    {{ error.password[0] }}
                  </small>
                </div>
                <div class="mt-4">
                  <input
                    @input="password = true"
                    @mouseout="password = false"
                    type="password"
                    name="password"
                    @keydown.space.prevent
                    class="form-control"
                    id=""
                    placeholder="Password Confirmation"
                    v-model="signUp.password_confirmation"
                    :class="{
                      'is-invalid': submitted && errors.has('password'),
                    }"
                  />
                  <!-- password Confirmation validation -->

                  <small
                    v-if="
                      signUp.password_confirmation == signUp.password &&
                      password
                    "
                    ><i class="fa text-success" aria-hidden="true">
                      <font-awesome-icon :icon="['fa', 'check']" /> Confirmed
                    </i></small
                  >
                  <small
                    v-if="
                      signUp.password_confirmation != signUp.password &&
                      password
                    "
                    ><i class="fa text-danger" aria-hidden="true"
                      ><font-awesome-icon :icon="['fa', 'key']" /> Password
                      Confirmation Not matched</i
                    ></small
                  >
                  <small
                    v-if="submitted && errors.has('password')"
                    class="invalid-feedback"
                  >
                    {{ errors.first("password") }}
                  </small>
                </div>
              </div>
              <button
                type="submit"
                class="btn1 btn btn-primary"
                :disabled="
                  !signUp.username ||
                  !signUp.email ||
                  !signUp.password ||
                  !signUp.password_confirmation ||
                  loader
                "
                :class="{
                  disabled:
                    !signUp.username ||
                    !signUp.email ||
                    !signUp.password ||
                    !signUp.password_confirmation ||
                    loader,
                }"
              >
                Create Account
              </button>
            </form>
            <div class="account">
              Already have an account?<span style="color: #0065fc"
                ><nuxt-link to="/signin"> Log in</nuxt-link>
              </span>
            </div>
            <button class="btn8">
              <img src="/img/group.png" alt="" width="15rem" class="mr-3" />
              <a href="https://hamlet.payfill.co/google">Sign up with Google</a>
            </button>
          </div>
        </div>
        <div class="wrapper">
          <div class="box-down"></div>
        </div>
      </div>
    </div>

    <!-- Mobile View -->

    <!-- Mobile View End -->
  </div>
</template>

<script>
// import axios from 'axios'
// import VeeValidate from 'vee-validate';
import Navbar from "@/components/navbar2.vue";
import newLoader from "~/components/loader-1.vue";
export default {
  auth: false,
  components: {
    Navbar,
    "app-loader": newLoader,
  },
  data() {
    return {
      signUp: {
        username: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      loader: false,
      submitted: false,
      getError: "",
      error: [],
      password: false,
    };
  },
  methods: {
    async createAccount() {
      if (
        this.signUp.username === "" ||
        this.signUp.email === "" ||
        this.signUp.password === "" ||
        this.signUp.password_confirmation === ""
      ) {
        this.loader = false;
        this.$message({
          message: "Fields cannot be empty!",
          type: "error",
        });
      } else {
        this.loader = true;
      }

      this.submitted = true;
      this.$validator.validateAll().then(async (valid) => {
        if (valid) {
          console.log("Login");
          // this.login = false
          try {
            let response = await this.$axios.post(
              "https://hamlet.payfill.co/api/auth/signup",
              this.signUp
            );
            let token = response.data.token;
            this.$auth.$storage.setLocalStorage("jwt", token);
            console.log(response);
            await this.$auth.loginWith("local", {
              data: {
                email: this.signUp.email,
                password: this.signUp.password,
              },
            });
            this.$message({
              message: "Account created successfully!",
              type: "success",
            });
            this.$router.push("/manager-account");
          } catch (e) {
            if (e.response.status === 422) {
              this.error = e.response.data.messages;
              console.log(this.error);
            } else {
              this.$message({
                message: `An Error occured!,please try again later`,
                type: "error",
              });
            }
            this.loader = false;
          }
        } else {
          this.loader = false;
        }
      });
    },
  },
};
</script>>

<style scoped>
.error {
  color: #eb4335;
  font-size: 11px !important;
}

* {
  font-family: "Overpass", sans-serif;
}
.wrapper {
  background: linear-gradient(
      to right,
      rgba(8, 29, 41, 0.7),
      rgba(8, 29, 41, 0.7)
    ),
    url("/img/nesa.jpg") no-repeat center center/cover;
  /* background-position: right; */
  /* background-size: center center/cover; */
  /* background-repeat: no-repeat; */
  min-height: 100vh;
}
.bg-big {
  /* background-color:#F9F9F9; */
  background-color: rgb(192, 192, 192, 0.1);
  /* margin-top: 4rem; */
}
.margin-form {
  margin-left: 8rem;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #f9f9f9;
}
.form-edit {
  padding: 3rem;
}
.btn8 {
  width: 80%;
  border: 1px solid #eb4335;
  border-radius: 5px;
  padding: 0.5rem;
  background: transparent;
  color: #eb4335;
  font-size: 20px !important;
}
.btn8 a {
  color: #eb4335;
}
.first-form {
  margin-top: 7rem;
}
.second-form {
  margin-top: 1rem;
}
input {
  width: 80%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  background-color: rgba(255, 255, 255, 1) !important;
}
.file-border {
  padding: 1rem 5rem 1rem 1rem;
  border: 1px solid rgb(192, 192, 192);
  outline: none;
}
textarea {
  width: 80%;
  height: 10vh;
  border: 1px solid rgb(192, 192, 192);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;
  background-color: rgba(255, 255, 255, 1) !important;
}
.btn1 {
  padding: 1rem;
  margin-top: 2rem;
  color: #ffffff;
  background-color: #0065fc;
  border: 1px solid #0065fc;
  outline: none !important;
  width: 80% !important;
}
.btn3 {
  padding: 1rem 2rem;
  color: #ffffff;
  /* background-color: #1DD200; */
  border: 1px solid #ffffff;
  margin-left: 2rem;
  outline: none !important;
}

.active {
  display: block !important;
}
#hide-form {
  display: none;
}
h1 {
  color: #0065fc;
}
.text-box {
  color: #ffffff;
  font-size: 1.2rem;
  margin-left: 1rem;
}
.box-down {
  padding-left: 20rem;
  margin-top: 17rem;
  text-align: center;
}
.mobile-text {
  color: #ffffff;
}
.mobileShow {
  display: none;
}
.account {
  padding: 1rem 2rem 2rem 4rem;
  font-size: 1.1rem;
}
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
  h1 {
    font-size: 2rem;
    color: #0065fc;
  }
  .form-edit {
    padding: 1rem;
  }
  .margin-form {
    margin-left: 0;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  /* .mobileShow{
        display: block;
    }
    .desktopShow{
        display: none;
    } */
  input {
    width: 100%;
  }
  .wrapper {
    display: none;
    background: #f9f9f9;
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .btn8 {
    width: 100%;
    border: 1px solid #eb4335;
    border-radius: 5px;
    padding: 0.5rem;
    background: transparent;
    color: #eb4335;
    font-size: 20px !important;
  }
  label {
    color: #ffffff;
  }
  textarea {
    width: 100%;
  }
  .btn1 {
    width: 100%;
    border-radius: 5px;
  }
  .btn2 {
    margin-left: 0.1rem;
  }
  .btn3 {
    margin-left: 0.1rem;
  }
  form {
    padding-bottom: 1rem;
  }
  input[type="button"]span {
    color: #ffffff !important;
  }
  .btn1 {
    margin-top: 2rem;
    color: #ffffff;
    background-color: #0065fc;
    border: 1px solid #0065fc;
    outline: none !important;
    width: 100% !important;
  }
  .first-form {
    margin-top: 5rem;
  }
  .account {
    padding: 1rem 2rem 2rem 0.5rem;
    font-size: 1rem;
  }
}
@media only screen and (min-width: 351px) and (max-width: 578px) {
  h1 {
    font-size: 2rem;
    color: #0065fc;
  }
  .margin-form {
    margin-left: 0;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  .form-edit {
    padding: 1rem;
  }
  input {
    width: 100%;
  }
  .wrapper {
    display: none;
    background: #f9f9f9;
    /* background-position: right; */
    /* background-size: center center/cover; */
    /* background-repeat: no-repeat; */
    height: auto;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .btn8 {
    width: 100%;
    border: 1px solid #eb4335;
    border-radius: 5px;
    padding: 0.5rem;
    background: transparent;
    color: #eb4335;
    font-size: 20px !important;
  }
  label {
    color: #ffffff;
  }
  textarea {
    width: 100%;
  }
  .btn1 {
    width: 100%;
    border-radius: 5px;
  }
  .btn2 {
    margin-left: 0.1rem;
  }
  .btn3 {
    margin-left: 0.1rem;
  }
  form {
    padding-bottom: 1rem;
  }
  input[type="button"]span {
    color: #ffffff !important;
  }
  .btn1 {
    margin-top: 2rem;
    color: #ffffff;
    background-color: #0065fc;
    border: 1px solid #0065fc;
    outline: none !important;
    width: 100% !important;
  }
  .first-form {
    margin-top: 5rem;
  }
  .account {
    padding: 1rem 2rem 2rem 0.5rem;
    text-align: center;
    font-size: 1rem;
  }
}
@media only screen and (min-width: 710px) and (max-width: 768px) {
  .margin-form {
    margin-left: 2rem;
  }

  h1 {
    font-size: 2rem;
    color: #0065fc;
  }
  .box-down {
    padding-left: 3rem;
    margin-top: 13rem;
    text-align: center;
  }
  .btn1 {
    padding: 1rem;
    margin-top: 2rem;
    color: #ffffff;
    background-color: #0065fc;
    border: 1px solid #0065fc;
    outline: none !important;
    width: 100% !important;
  }
  .btn8 {
    width: 100%;
    border: 1px solid #eb4335;
    border-radius: 5px;
    padding: 0.5rem;
    background: transparent;
    color: #eb4335;
    font-size: 20px !important;
  }
  .account {
    padding: 1rem 2rem 2rem 0.5rem;
    font-size: 1rem;
    color: #ffffff;
  }
  input {
    width: 100%;
  }
  .margin-form {
    margin-left: 1rem;
  }
  .account {
    color: #000000;
    text-align: center;
  }
  .btn1 {
    width: 100%;
  }
}
@media only screen and (min-width: 996px) and (max-width: 1024px) {
  .btn1 {
    padding: 1rem 1rem;
    margin-top: 2rem;
    color: #ffffff;
    background-color: #0065fc;
    border: 1px solid #0065fc;
    outline: none !important;
    width: 90% !important;
  }
  .btn8 {
    width: 90%;
    border: 1px solid #eb4335;
    border-radius: 5px;
    padding: 0.5rem;
    background: transparent;
    color: #eb4335;
    font-size: 20px !important;
  }
  .margin-form {
    margin-left: 2rem;
  }
  input {
    width: 90%;
  }
  .btn1 {
    width: 90%;
  }
}

@media only screen and (min-width: 2000px) and (max-width: 2560px) {
  .btn1 {
    /* padding: 1rem 21rem; */
    margin-top: 2rem;
    color: #ffffff;
    background-color: #0065fc;
    border: 1px solid #0065fc;
    outline: none !important;
  }
}
</style>
