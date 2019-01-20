<template>
  <el-container class="container" v-loading.fullscreen.lock="loading">
    <el-header class="header" height="80px">
      <common-header></common-header>
    </el-header>
    <el-main class="main input-container">
      <el-form class="project-form" :label-position="labelPosition" label-width="120px">
        <el-form-item label="プロジェクト名">
          <el-input class="input" tabindex="1" placeholder="プロジェクト名を入力してください" v-model="projectName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="create-button" @click="onCreate">作成</el-button>
        </el-form-item>
      </el-form>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { mapGetters, mapMutations, createNamespacedHelpers } from "vuex";
import { Mutation, Getter } from "vuex-class";
import { Component, Prop, Vue } from "vue-property-decorator";
import ProjectEntity from "@/entity/Project.ts";
import CommonHeader from "@/components/CommonHeader.vue";
import Config from "@/config/Config.ts";
import axios from "axios";

@Component({
  components: {
    CommonHeader
  },
  methods: {
    ...mapMutations("Project", ["updateName"])
  }
})
export default class Createtable extends Vue {
  private labelPosition: string = "left";
  private projectName: string = "";
  private loading: Boolean = false;

  onCreate(): void {
    if (this.projectName.length < 1) {
      this.$message.error('プロジェクト名を入力して下さい。');
      return;
    }
    const config = new Config();
    (async () => {
      await this.$confirm(
        "プロジェクトを作成します。よろしいですか？",
        "プロジェクト作成",
        {
          confirmButtonText: "OK",
          cancelButtonText: "Cancel",
          type: "info"
        }
      );
      this.loading = true;
      const response = await axios.post(`${config.API_URL_BASE}/projects`, {
        name: this.projectName
      });
      this.loading = false;
      this.$router.push({ path: `/edit/${response.data.editId}` });
    })().catch((e) => {
      if (e !== 'cancel') {
        this.$message.error('作成に失敗しました。しばらく経ってから再実行してください。');
      }
    });
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  border: 1px solid #eee;
}
.main {
  align-items: center;
  margin-top: 20px;
  width: 100%;
}
.input-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.project-form {
  width: 400px;
  margin-top: 10px;
}
.header {
  line-height: 80px;
  background: #3d455a;
}
.create-button {
  color: white;
  background: darkorange;
}
</style>

