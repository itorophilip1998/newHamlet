<template>
    <div>
        <app-navbar/>
        <div class="row one5">
            <app-sidebar/>
            
            <div  class="one2 ">
                <div class="one6">
                <div class="one7">
                    <h2>Company Name</h2>
                    <p>Total Headcount |  Date Established</p>
                </div>
                
            </div>
                 <div >
                <div class="one3">
                <h3>Tax Information</h3>
                <hr>
                <div class="grid">
                    <p> Date Established</p>
                    <p></p>
                </div>
                <div class="grid">
                    <p> Office Address</p>
                    <p></p>
                </div>
                <div class="grid">
                    <p>Business Description</p>
                    <p></p>
                </div>
                <div class="grid">
                    <p>Business Entity Type</p>
                    <p></p>
                </div>
                <div class="grid">
                    <p>Company Officers</p>
                   <p></p>
                </div>
                <div class="grid">
                    <p>Accountant's Email</p>
                    <p></p>
                </div>
               
                
                <hr>             

            </div>
                </div>
           
        </div>
        </div>
        
        
    </div>
    

</template>

<script>
import sidebar from '~/components/sidebar3.vue';
import navbar from '~/components/navbar3.vue';
export default {
    components:{
        'app-sidebar':sidebar,
        'app-navbar':navbar,
    }
    
}
</script>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
    .one2{
        width: 50%;
        border-radius: 5px;
        background: #FFFFFF;
        margin-top: 5rem;
        height:100vh;
        margin-left: 25%;
    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 2fr;
        margin-bottom: 20px;
    }
    .grid p{
        color: #081D29;
    }
    .grid input{
        width:100%;
        border: 0.5px solid #081D29 !important;
        height: 30px;
        padding: 5px;
        border-radius: 5px;
    }
    .one3{
        padding-left: 70px;
        padding-right: 70px;
        padding-top: 50px;
        padding-bottom: 20px;

    }
    hr{
        margin-bottom: 30px;
    }
    .one3 h3{
        margin-bottom: 10px;
        color: #0065FC;
    }
    .one4{
        text-align: right;
        margin-bottom: 30px;
    }
    .btn1{
        color: #0065FC;
        padding: 8px 65px;
        background: #FFFFFF;
        border: 1px solid #0065FC;
        border-radius: 5px;
    }
    .btn2{
        color: #FFFFFF;
        background: #0065FC;
        border-radius: 5px;
        padding: 8px 65px;
        border: none;
        margin-left: 20px;
    }
    .one5{
        background: #F9F9F9;
        margin-top: 3.5rem;
        height: 130vh;
    }
    .one6{
        padding-left: 4rem;
        padding-right: 4rem;
        padding-top: 2rem;
        
    }
    .one8{
        text-align: right;
    }
    .one8 button{
        padding:5px 10px;
    }
    .one7 h2{
        margin-bottom: 10px;
        color: #0065FC;
    }
    

    @media (max-width: 567px) {
        .one2{
        width: 100%;
        margin-left: 0px;
       
    }
        .grid{
        display: grid;
        grid-template-columns: 1fr;
        margin-bottom: 40px;
    }
        .one3{
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 50px;
        padding-bottom: 50px;

    }
        .one4{
            text-align: center;
    }
        .one4 button{
            width: 100%;
    }
        .btn2{
        
        margin-left: 0px;
    }
        .btn1{
        margin-bottom: 30px;
    }
    .one6{
        padding-left: 30px;
        padding-right: 30px;
    }
        
    }

    @media(min-width: 568px) and (max-width:768px) {
        .one2{
        width: 75%;
        
        margin-top: 2rem;
        
    }
        .one3{
        padding-left: 30px;
        padding-right: 30px;
    }
    .one6{
        padding-left: 30px;
        padding-right: 30px;
    }
    }


    @media(min-width: 769px) and (max-width:1200px) {
         .grid{
             grid-gap: 2rem;
         }
         .one4{
        text-align: center;
    }
        .one4 button{
            width: 100%;
    }
    .btn1{
        margin-bottom: 30px;
    }
    .btn2{
        margin-left: 0px;
    }
     }
    
</style>