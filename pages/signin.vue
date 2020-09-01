<template>
  <div>
    <app-navbar />
    <div>
      <div class="grid">
        <div class="two1">
          <div class="two2">
            <h2 class="text-center">Welcome Back!</h2>
            <!-- {{user}}{{ loggedInUser}} -->

            <form @submit.prevent="loginUser">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  v-model="email"
                  v-validate="'required|email'"
                  :class="{ 'is-invalid': submitted && errors.has('email') }"
                />
                <small
                  v-if="submitted && errors.has('email')"
                  class="invalid-feedback"
                >{{ errors.first("email") }}</small>
                <br />
              </div>
              <div class="mt-4">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  v-model="password"
                  append-icon="mdi-eye"
                  v-validate="{ required: true, min: 8 }"
                  :class="{ 'is-invalid': submitted && errors.has('password') }"
                />
                <small
                  id="emailHelp"
                  v-if="submitted && errors.has('password')"
                  class="invalid-feedback"
                >{{ errors.first("password") }}</small>
              </div>

              <br />
              <button type="submit" :disabled="login" class="btn1">
                <span v-if="loader">Login</span>
                <div v-else>
                  <app-loader />
                </div>
              </button>
            </form>
            <hr />
            <br />
            <p class="text-center">
              Not a user yet?
              <nuxt-link to="/signup">
                <button class="btn2" :disabled="isValid">Sign up</button>
              </nuxt-link>
            </p>
          </div>
        </div>
        <div class="two"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "~/components/navbar2.vue";
import newLoader from "~/components/loader.vue";
import swal from "sweetalert";
import { mapGetters } from "vuex";
export default {
  components: {
    "app-navbar": Navbar,
    "app-loader": newLoader,
  },
  data() {
    return {
      user: {},
      email: "",
      password: "",
      loader: true,
      submitted: false,
      login: false,
      isValid: false,
      // tokenUser : {}
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  // created()
  // {
  //   this.user=this.$auth.$state
  //       console.log(this.user)
  // },
  methods: {
    async loginUser(e) {
      if (this.email === "" || this.password === "") {
        this.loader = true;
      } else {
        this.loader = false;
        this.login = false;
      }
      // this.login = true
      this.submitted = true;
      this.$validator.validateAll().then( async (valid) => {
        if (valid) {
          console.log("Login");
            try {
        let response = await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password,
          },
        });
        let user = response.data.user;
        this.$auth.$storage.setLocalStorage("user", user);
        let token = response.data.token;
        this.$auth.$storage.setLocalStorage("jwt", token);
        // localStorage.setItem("jwt", token);
        console.log(token);
        this.loader = false;

        console.log(response);
        this.loader = false;
        this.$message({
          message: `Welcome ${user.username}`,
          type: "success",
        });
        this.$router.push("/dashboard");
      } catch (e) {
        // console.log(e.response.status);
        // this.error = e.res;
        if (e.response.status === 401) {
          this.$message({
            message: "Error, please sign up or check username and password!",
            type: "error",
          });
        }
        if (e.response.status === 422) {
          this.$message({
            message: "Error, check username or password!",
            type: "error",
          });
        }
        //  if (!e.response.status) {
        //   this.$message({
        //     message: "Error, please check your internet connection",
        //     type: "error",
        //   });
        // }
        this.loader = true;
      }
        }
      });
    
    },
  },
};
</script>

<style scoped>
.two {
  background: linear-gradient(
      to right,
      rgba(8, 29, 41, 0.3),
      rgba(8, 29, 41, 0.7)
    ),
    url("/img/nesa.jpg") no-repeat center center/cover;
}
input {
  outline: #0065fc;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 4.3rem;
  height: 100vh;
}
.two1 h2 {
  color: #0065fc;
  font-size: 40px;
  margin-bottom: 40px;
}
.two1 p {
  color: #081d29;
  font-size: 20px;
  margin-bottom: 20px;
}
.two2 {
  padding: 17% 25%;
  background: #f9f9f9;
  height:100vh;
}
.two2 input {
  width: 100%;
  padding: 10px 5px;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.15);
}
.btn1 {
  background: #0065fc;
  border-radius: 5px;
  border: none;
  padding: 7px 20px;
  color: white;
  width: 100%;
  outline: none;
  margin-bottom: 10px;
}
.btn2 {
  background: white;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  color: #0065fc;
  border: 1px solid #0065fc;
}

@media (max-width: 567px) {
  .grid {
    grid-template-columns: 1fr;
    height: 100vh;
  }
  .two {
    display: none;
  }
  .two2 {
    padding: 105px 20px;
    background: linear-gradient(
        to right,
        rgba(8, 29, 41, 0.7),
        rgba(8, 29, 41, 0.7)
      ),
      url("/img/nesa.jpg") no-repeat center center/cover;
    text-align: center;
  }
  .two1 h2 {
    color: white;
  }
  .two1 p {
    color: white;
  }
  .btn1 {
    background: #0065fc;
    border-radius: 5px;
    border: none;
    padding: 7px 20px;
    color: white;
    width: 100%;
    margin-bottom: 10px;
  }
  hr {
    color: #0065fc !important;
  }
}

@media (max-width: 567px) {
  .grid {
    grid-template-columns: 1fr;
    height: 100vh;
  }
  .two {
    display: none;
  }
  .two2 {
    padding: 105px 20px;
    background: linear-gradient(
        to right,
        rgba(8, 29, 41, 0.7),
        rgba(8, 29, 41, 0.7)
      ),
      url("/img/nesa.jpg") no-repeat center center/cover;
    text-align: center;
  }
  .two1 h2 {
    color: white;
  }
  .two1 p {
    color: white;
  }
  .btn1 {
    background: #0065fc;
    border-radius: 5px;
    border: none;
    padding: 7px 20px;
    color: white;
    width: 100%;
    margin-bottom: 10px;
  }
  hr {
    color: #0065fc !important;
  }
}

@media (min-width: 568px) and (max-width: 768px) {
  .two2 {
    padding: 106.8px 30px;
    background: #f9f9f9;
    text-align: center;
  }
}
</style>
