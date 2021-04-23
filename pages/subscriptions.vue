<template>
    <div class="sub1">
        <div class="sub2">
            <h2>Please select a plan</h2>
        </div>
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 sub3" > 
                            <div class="card shadow rounded">
                            <div class="card-body" >
                                <p style="color: #01445F;margin-top:-15px"><span style="font-size:40px;font-weight:500">${{free.price}}</span><span>/month</span></p>
                                <h5 style="color: #01445F">{{free.name}}</h5>
                                <div class="sub7">
                                   <p>{{free.description}}</p>
                                   <hr>
                                   <p>Free forever <font-awesome-icon :icon="['fas', 'check']"/></p> 
                                   <p>10 free signals everyday <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Access to free ebooks <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Account Management <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   
                                </div>
                                
                                
                            </div>
                            
                        </div>
                        <nuxt-link to="/dashboard"><div class="card-footer sub6"><button type="button" class="btn but">Select Package</button></div></nuxt-link>
                                                                                     
                        
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 sub3" >
                            <div class="card shadow rounded">
                            <div class="card-body" >
                                <p style="color: #01445F;margin-top:-15px"><span style="font-size:40px;font-weight:500">${{silver.price}}</span><span>/month</span></p>
                                <h5 style="color: #01445F">{{silver.name}}</h5>
                                <div class="sub7">
                                   <p>{{silver.description}}</p>
                                   <hr>
                                   <p>Free forever <font-awesome-icon :icon="['fas', 'check']"/></p> 
                                   <p>10 free signals everyday <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Access to free ebooks <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Account Management <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   
                                </div>
                                
                                
                            </div>
                            
                        </div>
                        
                       <div class="card-footer sub6"><button type="button" class="btn  but" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Select Package</button></div>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <form action="" @submit.prevent="subscribeSilver">
                                    <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Please Select Duration of Subscription</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><font-awesome-icon class="icon" :icon="['fas', 'times']" /></button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-4">Duration</div>
                                        <div class="col-md-8 "><div class="input-group mb-3">
                                            <select class="form-select" id="inputGroupSelect01" v-model="silverduration">
                                                <option selected >Choose...</option>
                                                <option value="1">One month</option>
                                                <option value="6">Six months</option>
                                                <option value="12">One year</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn but">Subscribe</button>
                            </div>
                                </form>
                            
                            </div>
                        </div>
                        </div> 
                                                                                      
                        
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 sub3" >   
                            <div class="card shadow rounded">
                            <div class="card-body" >
                                
                                <p style="color: #01445F;margin-top:-15px"><span style="font-size:40px;font-weight:500">${{gold.price}}</span><span>/month</span></p>
                                <h5 style="color: #01445F">{{gold.name}}</h5>
                                <div class="sub7">
                                   <p>{{gold.description}}</p>
                                   <hr>
                                   <p>Free forever <font-awesome-icon :icon="['fas', 'check']"/></p> 
                                   <p>10 free signals everyday <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Access to free ebooks <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Account Management <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   
                                </div>
                                
                                
                            </div>
                            
                        </div>
                        <div class="card-footer sub6"><button type="button" class="btn  but" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Select Package</button></div>
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <form action="" @submit="subscribeGold">
                                    <div class="modal-header">
                                <h5 class="modal-title" id="staticBackdropLabel">Please Select Duration of Subscription</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"><font-awesome-icon class="icon" :icon="['fas', 'times']" /></button>
                            </div>
                            <div class="modal-body">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-md-4">Duration</div>
                                        <div class="col-md-8 "><div class="input-group mb-3">
  <select class="form-select" id="inputGroupSelect01" v-model="goldduration">
    <option selected >Choose...</option>
    <option value="1">One month</option>
    <option value="6">Six months</option>
    <option value="12">One year</option>
  </select>
