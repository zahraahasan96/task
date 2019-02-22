<template>
<div>
<router-view></router-view>
<navbar></navbar>
<sign></sign>
<footerr></footerr>
</div>
</template>

<script>
import navbar from '../navbar'
import sign from './sign'
import footerr from '../footerr'
export default {

 name: 'signup',
 components:{
     navbar,
     sign,
     footerr

 }

  }
</script>