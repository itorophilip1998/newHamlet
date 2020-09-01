<template>
    <div>
        <div class="stepwizard mt-5">
                            <div class="stepwizard-row" ref="edu">
                                <div class="stepwizard-step col-lg-3">
                                <a href type="button" class="btn btn-success btn-circle">1</a>
                                <p>
                                    <small>Set up an account</small>
                                </p>
                                </div>
                                <div class="stepwizard-step col-lg-3">
                                <a href type="button" class="btn btn-default btn-circle header1" disabled="disabled">2</a>
                                <p>
                                    <small>Manager's Information</small>
                                </p>
                                </div>
                                <div class="stepwizard-step col-lg-3">
                                <a href type="button" class="btn btn-default btn-circle header2" disabled="disabled">3</a>
                                <p>
                                    <small>Company's information</small>
                                </p>
                                </div>
                                <div class="stepwizard-step col-lg-3" id="header3">
                                <a href type="button" class="btn btn-default btn-circle header3" disabled="disabled">4</a>
                                <p>
                                    <small>Company's information cont.</small>
                                </p>
                                </div>
                            </div>
                            </div>
    </div>
</template>

<style scoped>
.stepwizard {
  width: 100%;
  position: relative;
}
.stepwizard-row {
  display: flex;
}
marquee {
  width: 30%;
}
p {
  font-weight: 600;
  font-style: italic;
}
.stepwizard-step {
  text-align: center;
}
.btn-circle {
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 1rem !important;
  line-height: 2rem !important;
  border-radius: 50px !important;
}
.stepwizard-step p {
  margin-top: 0.3rem;
  color: #666;
}
.stepwizard-row:before {
  top: 30px;
  bottom: 0;
  position: absolute;
  content: " ";
  width: 100%;
  height: 1px;
  background-color: #ccc;
  z-index: 0;
}
.stepwizard .btn.disabled,
.stepwizard .btn[disabled] {
  opacity: 1 !important;
  color: white;
  background-color: #bbb;
}
.active {
  display: block !important;
}
.red{
    background-color: red;
}
#cardDisplay {
  display: none;
}
</style>