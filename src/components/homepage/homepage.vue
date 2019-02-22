<template>
<div>
<router-view></router-view>
<navbar></navbar>
<search></search>
<jobs></jobs>
<footerr></footerr>
</div>
</template>

<script>
import navbar from '../navbar'
import search from './search'
import jobs from './jobs'
import footerr from '../footerr'
export default {

 name: 'homepage',
 components:{
     navbar,
     search,
     jobs,
     footerr

 }

  }
</script>