<template>
  <div class="container is-fullhd">
    <header class="header" @click="onClickHeader">
      <common-header></common-header>
    </header>
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
        <label id="edit-url">{{this.getEditURL()}}</label>
        <b-button type="is-success" class="copy-button" @click="onCopy(true)">copy</b-button>
      </div>
      <br />
      <label>
        <b>共有用URL：</b>
      </label>
      <label id="ref-url">{{this.getRefURL()}}</label>
      <b-button type="is-success" class="copy-button" @click="onCopy(false)">copy</b-button>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child notification">
          <div class="content">
            <section>
              <p>
                <b>1チームあたりの人数</b>
              </p>
              <b-field>
                <label v-if="!editMode">
                  {{this.numberOfPerTables}}人
                </label>
                <b-numberinput
                  min="1"
                  max="50"
                  type="is-success"
                  v-model="numberOfPerTables"
                  id="number-of-per-table"
                  v-if="editMode"
                ></b-numberinput>
              </b-field>
            </section>
            <section class="add-person">
              <p>
                <b>参加メンバー （{{this.numberOfMembers}}人）</b>
              </p>
              <b-field>
                <b-input width="200px" placeholder="名前を入力" v-model="personName"></b-input>
                <b-button class="create-button" type="is-success" @click="onAdd">追加</b-button>
              </b-field>
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
            </section>
          </div>
        </article>
      </div>
      <div class="tile is-vertical is-9">
        <div class="tile is-parent">
          <article class="tile is-child notification">
            <div class="content">
              <div class="menu-button-area">
                <b-field>
                  <b-button
                    class="menu-button"
                    type="is-info"
                    @click="onShuffle"
                    v-if="editMode"
                  >チームを決める</b-button>
                  <b-button class="menu-button" type="is-info" @click="download">チーム表をダウンロード</b-button>
                  <b-button class="menu-button" type="is-info" @click="save" v-if="editMode">データを保存</b-button>
                </b-field>
              </div>
              <div id="table-container" class="table-container">
                <my-table v-for="(table, i) in tables" :table="table" :key="i" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
    <b-loading :is-full-page="true" :active.sync="loading" :can-cancel="true">
    </b-loading>
  </div>
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
  @Mutation("Persons/setPersons") setPersons!: (persons: Array<any>) => void;
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
        this.restoreData(response.data.data);
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
        this.restoreData(response.data.data);
        this.setProject({
          id: response.data.id,
          name: response.data.name,
          editId: response.data.editId,
          referenceId: response.data.referenceId
        });
      }
    })();
  }

  getEditURL(): string {
    return `${this.config.URL_BASE}/edit/${this.getEditId()}`;
  }

  getRefURL(): string {
    return `${this.config.URL_BASE}/ref/${this.getReferenceId()}`;
  }

  restoreData(savedData: any): void {
    if (savedData === null) {
      return;
    }
    this.updateNumberOfPerTables(savedData.numberOfPerTables);
    this.setPersons(savedData.persons);
    this.tables = savedData.teams.map((team: any) => {
      return new TableEntity(
        team.name,
        team.members.map((member: any) => {
          return new Person(member.name);
        })
      );
    });
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

  onCopy(isEdit: boolean): void {
    if (isEdit) {
      this.$copyText(this.getEditURL());
    } else {
      this.$copyText(this.getRefURL());
    }
  }

  save(): void {
    if (this.errorNoTeams()) {
      return;
    }
    (async () => {
      await this.confirm('データを保存します。よろしいですか？');
      const updateData = {
        persons: this.getPersons(),
        teams: this.tables,
        numberOfPerTables: this.numberOfPerTables
      };
      this.loading = true;
      await axios({
        method: "PUT",
        url: `${this.config.API_URL_BASE}/projects/${this.getProjectId()}`,
        headers: { "EDIT-ID": this.getEditId() },
        data: {
          data: updateData
        }
      });
      this.loading = false;
      this.setWarning(false);
    })().catch(e => {
      if (e !== "cancel") {
        console.error(e);
      }
    });
  }

  errorNoTeams(): Boolean {
    if (this.tables.length < 1) {
      this.$dialog.alert({
        message: '「チームを決める」を押して、チーム表を作成してください。'
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

  private confirm(message: string) {
    return new Promise((resolve, reject) => {
        this.$dialog.confirm({
          message: message,
          onConfirm: () => {
            resolve();
          },
          onCancel: () => {
            reject('cancel');
          }
       });
    });
  }

  onClick(): void {}

  onClickHeader(): void {
    this.$store.dispatch('clearAll');
    this.$router.push({ path: '/top' })
  }

  onAdd(): void {
    if (this.personName === "" || this.personName === null) {
      return;
    }
    this.addPerson({
      name: this.personName
    });
    this.setWarning(true);
  }

  private onShuffle(): void {
    this.createTables();
    this.setWarning(true);
  }

  private setWarning(needs: boolean): void {
    window.onbeforeunload = needs
      ? e => {
          e.returnValue = "変更が保存されていません。よろしいですか？";
        }
      : null;
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
  margin-left: 4px;
  margin-right: 4px;
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
.menu-button {
  margin-left: 20px;
}
.add-person {
  margin-top: 40px;
}
.copy-button {
  width: 50px;
}
.menu-button-area {
  display: -webkit-flex;
  justify-content: center;
}
</style>

