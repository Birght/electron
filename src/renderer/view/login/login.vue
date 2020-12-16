<template>
  <div class="main">
    <el-button type="primary" @click="goto()">12421421</el-button>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      testa: ''
    }
  },
  methods: {
    goto () {
      this.$router.push({path: '/demo'})
    }
  }
}
</script>

<style>

</style>