<template>
<div style="margin-top:2% !important; ">

<b-container>
<div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-12 " style="margin-bottom:8%;"> 
    
<div class="column col-lg-3 col-md-3 col-sm-3 col-xs-3">
          <b-card class="mb-2 shadow" style="max-width: 22rem; margin-right:5px !important;" >
      <div class="sidebar" style="border-bottom:2px #94aab7 solid;">
     <span class="sidebarTitle " style="margin-left:18px !important;">job type</span>
     <a  href="#">> full time</a>
     <a href="#">> part time</a>
     </div>

     <div class="sidebar" style="margin-top:5%;">
     <span class="sidebarTitle" style="margin-left:18px !important;">site</span>
     <a  href="#">> all sites</a>
     <a href="#">> job sites only</a>
     </div>

        </b-card>
        </div>
     

    
 <div class="column col-lg-9 col-md-9 col-sm-9 col-xs-9 ">
      <b-row class="srchJob"><span>Choose Suitable Job </span></b-row>
      

      <b-row class="col-lg-12 col-md-12 col-sm-12 col-xs-12 "  style="margin-top:2% !important; border-bottom:2px #94aab7 solid;">
          <b-col class="col-lg-6 col-md-6 col-sm-3 col-xs-2">
            <span class="jobTitle">Software engineer</span>
          </b-col>

          <b-col class="col-lg-3 col-md-3 col-sm-2 col-xs-1">
            <span class="joblocation">New York</span>
          </b-col>


          <b-col class="col-lg-3 col-md-3 col-sm-1 col-xs-1">
              <router-link :to="{name:'applyjob'}" ><b-button class="applybtn" >Apply</b-button></router-link>
          </b-col>

        </b-row>

      <b-row class="col-lg-12 col-md-12 col-sm-12 col-xs-12 "  style="margin-top:2% !important; border-bottom:2px #94aab7 solid;">
          <b-col class="col-lg-6 col-md-6 col-sm-3 col-xs-3">
            <span class="jobTitle">Backend Engineer</span>
          </b-col>

          <b-col class="col-lg-3 col-md-3 col-sm-2 col-xs-2">
            <span class="joblocation">New York</span>
          </b-col>


          <b-col class="col-lg-3 col-md-3 col-sm-1 col-xs-1">
              <router-link :to="{name:'applyjob'}" ><b-button class="applybtn" >Apply</b-button></router-link>
          </b-col>

        </b-row>


        <b-row class="col-lg-12 col-md-12 col-sm-12 col-xs-12 "  style="margin-top:2% !important; border-bottom:2px #94aab7 solid;">
          <b-col class="col-lg-6 col-md-6 col-sm-3 col-xs-3">
            <span class="jobTitle">Android Developer</span>
          </b-col>

          <b-col class="col-lg-3 col-md-3 col-sm-2 col-xs-2">
            <span class="joblocation">New York</span>
          </b-col>


          <b-col class="col-lg-3 col-md-3 col-sm-1 col-xs-1">
              <router-link :to="{name:'applyjob'}" ><b-button class="applybtn" >Apply</b-button></router-link>
          </b-col>

        </b-row>

       <b-row class="col-lg-12 col-md-12 col-sm-12 col-xs-12 "  style="margin-top:2% !important; ">
          <b-col class="col-lg-6 col-md-6 col-sm-6 col-xs-6"  style="margin-bottom:2% !important;">
            <router-link :to="{name:'alljobs'}" ><a class="jobTitle">MORE JOBS</a></router-link>
        
          </b-col>

        </b-row>
          

</div>
</div>
<footer class=" font-small ">

    <!-- Footer Links -->
    <div class="container-fluid text-center text-md-left">

      <!-- Grid row -->
      <div class="row">

        <!-- Grid column -->
        
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none pb-3">

        <!-- Grid column -->
        <div class="col-md-3 mb-md-0 mb-3">

            <!-- Links -->
            <h5 class="text-uppercase titlefooter" style="margin-top:3% !important; ">Location</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">San Francisco</a>
              </li>
              <li>
                <a href="#!">New York</a>
              </li>
              <li>
                <a href="#!">Toronto</a>
              </li>
              <li>
                <a href="#!">chicago</a>
              </li>
              <li>
                <a href="#!">other</a>
              </li>
            </ul>

          </div>
          <!-- Grid column -->
            
          <!-- Grid column -->
          <div class="language col-md-3 mb-md-0 mb-3" >

            <!-- Links -->
            <h5 class="text-uppercase titlefooter" style="margin-top:3% !important;"> Languages</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!">javascript</a>
              </li>
              <li>
                <a href="#!">Python</a>
              </li>
              <li>
                <a href="#!">Php</a>
              </li>
              <li>
                <a href="#!">Rails</a>
              </li>
              <li>
                <a href="#!">other</a>
              </li>
            </ul>

          </div>
          
          <!-- Grid column -->
          <div class="contact col-md-6 mt-md-0 mt-3">

          <!-- Content -->
          <h5 class="text-uppercase titlefooter" style="margin-top:3% !important;">Contact Us</h5>
          
                <a href="#!"><i class=" icns fas fa-envelope"></i>   </a>
             
                <a href="#!"><i class=" icns fab fa-facebook-square"></i>  </a>
             
                <a href="#!"><i class=" icns fab fa-twitter-square"></i>  </a>
             
                <a href="#!"><i class=" icns fab fa-linkedin"></i>  </a>
         
        </div>
      </div>
      <!-- Grid row -->
      
    </div>
    <!-- Footer Links -->

    
  </footer>
</b-container>
</div>
</template>


<style>
.srchJob {
    background-color:#376580 !important;
    border:1px transparent solid !important;
     border-radius: 2% !important;
     font-size:100% !important;
     color:#fff !important;
     padding:1%;
      font-weight:bold !important;  
}
.jobTitle {
    color:#042A40 !important;
    font-weight:bold;
    font-size:80% !important;
}

.jobTitle:hover {
    color:#174E8C !important;
}
.joblocation {
    color: #174E8C !important;
    font-size:80% !important;
}

.applybtn {
    background-color:#94aab7 !important;
    color:white;
    margin-bottom:5% !important;
    font-size:80% !important;
    padding: 5px 15px !important;
    border: none  !important;

}

.applybtn:hover {
 color:white !important;
background-color:#376580 !important;


}
.applybtn:focus {
 color:white!important;
background-color:#376580 !important;


}

.sidebar {
  margin: 0;
  padding: 0;
  width: 90%;
  height: 100%;
  overflow: auto;
}

.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  font-size:80% !important;

}
 
.sidebar a.active {
 color: #042A40 !important;;
}



.sidebar a:hover {
  color:  #042A40 !important;;
}

.sidebarTitle{
 font-weight:bold;
  color:#042A40 !important;
}

.titlefooter {
   color:#042A40 !important;
   font-weight:bold;
}
.icns {
  color: #94aab7 !important; 
}

footer a{
  color: #94aab7 !important; 
}
  @media (max-width: 993px) {
   .jobTitle, .joblocation , .applybtn {
      font-size:80% !important;
}

 }

@media (max-width: 768px) {
  .jobTitle ,.joblocation , .applybtn {
      font-size:80% !important;
}

}
@media (max-width : 576px) {
      .jobTitle, .joblocation, .applybtn  {
      font-size:70% !important;
}

.srchJob {
    margin:1px !important;

}
.applybtn {
   padding: 2px 10px !important;
}
}

</style>