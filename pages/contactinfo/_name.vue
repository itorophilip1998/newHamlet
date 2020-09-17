<template>
  <div>
    <app-navbar />
    <div class="row one5">
      <app-sidebar />
      <div class="one2">
        <div>
          <div class="one3">
            <h2>Contact Information</h2>
            <hr />  
            <form @submit.prevent="addContactInfo">
              <div class="grid">
                <p>Phone Number</p>
                <input
                  name="phone-number"
                  class="form-control"
                  maxlength="11"
                  v-model="contactInfo.phone"
                  v-validate="'required|numeric'"
                  :class="{ 'is-invalid': submitted && errors.has('phone-number') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('phone-number')"
                  class="invalid-feedback"
                >{{ errors.first("phone-number") }}</small>
              </div>
              <div class="grid">
                <p>Email</p>
                <input
                  type="email"
                  name="contact-email"
                  class="form-control"
                  v-model="contactInfo.email"
                  v-validate="'required|email'"
                  :class="{ 'is-invalid': submitted && errors.has('contact-email') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('contact-email')"
                  class="invalid-feedback"
                >{{ errors.first("contact-email")}}</small>
              </div>
              <div class="grid">
                <p>Emergency Contact</p>
                <input
                  name="emergency-contact"
                  class="form-control"
                  maxlength="11"
                  v-model="contactInfo.emergency_contact"
                  v-validate="'required|numeric'"
                  :class="{ 'is-invalid': submitted && errors.has('emergency-contact') }"
                />
                <div></div>
                <small
                  v-if="submitted && errors.has('emergency-contact')"
                  class="invalid-feedback"
                >{{ errors.first("emergency-contact") }}</small>
              </div>

              <hr />
              <div class="one4">
                <!-- <nuxt-link to="/employee-details" class="btn1">Back</nuxt-link> -->
                <button type="submit" class="btn2">
                  <span v-if="isLoading">Next</span>
                  <app-loader v-else />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from "~/components/sidebar.vue";
import navbar from "~/components/navbar.vue";
import swal from "sweetalert";
import newLoader from "~/components/loader.vue";
export default {
  // middleware : ['auth'],
  components: {
    "app-sidebar": sidebar,
    "app-navbar": navbar,
    "app-loader": newLoader,
  },
  data() {
    return {
      user:'',
      contactInfo: {
        phone: "",
        email: "",
        emergency_contact: "",
        employee_id: this.$route.params.name,
      },
      isLoading: true,
      submitted: false,
    };
  },
  // computed: {
  //   dataIsValid() {
  //     let hasInvalidData = false;
  //     Object.keys(this.contactInfo).forEach(key => {
  //       if (!this.contactInfo[key]) hasInvalidData = true;
  //       return false;
  //     });

  //     return !hasInvalidData;
  //   }
  // }, 
  methods: {
    addContactInfo() {
      console.log("clicked");
      this.submitted = true;
      this.$validator.validateAll().then((valid) => {
        if (valid) {
          console.log("Login");
          this.isLoading = false;
          this.$axios
            .post(
              "https://hamlet.payfill.co/api/contact-info",
              this.contactInfo
            )
            .then((res) => {
              console.log(res.data);
              this.$message({
                message: "You've added your employee's contact info!",
                type: "success",
              });
              this.isLoading = true;
              this.$router.push(`/jobdetails/${this.$route.params.name}`);
            })
            .catch((e) => {
              this.isLoading = true;
            });
        } else {
          this.isLoading = true;
        }
      });
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Overpass', sans-serif;
}
.one2 {
  width: 50%;
  border-radius: 5px;
  background: #ffffff;
  margin-top: 5rem;
  height: 100vh;
  margin-left: 25%;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  margin-bottom: 20px;
}
.grid p {
  color: #081d29;
}
.grid input {
  width: 100%;
  border: 0.5px solid #081d29 !important;
  height: 30px;
  padding: 5px;
  border-radius: 5px;
}
.one3 {
  padding-left: 70px;
  padding-right: 70px;
  padding-top: 50px;
  padding-bottom: 20px;
}
hr {
  margin-bottom: 30px;
}
.one3 h2 {
  margin-bottom: 30px;
  color: #0065fc;
}
.one4 {
  text-align: right;
  margin-bottom: 30px;
}
.btn1 {
  color: #0065fc;
  padding: 8px 65px;
  background: #ffffff;
  border: 1px solid #0065fc;
  border-radius: 5px;
}
.btn2 {
  color: #ffffff;
  background: #0065fc;
  border-radius: 5px;
  padding: 8px 65px;
  border: none;
  margin-left: 20px;
}
.one5 {
   /* background-color: rgb(192, 192, 192, 0.2) !important; */
  background-color: #E6ECF2 !important;
  margin-top: 3.5rem;
  height: 130vh;
}

@media (max-width: 567px) {
  .one2 {
    width: 100%;
    margin-left: 0px;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 40px;
  }
  .one3 {
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 50px;
    padding-bottom: 50px;
  }
  .one4 {
    text-align: center;
  }
  .one4 button {
    width: 100%;
  }
  .btn2 {
    margin-left: 0px;
  }
  .btn1 {
    margin-bottom: 30px;
  }
}

@media (min-width: 568px) and (max-width: 768px) {
  .one2 {
    width: 75%;
  }
  .one3 {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .grid {
    grid-gap: 2rem;
  }
  .one4 {
    text-align: center;
  }
}
</style>
