<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
      <el-form :inline="true" :model="sizeForm" size="mini">
        <el-form-item label="1チームの人数：">
          <el-input type="number" tabindex="1" id="number-of-per-table" v-model="numberOfPerTables"></el-input>
        </el-form-item>
      </el-form>
      <el-form :inline="true">
        <el-form-item label="名前：">
          <el-input
            type="text"
            tabindex="1"
            name="person-name"
            id="person-name"
            v-model="personName"
          ></el-input>
        </el-form-item>
        <el-button @click="onAdd">追加</el-button>
        <div v-for="(person, i) in getPersons()" :key="i">{{person.name}}</div>
      </el-form>
    </el-aside>
    <el-container>
      <el-main>
        <div class="table-container">
          <my-table v-for="(table, i) in tables" :table="table" :key="i"/>
        </div>
        <button @click="onShuffle">席を決める</button>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { mapGetters, mapMutations, createNamespacedHelpers } from "vuex";
import { Mutation, Getter } from "vuex-class";
import { Component, Prop, Vue } from "vue-property-decorator";
import MyTable from "@/components/Table.vue";
import TableEntity from "@/entity/Table.ts";
import Person from "@/entity/Person";
import Table from "@/components/Table.vue";

@Component({
  components: {
    MyTable
  },
  methods: {
    // ...mapMutations('TableSetting',['updateNumberOfPersons'])
  }
})
export default class Createtable extends Vue {
  private tables: Array<TableEntity> = [];
  private personName: string = "";
  @Mutation("TableSetting/updateNumberOfPerTables") updateNumberOfPerTables!: (
    newValue: number
  ) => void;
  @Mutation("Persons/add") addPerson!: (newPerson: any) => void;
  @Getter("Persons/getPersons") getPersons!: () => [any];
  @Getter("TableSetting/getNumberOfPerTables")
  getNumberOfPerTables!: () => number;

  mounted(): void {
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

  get numberOfPerTables(): number {
    return this.getNumberOfPerTables();
  }

  set numberOfPerTables(value) {
    this.updateNumberOfPerTables(Number(value));
  }

  onClick(): void {
    console.log(this.getNumberOfPerTables());
  }

  onAdd(): void {
    this.addPerson({
      name: this.personName
    });
  }

  private onShuffle(): void {
    this.createTables();
  }

  createTables(): void {
    const perTable = this.getNumberOfPerTables();
    const members: Array<Person> = this.getPersons().concat();
    const personCount = members.length;
    const tableCount = Math.floor(personCount / perTable);

    const tables = Array<TableEntity>();
    tableLoop: for (let i = 0; i < tableCount; i++) {
      const persons = Array<Person>();
      for (let j = 0; j < perTable; j++) {
        if (members.length < 1) {
          break tableLoop;
        }
        const rand = Math.floor(Math.random() * members.length);
        persons.push(members.splice(rand, 1)[0]);
      }

      tables.push(new TableEntity(`テーブル${i + 1}`, persons));
    }
    const adjustment = this.assignSurplus(tables, members);
    this.tables = adjustment;
  }

  // 余りメンバーの割り当て
  assignSurplus(
    tables: Array<TableEntity>,
    members: Array<Person>
  ): Array<TableEntity> {
    const surplus = members.length;

    const assigns: Array<number> = [];
    const lottery = (max: number): number => {
      const rand = Math.floor(Math.random() * max);
      if (assigns.includes(rand)) {
        return lottery(max);
      }
      assigns.push(rand);
      return rand;
    };
    for (let i = 0; i < surplus; i++) {
      const select = lottery(surplus);
      tables[select].members.push(members.splice(0, 1)[0]);
    }
    return tables;
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
.person-area {
  margin: 10px;
  min-height: 200px;
  background: lightgray;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column; /* Safari */
  flex-direction: column;
}
.person-area .input-area {
  display: -webkit-flex;
  justify-content: flex-end;
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

