<template>
    <div class="container">
      <div class="title-container">
        {{ table.name }}
      </div>
      <div class="member-container">
        <p v-for="member in table.members" :key="member">
          {{member.name}}
        </p>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Table extends Vue {
  @Prop() public table!: any;
  mounted(): void {
    console.log("aaaaaaaaaaaaaaa")
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 10px;
  background: pink;
  width: 300px;
  height: 300px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column; /* Safari */
  flex-direction: column;
}
.member-container {
  height: 180px;
}
.title-container {
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 16px;
}
</style>
