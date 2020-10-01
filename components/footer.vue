<template>
  <div>
    <section>
      <div class="footer-bg" style="background: #182c51">
        <div class="container pt-5 pb-5 footer-map-1">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-5 col-lg-5 col-sm-3">
              <div class="footer-logo">Hamlet</div>
              <div class="logo-text mb-4">
                Hamlet is a Human Resource Management platform created for easy
                employee management.
              </div>
            </div>
            <div class="col-12 col-md-4 col-lg-4 col-sm-6">
              <div class="row">
                <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                  <div class="head-ul">Services</div>
                  <div class="tex-center">
                    <div class="head-line"></div>
                  </div>
                  <p>About Us</p>
                  <p>FAQs</p>
                </div>
                <div class="col-6 col-sm-6 col-md-6 col-lg-6">
                  <div class="head-ul">Legal</div>
                  <div class="tex-center">
                    <div class="head-line"></div>
                  </div>
                  <p>Terms and Condition</p>
                  <p>Privacy Policy</p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-3 col-lg-3 col-sm-6">
              <div class="head-ul">Connect with us</div>
              <div class="tex-center">
                <div class="head-line"></div>
              </div>
              <p>support@hamlet.ng</p>
              <p>+234 81 0239 8011</p>
              <p class="d-flex">
                <span>
                  <img src="/img/fb.png" alt srcset />
                </span>
                <span class="ml-3">
                  <img src="/img/twitter.png" alt srcset />
                </span>
              </p>
            </div>
          </div>
        </div>
        <div style="background: #0d1d3b">
          <div class="container pt-3 pb-3">
            <div class="footer-last">
              Copyright © 2020 Hamlet. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
* {
  font-family: "Overpass", sans-serif;
}
.footer-logo {
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  /* line-height: 22px; */
  letter-spacing: 0.03em;
  color: #ffffff;
}
.logo-text {
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  width: 90%;
  letter-spacing: 0.03em;
  color: #ffffff;
  margin-top: 0.7rem;
}
.head-ul {
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  /* text-align: center; */
  letter-spacing: 0.01em;
  color: #ffffff;
}
.head-line {
  border: 3px solid #27eac8;
  width: 25%;
  /* text-align: center !important; */
}
p {
  font-style: normal;
  font-weight: normal;
  /* font-size: 16px; */
  /* line-height: 22px; */
  /* text-align: center; */
  letter-spacing: 0.03em;
  color: #ffffff;
  margin-top: 1rem;
}
.footer-last {
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 29px;
  color: #ffffff;
}
.footer-map-1 {
  background-image: url("/img/map-new.png");
  background-repeat: no-repeat;
  background-position: right;
}
.circle-msg {
  color: red !important;
  display: flex;
  position: fixed;
  justify-content: flex-end;
}
p {
  font-size: 0.9rem;
}
@media only screen and (max-width: 578px) {
  .logo-text {
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    width: 100%;
    letter-spacing: 0;
    text-align: justify;
    color: #ffffff;
    margin-top: 0.7rem;
  }
}
</style>
