<template>
<div>
<router-view></router-view>
<navbar></navbar>
<post></post>
<footerr></footerr>
</div>
</template>

<script>
import navbar from '../navbar'
import post from './post'
import footerr from '../footerr'
export default {

 name: 'postjob',
 components:{
     navbar,
     post,
     footerr

 }

  }
</script>