<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="sass">
@import 'reset-css';

body
  color: #44546a
  padding: 20px

@media (min-width: 1023px)
  body
    color: #44546a
    padding: 140px

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
</style>
