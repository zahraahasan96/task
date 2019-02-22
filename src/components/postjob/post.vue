<template>
    <div class="pstjb">
         <b-card style="max-width: 20rem;" class="mb-2 post shadow">
             <b-input-group>
        <b-form-input class="postjob" type="text" placeholder="job Title"  />
      </b-input-group>
      <b-input-group>
        <b-form-input class="postjob" type="text" placeholder="Email"  />
      </b-input-group>
      <b-input-group>
        <b-form-textarea class="postjob" id="input-large" size="lg" type="text" placeholder="job discribtion" />
      </b-input-group>   

       <b-form-group label="Job type:" class="checkbox">
      <b-form-checkbox-group>
        <b-form-checkbox id="checkboxes1" name="full time" value="full-time">full time</b-form-checkbox>
        <b-form-checkbox id="checkboxes2" name="part time" value="part-time">part time</b-form-checkbox>
      </b-form-checkbox-group>
     
    </b-form-group>


                <b-button href="#" variant="primary">post</b-button>
  </b-card>
    </div>
</template>


<style>
.post {
   margin-left: 38% !important;
   margin-top: 5%;
}
.postjob{
    border:2px #94aab7  solid!important;
    margin-bottom: 4% !important;
}
.checkbox {
   margin-top: 5%; 
}




@media (max-width: 768px) {
 .pstjb {
     margin-bottom: 63%;
 }
.post {
   margin-left:28% !important;
}
}
@media (max-width : 576px) {
     .pstjb {
     margin-bottom: 43%;
 }
 .post {
   margin-left: 8% !important;
}
}
</style>
