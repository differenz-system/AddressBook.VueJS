<template>
  <div id="app">
    <div id="snackbar">Default</div>
    <div 
      id="app-loader" 
      class="app-loader" 
      style="display: none;">
      <img 
        width="5%" 
        src="../src/assets/images/app-loader.svg" >
    </div>
    <router-view/>
  </div>
</template>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  display flex
  justify-content center
  padding 30px
  a
    padding 2px
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983

.app-loader 
  background rgba(0,0,0,0.5)
  display none
  height 100%
  text-align center
  position fixed
  width 100%
  z-index 999999
  img 
    left 48%
    position absolute
    top 40%
    width 5%
  span 
    left 36%
    position absolute
    top 52%
    color white

#snackbar 
    visibility hidden
    min-width 250px
    margin-left -125px
    background-color #333
    color #fff
    text-align center
    border-radius 2px
    padding 16px
    position fixed
    z-index 1
    left 50%
    bottom 30px
    font-size 17px


#snackbar.show 
    visibility visible
    -webkit-animation fadein 0.5s, fadeout 0.5s 2.5s
    animation fadein 0.5s, fadeout 0.5s 2.5s


@-webkit-keyframes fadein 
    from bottom 0 opacity 0 
    to bottom 30px opacity 1


@keyframes fadein 
    from bottom 0 opacity 0
    to bottom 30px opacity 1


@-webkit-keyframes fadeout 
    from bottom 30px opacity 1 
    to bottom 0 opacity 0


@keyframes fadeout 
    from bottom 30px opacity 1
    to bottom 0 opacity 0

</style>
