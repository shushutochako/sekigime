<template>
  <div class="list-container">
    <div class="card person-item">
      <div>{{person.name}}</div>
    </div>
    <b-button class="delete-button" v-if="showRemove" @click="onRemove">
      <vue-fontawesome icon="minus-circle"/>
    </b-button>

  </div>
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

<style scoped>
.list-container {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row; /* Safari */
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
}
.person-item {
  flex-grow: 1;
  background: #fdbc84;
  padding: 4px;
  height: 36px;
}
.delete-button {
  color: gray;
  margin-left: 16px;
}
.text {
  color: brown;
}
</style>
