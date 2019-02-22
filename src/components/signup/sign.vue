
    <template>
    <div class="signin">
         <b-card  title="Sign in" style="max-width: 20rem; color:#94aab7;" class="mb-2 post shadow">
             <b-input-group>
        <b-form-input class="signininput" type="text" placeholder="user name"  />
      </b-input-group>
      <b-input-group>
        <b-form-input class="signininput" type="password" placeholder="password"  />
      </b-input-group>
      <b-input-group>
       <a  href="#" class="lnk">forgot?</a>
       </b-input-group>
      <b-button href="#" class="signinBtn">Sign in</b-button>
  </b-card>
    </div>
</template>


<style>
.post {
   margin-left: 38% !important;
   margin-top: 5%;
   text-align: center !important;
}
.signin {
  margin-bottom: 15%;
}
.signininput{
    border:2px #94aab7  solid!important;
    margin-bottom: 4% !important;
}
.checkbox {
   margin-top: 5%; 
}

.lnk{
 color: #94aab7;
 text-align: center !important;
}


@media (max-width: 768px) {
 .signin {
     margin-bottom: 63%;
 }
.post {
   margin-left:28% !important;
}
.signin {
  margin-bottom: 78%;
}
}
@media (max-width : 576px) {
     .signin {
     margin-bottom: 43%;
 }
 .post {
   margin-left: 8% !important;
}
}
</style>

