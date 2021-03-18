<template>
    <div class="sub1">
        <div class="sub2">
            <h2>Select a plan that best suits you</h2>
        </div>
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-12 col-lg-4 sub3" >                                                                   
                        <div class="card shadow rounded">
                            <div class="card-body">
                                <p style="color: #01445F;margin-top:-15px"><span style="font-size:40px;font-weight:500">$0</span><span>/month</span></p>
                                <h5 style="color: #0392CE">Free</h5>
                                <div class="sub7">
                                    <p>Our goverment backed plan designed Lorem ipsum dolor sit amet. to keep your business legaly and secure</p>
                                   <hr>
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset=""> Free forever</p> 
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">10 free signals everyday</p>
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">Access to free ebooks</p>
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">Account Management</p>
                                   
                                </div>
                                
                                
                            </div>
                            
                        </div>
                        <nuxt-link to="dashboard"><div class="card-footer sub6"><p>Select Package</p></div></nuxt-link>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-4 sub3" >
                        <div class="card shadow rounded">
                            <div class="card-body">
                                <p style="color: #01445F;margin-top:-15px"><span style="font-size:40px;font-weight:500">$1500</span><span>/month</span></p>
                                <h5 style="color: silver">Silver</h5>
                                <div class="sub7">
                                    <p>Unlimited analytics, plans, demographic insights. All you need to grow-up your business</p>
                                   <hr>
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">Live trading signals</p> 
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">News and market update</p>
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">Signal and performance report</p>
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">Lorem ipsum dolor sit</p>
                                   
                                </div>
                                
                                
                            </div>
                            
                        </div><div class="card-footer sub5"><p>Select Package</p></div>
                    </div>
                    <div class="col-sm-12 col-md-12 col-lg-4 sub3" >
                        <div class="card shadow rounded">
                            <div class="card-body">
                                <p style="color: #01445F;margin-top:-15px"><span style="font-size:40px;font-weight:500">$1500</span><span>/month</span></p>
                                <h5 style="color: #DE911D">Gold</h5>
                                <div class="sub7">
                                    <p>Unlock powerfull time-saving tools for creating email delivery and collecting marketing data</p>
                                   <hr>
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">Live trading signals</p> 
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">News and market update</p>
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">Signal and performance report</p>
                                   <p><img src="/img/brokers/vec.png"  alt="" srcset="">Lorem ipsum dolor sit</p>
                                   
                                </div>
                                
                                
                            </div>
                            
                        </div><div class="card-footer sub4"><p>Select Package</p></div>
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
        margin-bottom: 1.5rem;
    }
    .sub3{
        text-align: center;
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
        background-color: #CB6E17;
        color: white;   
        border-radius: 0px 0px 16px 16px;
        text-align: center;
    }
    .sub4 p{
        text-transform: capitalize;
        font-weight: 500;
    }
    .sub5{
        background:silver;
        color: white;
        border-radius: 0px 0px 16px 16px;
        text-align: center;
    }
    .sub5 p{
        text-transform: capitalize;
        font-weight: 500;
    }
    .sub6{
        background: #0392CE;
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
</style>