</div></div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn but">Subscribe</button>
                            </div>
                                </form>
                            
                            </div>
                        </div>
                        </div>
                                                                                  
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    auth: false,
    // layout: "blog",
    components: {
        
    },
    data() {
        return {
            plans:[],
            free: {},
            silver:{},
            gold:{},
            goldduration: '',
            silverduration: '',
            silverid: '',
            goldid: '',
            profile: {},
            user_id: '',
            goldprice: '',
            silverprice: '',
            goldamount: '',
            silveramount:'',
            user: ''

        };
    },
    mounted() {
        this.getPlans();
        this.getProfile();
        this.user = this.$auth.$storage.getLocalStorage("jwt");
        console.log(this.user)
    },
    computed: {
        
    },
    methods: {
        getPlans() {
            this.$axios
                .get("https://hamlet.payfill.co/api/plans")
                .then((res) => {
                    console.log(res.data.plans);
                    this.plans = res.data.plans;
                    this.gold = this.plans[2];
                    this.goldid = this.gold.id;
                    this.silver = this.plans[1];
                    this.silverid = this.silver.id
                    this.free = this.plans[0];
                    this.goldprice = this.gold.price;
                    this.silverprice = this.silver.price;
                    this.goldamount = this.goldduration * this.goldprice;
                    this.silveramount = this.silverduration * this.silverprice;
                    console.log(this.goldamount)
                    console.log(this.silveramount)
                    console.log(this.silverid)
                });
        },
        subscribe(){
            this.$axios
                .post("https://api.fxhup.com/transaction/subscriptions")
                .then((res) => {
                    console.log(res)
                })
        },
        subscribeGold(){
            const formData = new FormData();
            formData.append("duration", this.goldduration);
            formData.append("plan_id", this.goldid);
            formData.append("user_id", this.user_id);
            formData.append("amount", this.goldamount);
            formData.append("_method", "POST");
            this.$axios
        .post("https://hamlet.payfill.co/api/subscribe", formData,
        {
                      headers: {
                        Authorization: `Bearer ${this.user}`,
                        "Content-Type": "multipart/form-data",
                      },
                    })
        .then((res) => {
            console.log(res.data.link)
            window.location = res.data.link
          this.goldduration = '';
          console.log(res.data);
        }).catch((error) => {
          console.log(error);
        });
        

        },
        subscribeSilver(){
            const formData = new FormData();
            formData.append("duration", this.silverduration);
            formData.append("plan_id", this.silverid);
            formData.append("user_id", this.user_id);
            formData.append("amount", this.silveramount);
            formData.append("_method", "POST");
            this.$axios
        .post(`https://hamlet.payfill.co/api/subscribe`, formData,
        {
                      headers: {
                        Authorization: `Bearer ${this.user}`,
                        "Content-Type": "multipart/form-data",
                         'Access-Control-Allow-Origin' : 'http://localhost:3000',
      'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Origin': 'http://localhost:3000'
                      },
                    })
        .then((res) => {
            console.log(res)
        
          this.silverduration = '';
          console.log(res);
        }).catch((error) => {
          console.log(error);
        });
        

        },
        getProfile() {
      this.$axios
        .get("https://hamlet.payfill.co/api/auth/admin")
        .then((res) => {

          this.profile = res.data.user.profile;
          this.user_id = res.data.user.profile.user_id;
          console.log(this.user_id)
          //   for (let key in data) {
          //     const details = data[key];
          //     details.company.id = key;
          //     this.company.unshift(details);
          //   }
          //   this.company = res.data.company;

        });
    },
        
    },
    
};
</script>
<style scoped>
    *{
        box-sizing: border-box;
        
    }
    .card-body{
        height: 450px;

    }
    .sub1{
        background: #F4FAFD;
        height: 110vh;
        text-align: center;
    }
    .sub2{
        padding-top: 2rem;
        text-align: center;
    }

    select{
        width:100%;
    }
    .sub2 h2{
        font-size: 40px;
        color: #01445F;
        margin-bottom: 2rem;
    }
    .sub3{
        text-align: center;
    }
    .link{
        text-decoration: none;
    }
    p img{
        width:1rem;
        margin-right: 1rem;
    }
    .sub3 h3{
        font-size: 25px;
        color: #01445F;
    }
    .sub4{
        background-color: #01445F;
        color: white;   
        border-radius: 0px 0px 16px 16px;
        text-align: center;
    }
    .sub4 p{
        text-transform: capitalize;
        font-weight: 500;
    }
    .sub5{
        background:#01445F;
        color: white;
        border-radius: 0px 0px 16px 16px;
        text-align: center;
    }
    .sub5 p{
        text-transform: capitalize;
        font-weight: 500;
    }
    .sub6{
        background: #01445F;
        border-radius: 0px 0px 16px 16px;   
        text-align: center;
    }
    .but{
        background: #01445F;
        border: none;
        outline: none;
        color: white;
    }
    .sub6 p{
        text-transform: capitalize;
        color: white;
        font-weight: 500;
    }
    .sub7{
        color: black;
        font-size: 15px;
    }
    .icon{
        color:#01445F ;
    }


    @media(max-width:576px){
        .sub1{
        background: #F4FAFD;
        height: 300vh;
    }
    .sub2{
        padding-top: 6rem;
        text-align: center;
    }
    .sub2 h2{
        font-size: 30px;
        color: #01445F;
        margin-bottom: 1.5rem;
    }
    .sub3{
        margin-bottom: 2rem;
    }
    }



    @media(min-width:568px) and (max-width:768px){
        .card-footer{
            margin-bottom: 1.5rem;
        }
        .sub1{
        background: #F4FAFD;
        height: 200vh;
        text-align: center;
    }
    }
</style>