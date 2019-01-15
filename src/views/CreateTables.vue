<template>
  <el-container class="container" v-loading.fullscreen.lock="loading">
    <el-header class="header" height="80px">
      <common-header></common-header>
    </el-header>
    <label class="project-name">
      <u>
        <b>{{this.getProjectName()}}</b>
      </u>
    </label>
    <div class="project-setting">
      <div class="project-setting-row" v-if="editMode">
        <label>
          <b>編集用URL：</b>
        </label>
        <label>{{this.config.URL_BASE}}/edit/{{this.getEditId()}}</label>
      </div>
      <br>
      <label>
        <b>共有用URL：</b>
      </label>
      <label>{{this.config.URL_BASE}}/ref/{{this.getReferenceId()}}</label>
    </div>
    <el-container class="main">
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
        <el-menu>
          <el-form class="input-container" :inline="true" :model="sizeForm" size="mini">
            <label class="label">
              <b>1チームあたりの人数</b>
            </label>
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
              <b>参加メンバー （{{this.numberOfMembers}}人）</b>
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
          <el-button @click="onShuffle" v-if="editMode">チームを決める</el-button>
          <span class="download-button-area">
            <el-button @click="download">チーム表をダウンロード</el-button>
          </span>
          <span class="save-button-area" v-if="editMode">
            <el-button @click="save">保存</el-button>
          </span>
          <div id="table-container" class="table-container">
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
import Config from "@/config/Config.ts";
import PersonListItem from "@/components/PersonListItem.vue";
import CommonHeader from "@/components/CommonHeader.vue";
import html2canvas from "html2canvas";
import axios from "axios";

@Component({
  components: {
    MyTable,
    PersonListItem,
    CommonHeader
  },
  methods: {
    ...mapMutations("TableSetting", ["updateNumberOfPersons"])
  }
})
export default class Createtable extends Vue {
  private tables: Array<TableEntity> = [];
  private personName: string = "";
  private config: Config = new Config();
  private editMode: Boolean = false;
  private loading: Boolean = false;

  @Mutation("TableSetting/updateNumberOfPerTables") updateNumberOfPerTables!: (
    newValue: number
  ) => void;
  @Mutation("Persons/add") addPerson!: (newPerson: any) => void;
  @Mutation("Project/create") setProject!: (newProject: any) => void;
  @Getter("Persons/getPersons") getPersons!: () => [any];
  @Getter("TableSetting/getNumberOfPerTables")
  getNumberOfPerTables!: () => number;
  @Getter("Project/getName") getProjectName!: () => string;
  @Getter("Project/getEditId") getEditId!: () => string;
  @Getter("Project/getReferenceId") getReferenceId!: () => string;
  @Getter("Project/getId") getProjectId!: () => string;

  mounted(): void {
    this.tables = [];
    if (this.$route.path.match(/edit/)) {
      this.bootEditMode();
    } else {
      this.bootRefMode();
    }
  }

  bootRefMode(): void {
    (async () => {
      this.loading = true;
      const response = await axios.get(
        `${this.config.API_URL_BASE}/projects/ref/${this.$route.params.hash}`
      );
      this.loading = false;
      if (response.data !== null) {
        this.setProject({
          id: response.data.id,
          name: response.data.name,
          referenceId: response.data.referenceId
        });
      }
    })();
  }

  bootEditMode(): void {
    (async () => {
      this.loading = true;
      const response = await axios.get(
        `${this.config.API_URL_BASE}/projects/edit/${this.$route.params.hash}`
      );
      this.loading = false;
      if (response.data !== null) {
        this.editMode = true;
        this.setProject({
          id: response.data.id,
          name: response.data.name,
          editId: response.data.editId,
          referenceId: response.data.referenceId
        });
      }
    })();
  }

  dummy(): void {}

  download(): void {
    if (this.errorNoTeams()) {
      return;
    }
    html2canvas(document.getElementById("table-container")!).then(canvas => {
      const dataurl = canvas.toDataURL();
      const bin = atob(dataurl.split(",")[1]);
      const buffer = new Uint8Array(bin.length);
      for (var i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
      }
      const blob = new Blob([buffer]);
      const fileName = "table.png";

      if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, fileName);
        window.navigator.msSaveOrOpenBlob(blob, fileName);
      } else {
        let link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
      }
    });
  }

  save(): void {
    if (this.errorNoTeams()) {
      return;
    }
    const updateData = {
      persons: this.getPersons(),
      teams: this.tables,
      numberOfPerTables: this.numberOfPerTables
    };
    axios({
      method: "PUT",
      url: `${this.config.API_URL_BASE}/projects/${this.getProjectId()}`,
      headers: { "EDIT-ID": this.getEditId() },
      data: {
        data: updateData
      }
    }).then(response => console.log(response.status));
  }

  errorNoTeams(): Boolean {
    if (this.tables.length < 1) {
      this.$alert("チーム表を作成してください。", "", {
        confirmButtonText: "閉じる"
      });
      return true;
    }
    return false;
  }

  get numberOfPerTables(): number {
    return this.getNumberOfPerTables();
  }

  get numberOfMembers(): number {
    return this.getPersons().length;
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

      tables.push(new TableEntity(`チーム${i + 1}`, persons));
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
.project-name {
  margin-top: 20px;
  font-size: 36px;
}
.project-setting {
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 80px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column; /* Safari */
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  border-bottom: thin solid #f0f0f0;
}
.project-setting-row {
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column; /* Safari */
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}

.container {
  height: 100%;
  border: 1px solid #eee;
}
.main {
  margin-top: 20px;
}
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
  margin-bottom: 10px;
}
.header {
  height: 80px;
  line-height: 80px;
  background: #3d455a;
}
.download-button-area {
  margin-left: 20px;
}
.save-button-area {
  margin-left: 60px;
}
</style>

