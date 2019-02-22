
         <template>
    <div class="applyjob">
         <b-card   style="max-width: 20rem; color:#94aab7;" class="mb-2 post shadow">
           <b-col class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
            <b-form-input class="signininput" id="input-valid"  type="text" placeholder="Full Name" />
            </b-col>
      <b-col class="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
      <b-form-input class="signininput" id="input-valid"  type="Email" placeholder="Email" />
    </b-col>
      <b-input-group>
          <div class="custom-file col-lg-10 col-md-10 col-sm-10 col-xs-10">
             <input type="file" class=" signininput custom-file-input" id="customFile" name="filename">
             <label class="custom-file-label" for="customFile"></label>
            </div>
       </b-input-group>
      <b-button href="#" class="applyjobBtn">Apply</b-button>
  </b-card>


 
    </div>
</template>


<style>
.post {
   margin-left: 38% !important;
   margin-top: 5%;
   text-align: center !important;
}
.applyjob {
  margin-bottom: 15%;
}
.applyjobinput{
    border:2px #94aab7  solid!important;
    margin-bottom: 4% !important;
  
}
.applyjobBtn {
  margin-top: 15px !important;
}

.custom-file {
  margin-left:14px !important;
   margin-bottom: 5px !important;
}
.custom-file-input:lang(en) ~ .custom-file-label::after {
content: "Browse CV" !important;
background-color:  #376580  !important;
color: white  !important;
text-align:left !important;
}

@media (max-width: 768px) {
 .applyjob {
     margin-bottom: 82%;
 }
.post {
   margin-left:28% !important;
}


}
@media (max-width : 576px) {
     .applyjob {
     margin-bottom: 83%;
 }
 .post {
   margin-left: 8% !important;
}
  
}
</style>


  
