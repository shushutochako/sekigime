<template>
  <el-card class="box-card">
    <div class="text item">
      {{person.name}}
      <el-button icon="el-icon-circle-close" v-if="showRemove" @click="onRemove" style="float: right; padding: 3px 0" type="text"></el-button>
    </div>
  </el-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";

@Component
export default class PersonListItem extends Vue {
  @Mutation("Persons/remove") removePerson!: (index: number) => void;
  @Prop() public person!: any;
  @Prop() public showRemove!: boolean;
  @Prop() public index!: number;

  mounted(): void {
    console.log(`showRemove:${this.showRemove}`);
    console.log("aaaaaaaaaaaaaaa");
  }

  onRemove(): void {
    console.log("adsfasfsdfsssffsffasffafffd")
    this.removePerson(this.index);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
