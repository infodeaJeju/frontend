<template>
    <div>
        <h1>Hello {{ userName }}</h1>
        <p>{{ message }}</p>
    </div>
</template>
<script>
export default {
  data () {
    return {
      userName: 'John Doe',
      message: 'hello111',
      arr: [],
      obj: {}
    }
  }
}
</script>
