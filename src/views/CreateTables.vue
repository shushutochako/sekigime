<template>
  <el-container style="height: 700px; border: 1px solid #eee">
    <el-header class="header">
      <span class="header-text">
        <b>席極め</b>
      </span>
    </el-header>
    <el-container>
    <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
      <el-menu>
        <el-form class="input-container" :inline="true" :model="sizeForm" size="mini">
          <label class="label"><b>一人あたりの人数</b></label>
          <el-input-number
            class="input"
            tabindex="1"
            :min="1"
            :max="50"
            id="number-of-per-table"
            v-model="numberOfPerTables"
          ></el-input-number>
        </el-form>
        <br>
        <br>
        <el-submenu index="1">
          <template slot="title">
            <b>参加メンバー</b>
          </template>
          <el-form class="input-container" :inline="true">
            <el-input
              placeholder="名前を入力してください"
              type="text"
              tabindex="1"
              name="person-name"
              id="person-name"
              v-model="personName"
            >
              <el-button slot="append" @click="onAdd">追加</el-button>
            </el-input>
          </el-form>
          <div>
            <person-list-item
              v-for="(person, i) in getPersons()"
              :person="person"
              :showRemove="true"
              :index="i"
              :key="i"
              class="person-list-container"
            />
          </div>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-main>
        <el-button @click="onShuffle">席を決める</el-button>
        <div class="table-container">
          <my-table v-for="(table, i) in tables" :table="table" :key="i"/>
        </div>
      </el-main>
    </el-container>
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
import PersonListItem from "@/components/PersonListItem.vue";

@Component({
  components: {
    MyTable,
    PersonListItem
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
    this.tables = [];
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
    if (this.personName === "" || this.personName === null) {
      return;
    }
    console.log("onAdd");
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
.table-container {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.person-list-container {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
}

.label {
  font-size: 14px;
}
.input {
  margin-top: 8px;
}
.input-container {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.header-text {
  font-size: 2em;
  color: white;
}
.header {
  line-height: 64px;
  background: #455c7b;
}
</style>

