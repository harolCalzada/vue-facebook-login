<template>
  <div>
    <button @click="auth('facebook')">Facebook</button>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }, methods: {
    auth(network) {
      const hello = this.hello;
      hello(network).login().then(() => {
          
        const authRes = hello(network).getAuthResponse();
        console.log('auth rest', authRes)
        /*
          performs operations using the token from authRes
        */
        hello(network).api('me').then(function (json) {
          const profile = json;
          console.log('json', json)
          /*
            performs operations using the user info from profile
          */
        });
      })
    }
  }
}
</script>

<style scoped></style>

