<template>
<div>
<router-view></router-view>
<navbar></navbar>
<search></search>
<all></all>
<footerr></footerr>
</div>
</template>

<script>
import navbar from '../navbar'
import search from '../homepage/search'
import all from './all'
import footerr from '../footerr'
export default {

 name: 'alljobs',
 components:{
     navbar,
     search,
     all,
     footerr

 }

  }
</script>