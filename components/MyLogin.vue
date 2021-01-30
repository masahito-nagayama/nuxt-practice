<template>
  <div class="content">
    <section>
      <h1>ログイン</h1>
      <p>{{ islogin }}</p>
      <button @click="login()">ログイン</button>
      <button @click="logout()">ログアウト</button>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    islogin(){
      return this.$store.state.islogin;
    }
  },
  methods: {
    login: function() {
      this.$store.commit("login")
    },
    logout: function() {
      this.$store.commit("logout")
    }
  }
}
</script>