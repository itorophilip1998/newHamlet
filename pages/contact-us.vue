<template>
  <div>
    <div>
      <app-navbar />
    </div>
    <!-- hero start -->
    <section>
      <div class="page-down">
        <div class="container text-center">
          <div class="question">GOT A QUESTION?</div>
          <div class="hamlet">Contact Hamlet</div>
          <p class="text-hamlet">
            <span class="app-1"
              >We’re here to help and answer any question you might have.</span
            >
            We look forward to hearing from you 🙂
          </p>
        </div>
      </div>
    </section>
    <!-- heri end -->

    <!-- form start -->
    <section>
      <div class="bg-color">
        <div class="container">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div class="card">
                <div class="card-body box-style">
                  <form @submit.prevent="sendMessage">
                    <div class="row grid-mobile">
                      <div class="col">
                        <label for>
                          First Name
                          <span style="color: #ff0000">*</span>
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          class="form-control h-box-1"
                          v-model="contact.firstName"
                          v-validate="'required'"
                          :class="{
                            'is-invalid': submitted && errors.has('first-name'),
                          }"
                        />
                        <span></span>
                        <small
                          v-if="submitted && errors.has('first-name')"
                          class="invalid-feedback"
                          >{{ errors.first("first-name") }}</small
                        >
                      </div>
                      <div class="col form-d">
                        <label for>
                          Last Name
                          <span style="color: #ff0000">*</span>
                        </label>
                        <input
                          type="text"
                          name="last-name"
                          class="form-control h-box-1"
                          v-model="contact.lastName"
                          v-validate="'required'"
                          :class="{
                            'is-invalid': submitted && errors.has('last-name'),
                          }"
                        />
                        <small
                          v-if="submitted && errors.has('last-name')"
                          class="invalid-feedback"
                          >{{ errors.first("last-name") }}</small
                        >
                      </div>
                    </div>
                    <div class="mt-3">
                      <label for>
                        Email
                        <span style="color: #ff0000">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        class="form-control h-box-1"
                        v-model="contact.email"
                        v-validate="'required|email'"
                        :class="{
                          'is-invalid': submitted && errors.has('email'),
                        }"
                      />
                      <small
                        v-if="submitted && errors.has('email')"
                        class="invalid-feedback"
                        >{{ errors.first("email") }}</small
                      >
                    </div>
                    <div class="mt-3">
                      <label for>
                        Message
                        <span style="color: #ff0000">*</span>
                      </label>
                      <br />
                      <input
                        type="text"
                        name="message"
                        class="form-control h-box"
                        v-model="contact.message"
                        v-validate="'required'"
                        :class="{
                          'is-invalid': submitted && errors.has('message'),
                        }"
                      />
                      <small
                        v-if="submitted && errors.has('message')"
                        class="invalid-feedback"
                        >{{ errors.first("message") }}</small
                      >
                    </div>
                    <button type="submit" class="btn btn-primary mt-5 btn-edit">
                      <span v-if="loader"
                        >SEND MESSAGE
                        <font-awesome-icon
                          class="ml-1"
                          :icon="['fa', 'paper-plane']"
                      /></span>
                      <span v-else>
                        <app-loader />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6">
              <div class="help">How Can We Help?</div>
              <p class="help-text">
                Please select a topic below related to your inquiry. If you
                don’t find what you need, fill out our contact form.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- form end -->

    <!-- still doubting -->
    <section>
      <div class="bg-doubt">
        <div class="container text-center">
          <div class="little-text">STILL IN DOUBT</div>
          <div class="little-text-1">Take A Look Inside Hamlet</div>
          <div class="text-center mt-5">
            <nuxt-link to="/signin">
              <div class="btn btn-danger">Log In</div>
            </nuxt-link>

            <nuxt-link to="/signup">
              <div class="btn btn-secondary">Get Started</div>
            </nuxt-link>
            <!-- <div class="d-flex">
              <div class>
                <div class="btn btn-danger">Log In</div>
              </div>
              <div class>
                <div class="btn btn-secondary">Get Started</div>
              </div>
            </div>-->
          </div>
        </div>
      </div>
    </section>
    <!-- still doubting end -->

    <!-- footer start -->
    <div class="footer-down">
      <app-footer />
    </div>

    <!-- footer end -->
  </div>
</template>

