<template><div style="background-color:#376580 !important; color:#fff !important;"> 
 <b-navbar toggleable="lg" >
    <b-navbar-brand href="#"><router-link :to="{name:'homepage'}" ><span class="navbrand">Jobs</span></router-link></b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto" style=" padding-right:100px !important;">
       
      
      <b-nav-item href="#" class="bordrlnk"><router-link :to="{name:'alljobs'}" ><span class="navlnk "> All Jobs  </span></router-link></b-nav-item>
      <b-nav-item href="#" class="bordrlnk" ><router-link :to="{name:'postjob'}" ><span class="navlnk " >  Post a Job  </span></router-link></b-nav-item>
      <b-nav-item href="#"><router-link :to="{name:'signup'}" ><span class="navlnk">Sign in</span></router-link></b-nav-item>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
  </template>




  <style>
  .navlnk{
      color:#fff !important;
     
  }
  .navlnk:hover{
      color:#174E8C !important;

  }

  .navbrand {
     color:#fff !important;
     font-size:200% !important;
     font-weight:bold !important;  
     padding-left:100px !important;
  }

.bordrlnk{
    border-right:2px #fff solid;
}
  @media (max-width: 993px) {
      .navbrand {
        padding-left:100px !important;      
      }
   .bordrlnk{
    border-right:2px #fff solid;
}
 }

@media (max-width: 768px) {
.navbrand {
        padding-left:50px !important; 
      
      }

.bordrlnk{
    border-right:none !important;
}
}
@media (max-width : 576px) {
    .navbrand {
        padding-left:10px !important; 
        font-size:150% !important; 
      }
      
.bordrlnk{
    border-right:none !important;
}
}
  </style>