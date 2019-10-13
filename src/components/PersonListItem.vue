<template>
  <div class="list-container">
    <div class="person-item">
      <div class="name-text">{{person.name}}</div>
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
  justify-content: center;
  align-items: center;
}
.person-item {
  flex-grow: 1;
  background: #BF360C;
  padding: 2px;
  height: 40px;
  line-height: 40px;
  max-width: 200px;
  border-radius: 0.2em;
}
.delete-button {
  color: gray;
  margin-left: 10px;
}
.name-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: white;
}
</style>
