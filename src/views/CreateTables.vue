<template>
  <div class="create-tables">
    <div class="table-setting">
        <input type="text" tabindex="1" class="table-setting-item" name="numberOfPersons" id="number-of-persons" v-model="numberOfPersons"/>
        <input type="text" tabindex="2" class="table-setting-item" name="numberOfPerTable" id="number-of-per-table"/>
    </div>
    <div class="table-container">
      <my-table v-for="(table, i) in tables" :table="table" :key="i"/>
    </div>
    <button @click="onClick">Click!</button>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations, createNamespacedHelpers } from 'vuex'
import { Mutation } from 'vuex-class'
import { Component, Prop, Vue } from "vue-property-decorator";
import MyTable from "@/components/Table.vue";
import TableEntity from "@/entity/Table.ts";
import Person from "@/entity/Person";

@Component({
  components: {
    MyTable
  },
  methods: {
    ...mapMutations('tableSetting',['updateNumberOfPersons'])
  }
})
export default class Createtable extends Vue {
  private tables: Array<TableEntity> = [];
  @Mutation('tableSetting/updateNumberOfPersons') updateNumberOfPersons!: (newValue:number) => void

  mounted(): void {
    console.log("mounted");
    this.dummy();
  }

  dummy(): void {
    this.tables = [
      new TableEntity("table1", [
        new Person("Person A"),
        new Person("Person B")
      ]),
      new TableEntity("table2", [
        new Person("Person C"),
        new Person("Person D")
      ]),
      new TableEntity("table3", [
        new Person("Person E"),
        new Person("Person F")
      ])
    ];
  }

  get numberOfPersons(): boolean {
    return this.$store.state.numberOfPersons;
  }

  set numberOfPersons(value) {
    this.updateNumberOfPersons(Number(value));
    
  }

  onClick(): void {
    this.tables[0].members[0].name = "hit";
  }
}
</script>

<style scoped>
.table-setting {
  margin: 10px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column; /* Safari */
  flex-direction: column;
}
.table-setting-item {
  width: 300px;
  height: 30px;
  margin: 4px;
}
.table-container {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

