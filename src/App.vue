<template>
  <div>
    <router-view/>
    <FooterGuide/>
  </div>
</template>

<script>
  import FooterGuide from './compoents/FooterGuide/FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