<script>
import Navbar from "@/components/navbar2.vue";
import Footer from "~/components/footer.vue";
import newLoader from "~/components/loader.vue";
export default {
  auth: false,
  components: {
    "app-navbar": Navbar,
    "app-footer": Footer,
    "app-loader": newLoader,
  },
  data() {
    return {
      submitted: false,
      // navigation: true,
      loader: true,
      contact: {
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    status() {
      if (!navigator.online) {
        this.loader = true;
        this.$message({
          message: "Please check internet connection!",
          type: "error",
        });
      }
    },
    sendMessage() {
      // this.status();
      this.submitted = true;
      this.$validator.validateAll().then(async (valid) => {
        if (valid) {
          this.loader = false;
          const formData = new FormData();
          formData.append("firstname", this.contact.firstName);
          formData.append("lastname", this.contact.lastName);
          formData.append("email", this.contact.email);
          formData.append("message", this.contact.message);
          this.$axios
            .post("https://hamlet.payfill.co/api/contact-us", formData)
            .then((res) => {
              this.loader = true;
              this.$message({
                message: "Thanks for contacting Us!",
                type: "success",
              });
              this.contact = {
                firstName: "",
                lastName: "",
                email: "",
                message: "",
              };
              this.submitted = false;
            })
            .catch((error) => {
              this.loader = true;
              // if (!error.response.status) {
              //   this.$message({
              //     message: "Please check internet connection!",
              //     type: "error",
              //   });
              // }
            });
        } else {
          this.loader = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.question {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 28px;
  letter-spacing: 0.15em;
  color: #002459;
  /* margin: 12rem; */
}
.page-down {
  margin: 12rem 0 12rem 0;
  text-align: center !important;
}
.hamlet {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 98px;
  color: #0065fc;
}
.text-hamlet {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 37px;
  /* text-align: center; */
  color: #002b6b;
}
.app-1::after {
  content: "\a";
  white-space: pre;
}
.bg-color {
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 100%);
  background: #f4f8ff;
  padding: 5rem 0 5rem 0;
  z-index: 99 !important;
}

.box-style {
  background: #ffffff !important;
  /* box-shadow: 17px 3px 26px rgba(239, 239, 239, 0.25),
    -17px -3px 26px -1px rgba(239, 239, 239, 0.6) !important; */
  border-radius: 10px 10px 0px 0px !important;
  padding: 3rem;
  /* position: relative !important;
  top: 0 !important;
  right: 0 !important;
  bottom: 0 !important;
  z-index: 1; */
}
.h-box {
  height: 10vh !important;
}
.h-box-1 {
  height: 7vh !important;
}
.btn-edit {
  font-size: 1rem !important;
  width: 100% !important;
  padding: 1rem !important;
}
.help {
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  margin-top: 4rem;
  /* line-height: 74px; */
  text-align: center;
  color: #0065fc;
}
.help-text {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  margin: 1rem 3.5rem;
  line-height: 29px;
  color: #000000;
}
.bg-doubt {
  background: url("/img/newround.png");
  background-size: cover;
  /* background-position: ; */
  padding: 5rem 0 5rem 0;
}
.little-text {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  /* line-height: 29px; */
  letter-spacing: 0.11em;
  color: rgba(113, 141, 157, 100%);
}
.little-text-1 {
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  margin-top: 1.5rem;
  line-height: 60px;
  /* text-align: center; */
  color: #ffffff;
}
.btn-danger {
  background-color: #0065fc !important;
  padding: 1rem 6rem !important;
  border: none !important;
}
.btn-secondary {
  background-color: #081d29 !important;
  padding: 1rem 5rem !important;
  border: 1px solid #ffffff !important;
  margin-left: 5rem !important;
}
.btn-danger:hover {
  background-color: #ffffff !important;
  color: #0065fc !important;
}
.btn-secondary:hover {
  background-color: #ffffff !important;
  color: #0065fc !important;
}
.footer-down {
  margin-top: 5rem;
}
@media only screen and (min-width: 300px) and (max-width: 350px) {
  .page-down {
    margin: 5rem 0 5rem 0;
    text-align: center !important;
  }
  .hamlet {
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    line-height: 80px;
    color: #0065fc;
  }
  .form-d {
    margin-top: 1rem;
  }
  .grid-mobile {
    display: grid !important;
  }
  .help {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    /* line-height: ; */
    margin-top: 1rem;
    text-align: center;
    color: #0065fc;
  }
  .help-text {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    margin: 1rem 0 0 0;
    text-align: center;
    line-height: 29px;
    color: #000000;
  }
  .little-text-1 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    margin-top: 1.5rem;
    /* line-height: 98px; */
    /* text-align: center; */
    color: #ffffff;
  }
  .btn-secondary {
    background-color: #081d29 !important;
    padding: 1rem 5rem !important;
    border: 1px solid #ffffff !important;
    margin-left: 0 !important;
    margin-top: 1rem !important;
  }
  .box-style {
    background: #ffffff !important;
    box-shadow: 17px 3px 26px rgba(239, 239, 239, 0.25),
      -17px -3px 26px -1px rgba(239, 239, 239, 0.6) !important;
    border-radius: 10px 10px 0px 0px !important;
    padding: 1rem;
  }
}
@media only screen and (min-width: 360px) and (max-width: 578px) {
  .page-down {
    margin: 5rem 0 5rem 0;
    text-align: center !important;
  }
  .hamlet {
    font-style: normal;
    font-weight: 800;
    font-size: 4rem;
    line-height: 80px;
    color: #0065fc;
  }
  .form-d {
    margin-top: 1rem;
  }
  .grid-mobile {
    display: grid !important;
  }
  .help {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    /* line-height: ; */
    margin-top: 1rem;
    text-align: center;
    color: #0065fc;
  }
  .help-text {
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    margin: 1rem 0 0 0;
    text-align: center;
    line-height: 29px;
    color: #000000;
  }
  .little-text-1 {
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    margin-top: 1.5rem;
    /* line-height: 98px; */
    /* text-align: center; */
    color: #ffffff;
  }
  .btn-secondary {
    background-color: #081d29 !important;
    padding: 1rem 5rem !important;
    border: 1px solid #ffffff !important;
    margin-left: 0 !important;
    margin-top: 1rem !important;
  }
  .box-style {
    background: #ffffff !important;
    box-shadow: 17px 3px 26px rgba(239, 239, 239, 0.25),
      -17px -3px 26px -1px rgba(239, 239, 239, 0.6) !important;
    border-radius: 10px 10px 0px 0px !important;
    padding: 1rem;
  }
}
</style>