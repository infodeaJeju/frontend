<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div>
    <button @click="apiTest();">클릭</button>
  </div>
  <div>
    <table border="1">
      <tr>
        <th>EMP_NO</th>
        <th>BR_CD</th>
        <th>EMP_NM</th>
        <th>EMP_JBLVL_CD</th>
        <th>POSI_CD</th>
      </tr>
      <tbody>
        <tr :key="user.EMP_NO" v-for="user in userList">
          <td>{{ user.emp_NO }}</td>
          <td>{{ user.br_CD }}</td>
          <td>{{ user.emp_NM }}</td>
          <td>{{ user.emp_JBLVL_CD }}</td>
          <td>{{ user.posi_CD }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userList: []
    }
  },
  setup() {},
  created() {},
  mouted() {},
  unmounted() {},
  methods: {
    apiTest() {
      fetch('http://localhost:8081/userList')
        .then(response => response.json())
        .then(response => {
          this.userList = response
          console.log(this.userList)
          console.log(this.userList[0])
        })
    }
  }
}
</script>
