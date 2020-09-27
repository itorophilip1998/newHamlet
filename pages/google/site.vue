<template>
  <div>
    <app-navbar />
    <div>
      <div class="grid">
        <div class="two1">
          <div class="two2">
            <h3 class="text-center text-primary">Hamlet Authorization</h3>
            <hr>
            <div class="border rounded-lg shadow p-2 text-center">
              <p class="text-left">
                Continue Authentication With Google via hamlet
              </p>
                <button @click="setup()" class="text-center w-50 btn btn-primary">Done</button>
            </div>

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
// import swal from "sweetalert";
// import { mapGetters } from "vuex";
export default {
 auth: false,
  components: {
    "app-navbar": Navbar,
    "app-loader": newLoader,
  },
  data() {
    return {
      user: {},
      email: "khikh",
      password: "jjhjh",
      loader: true,
      submitted: false,
      login: false,
      isValid: false,
      profile: {},
      user:{},
      tokenUser : ''
    };
  },
  computed: {
    // ...mapGetters(["isAuthenticated", "loggedInUser"]),
  },
  mounted()
  {
        this.tokenUserPort()
  },

  methods: {
    tokenUserPort()
    {
        var x = location.hash;
        this.tokenUser= x.slice(1)
          this.$auth.$storage.setLocalStorage("jwt", this.tokenUser);
       localStorage.setItem("auth._token.local", 'bearer '+this.tokenUser);
     // cookies
        var d = new Date();
        d.setTime(d.getTime() + (2*24*60*60*1000));
        var expires = "expires="+ d.toUTCString();
        document.cookie = "auth._token.local" + "=" + 'bearer '+this.tokenUser + ";" + expires + ";path=/"; 

    },
    setup()
    {
      this.tokenUserPort()
      this.$axios.get("https://hamlet.payfill.co/api/auth/admin",{headers:{"Authorization":`Bearer ${this.tokenUser}`}}).then((result) => {
        this.$auth.$storage.setLocalStorage("user", result.data.user);
        location.href='/dashboard'
        // this.$router.push("/dashboard");
       }).catch((err) => {
          this.$message({
            message: "An error Occured!, please try again later",
            type: "error",
          });
       });
    },
     async loginUser(e) {
      this.submitted = true;
      this.$validator.validateAll().then(async (valid) => {
        if (valid) {
           this.loader = true;
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
            this.loader = false;
            // console.log(e.response.status);
            // this.error = e.res;
            if (e.response.status === 401) {
              this.$message({
                message:
                  "Sorry,username or password those not match our record!",
                type: "error",
              });
            }
            if (e.response.status === 451) {
              this.$message({
                message:
                  "This account has been banned,please contact administrator for verification!",
                type: "error",
              });
            }
            if (e.response.status === 422) {
              this.$message({
                message: "Sorry, check username or password!",
                type: "error",
              });
            }
            if (!e.response.status) {
              this.$message({
                message: "Sorry, please check your internet connection",
                type: "error",
              });
            }
            this.loader = false;
          }
        }
      });
    },

  }
};
</script>

<style scoped>
*{
  font-family: 'Overpass', sans-serif;
}
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
  background: none;
  border-radius: 5px;
  border: none;
  padding: 0.5rem;
  color: #0065fc;
  /* border: 1px solid #0065fc; */
}
a{
  text-decoration: none !important;
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
    background-size: cover;
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
    margin-top: 2rem;
    border: 1px solid #FFFFFF;
  }
}

/* @media (max-width: 567px) {
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
} */

@media (min-width: 568px) and (max-width: 768px) {
  .two2 {
    padding: 106.8px 30px;
    background: #f9f9f9;
    text-align: center;
  }
}
</style>
