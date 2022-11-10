<template>
    <div>
        <div :class="{'text-red': hasError, 'active': isActive}">클레스 바인딩</div>
        <div :class="class2">클래스 바인딩2</div>
    </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      hasError: false,
      class2: ['active', 'hasError']
    }
  },
  setup() {},
  created() {},
  mouted() {},
  unmounted() {},
  methods: {}
}
</script>

<style>
.active {
    background-color: greenyellow;
    font-weight: bold;
}

.text-red {
    color: red;
}
</style>
