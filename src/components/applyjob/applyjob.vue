<template>
<div>
<router-view></router-view>
<navbar></navbar>
<apply></apply>
<footerr></footerr>
</div>
</template>

<script>
import navbar from '../navbar'
import apply from './apply'
import footerr from '../footerr'
export default {

 name: 'applyjob',
 components:{
     navbar,
     apply,
     footerr

 }

  }
</script>