<template>
    <div style="margin-top:3% !important;">
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
        <b-row class="col-lg-12 col-md-12 col-sm-12 col-xs-12 "  style="margin-top:2% !important; border-bottom:2px #94aab7 solid;">
          <b-col class="col-lg-6 col-md-6 col-sm-3 col-xs-3">
            <span class="jobTitle">Senior Software Engineer</span>
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
            <span class="jobTitle">Lead DevOps Engineer</span>
          </b-col>

          <b-col class="col-lg-3 col-md-3 col-sm-2 col-xs-2">
            <span class="joblocation">Toronto</span>
          </b-col>


          <b-col class="col-lg-3 col-md-3 col-sm-1 col-xs-1">
              <router-link :to="{name:'applyjob'}" ><b-button class="applybtn" >Apply</b-button></router-link>
          </b-col>

        </b-row>
        <b-row class="col-lg-12 col-md-12 col-sm-12 col-xs-12 "  style="margin-top:2% !important; border-bottom:2px #94aab7 solid;">
          <b-col class="col-lg-6 col-md-6 col-sm-3 col-xs-3">
            <span class="jobTitle">Cloud Infrastructure Engineer</span>
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
            <span class="jobTitle">Python Developer</span>
          </b-col>

          <b-col class="col-lg-3 col-md-3 col-sm-2 col-xs-2">
            <span class="joblocation">chicago</span>
          </b-col>


          <b-col class="col-lg-3 col-md-3 col-sm-1 col-xs-1">
              <router-link :to="{name:'applyjob'}" ><b-button class="applybtn" >Apply</b-button></router-link>
          </b-col>

        </b-row>
        <b-row class="col-lg-12 col-md-12 col-sm-12 col-xs-12 "  style="margin-top:2% !important; border-bottom:2px #94aab7 solid;">
          <b-col class="col-lg-6 col-md-6 col-sm-3 col-xs-3">
            <span class="jobTitle">Android dev</span>
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
            <span class="jobTitle">Administrative Assistant</span>
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
            <span class="jobTitle">Site Reliability Enginee</span>
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
            <span class="jobTitle">Full Stack Ruby on Rails Developer</span>
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
            <span class="jobTitle">Front End Software Engineer</span>
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
            <span class="jobTitle">Frontend-utvikler</span>
          </b-col>

          <b-col class="col-lg-3 col-md-3 col-sm-2 col-xs-2">
            <span class="joblocation">San Francisco</span>
          </b-col>


          <b-col class="col-lg-3 col-md-3 col-sm-1 col-xs-1">
              <router-link :to="{name:'applyjob'}" ><b-button class="applybtn" >Apply</b-button></router-link>
          </b-col>

        </b-row>
        <b-row class="col-lg-12 col-md-12 col-sm-12 col-xs-12 "  style="margin-top:2% !important; border-bottom:2px #94aab7 solid;">
          <b-col class="col-lg-6 col-md-6 col-sm-3 col-xs-3">
            <span class="jobTitle">Embedded Software Engineer</span>
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
            <span class="jobTitle">Senior Front-end Engineer (Contract to Perm)</span>
          </b-col>

          <b-col class="col-lg-3 col-md-3 col-sm-2 col-xs-2">
            <span class="joblocation">San Francisco</span>
          </b-col>


          <b-col class="col-lg-3 col-md-3 col-sm-1 col-xs-1">
              <router-link :to="{name:'applyjob'}" ><b-button class="applybtn" >Apply</b-button></router-link>
          </b-col>

        </b-row>
        <b-row class="col-lg-12 col-md-12 col-sm-12 col-xs-12 "  style="margin-top:2% !important; border-bottom:2px #94aab7 solid;">
          <b-col class="col-lg-6 col-md-6 col-sm-3 col-xs-3">
            <span class="jobTitle">Project Analyst</span>
          </b-col>

          <b-col class="col-lg-3 col-md-3 col-sm-2 col-xs-2">
            <span class="joblocation">chicago</span>
          </b-col>


          <b-col class="col-lg-3 col-md-3 col-sm-1 col-xs-1">
              <router-link :to="{name:'applyjob'}" ><b-button class="applybtn" >Apply</b-button></router-link>
          </b-col>

        </b-row>
        <b-row class="col-lg-12 col-md-12 col-sm-12 col-xs-12 "  style="margin-top:2% !important; border-bottom:2px #94aab7 solid;">
          <b-col class="col-lg-6 col-md-6 col-sm-3 col-xs-3">
            <span class="jobTitle">Medior .Net Developer</span>
          </b-col>

          <b-col class="col-lg-3 col-md-3 col-sm-2 col-xs-2">
            <span class="joblocation">New York</span>
          </b-col>


          <b-col class="col-lg-3 col-md-3 col-sm-1 col-xs-1">
              <router-link :to="{name:'applyjob'}" ><b-button class="applybtn" >Apply</b-button></router-link>
          </b-col>

        </b-row>

       
          

</div>
</div>
</b-container>
    </div>
</template>


