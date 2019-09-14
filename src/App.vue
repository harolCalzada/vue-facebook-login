<template>
  <div id="app">
    <FacebookLogin name="Facebook"></FacebookLogin>
  </div>
</template>

<script>
import FacebookLogin from './components/FacebookLogin.vue'

export default {
  name: 'app',
  components: {
    FacebookLogin
  }
}
</script>