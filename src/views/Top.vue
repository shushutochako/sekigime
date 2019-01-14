<template>
  <el-container class="container">
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
  onCreate(): void {
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

      const response = await axios.post(`${config.API_URL_BASE}/projects`, {
        name: this.projectName
      });
      this.$router.push({ path: `/edit/${response.data.editId}` });
    })().catch(e => {
      console.error(e);
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

