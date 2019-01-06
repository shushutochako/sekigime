<template>
  <el-card class="box-card person-item">
    <div>
      {{person.name}}
      <el-button class="button" icon="el-icon-circle-close-outline" v-if="showRemove" @click="onRemove" style="float: right; padding: 3px 0" type="text"></el-button>
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

  onRemove(): void {
    this.removePerson(this.index);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.person-item {
  background: #FDBC84;
  margin: 6px;
}
.button {
  color: gray;
}
.text {
  color: brown;
}
</style>
