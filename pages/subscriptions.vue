<template>
    <div class="sub1">
        <div class="sub2">
            <h2>Select a plan that best suits you</h2>
        </div>
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-4 sub3" >                                                                   
                        <div class="card shadow rounded">
                            <div class="card-body">
                                <p style="color: #01445F;margin-top:-15px"><span style="font-size:40px;font-weight:500">$0</span><span>/month</span></p>
                                <h5 style="color: #01445F">Free</h5>
                                <div class="sub7">
                                    <p>Our goverment backed plan designed Lorem ipsum dolor sit amet. to keep your business legaly and secure</p>
                                   <hr>
                                   <p>Free forever <font-awesome-icon :icon="['fas', 'check']"/></p> 
                                   <p>10 free signals everyday <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Access to free ebooks <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Account Management <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   
                                </div>
                                
                                
                            </div>
                            
                        </div>
                        <nuxt-link class="link" to="dashboard"><div class="card-footer sub6"><p>Select Package</p></div></nuxt-link>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 sub3" >
                        <div class="card shadow rounded">
                            <div class="card-body">
                                <p style="color: #01445F;margin-top:-15px"><span style="font-size:40px;font-weight:500">$1500</span><span>/month</span></p>
                                <h5 style="color: silver">Silver</h5>
                                <div class="sub7">
                                    <p>Unlimited analytics, plans, demographic insights. All you need to grow-up your business</p>
                                   <hr>
                                   <p>Free forever <font-awesome-icon :icon="['fas', 'check']"/></p> 
                                   <p>10 free signals everyday <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Access to free ebooks <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Account Management <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   
                                </div>
                                
                                
                            </div>
                            
                        </div><nuxt-link class="link" to="dashboard"><div class="card-footer sub5"><p>Select Package</p></div></nuxt-link>
                    </div>
                    <div class="col-sm-12 col-md-6 col-lg-4 sub3" >
                        <div class="card shadow rounded">
                            <div class="card-body">
                                <p style="color: #01445F;margin-top:-15px"><span style="font-size:40px;font-weight:500">$1500</span><span>/month</span></p>
                                <h5 style="color: #DE911D">Gold</h5>
                                <div class="sub7">
                                    <p>Unlock powerfull time-saving tools for creating email delivery and collecting marketing data</p>
                                   <hr>
                                   <p>Free forever <font-awesome-icon :icon="['fas', 'check']"/></p> 
                                   <p>10 free signals everyday <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Access to free ebooks <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   <p>Account Management <font-awesome-icon :icon="['fas', 'check']"/></p>
                                   
                                </div>
                                
                                
                            </div>
                            
                        </div><nuxt-link class="link" to="dashboard"><div class="card-footer sub4"><p>Select Package</p></div></nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    *{
        box-sizing: border-box;
        
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
    .sub6 p{
        text-transform: capitalize;
        color: white;
        font-weight: 500;
    }
    .sub7{
        color: black;
        font-size: 15px;
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