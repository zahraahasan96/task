<template>
<div style="margin-top:2% !important; text-align:center !important;">
<b-container>
  <b-row class="col-12 searchRow">
    <b-col class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
      <b-input-group>
        <b-form-input class="srch" type="text" placeholder="Discribtion"  />
      </b-input-group>
    </b-col>

    <b-col class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
      <b-input-group>
        <b-form-input class="srch" type="text" placeholder="location" />
      </b-input-group>
    </b-col>

    <b-col class="col-lg-2 col-md-2 col-sm-2 col-xs-2">
        <b-button class="btn" >Search</b-button>
    </b-col>

  </b-row>
</b-container>
</div>
</template>

<style>
.searchRow{
     margin-left:50px !important;
     font-size:90% !important;
}
.srch {
    border:2px #94aab7  solid!important;
}
.srch:focus {
  border:2px #B1D5B3  solid!important;

}
.btn {
background-color:#94aab7 !important;
color:white;
 padding: 7px 15px !important;
 margin-top: 0% !important;
 font-size:100% !important;
 border: none  !important;
}
.btn:hover {
color:#174E8C !important;

}
.btn:focus {
color:#B1D5B3 !important;
}
@media (max-width: 993px) {
 .searchRow{
     margin-left:10px !important;
}
 }

@media (max-width: 767px) {
.searchRow{
     margin-left:0px !important;
}
}
@media (max-width : 576px) {
    .searchRow{
     margin-left:0px !important;
}
}
</style>


