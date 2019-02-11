<template>
  <div>
    <el-container class="container" v-loading.fullscreen.lock="loading">
      <el-header class="header" height="80px">
        <common-header></common-header>
      </el-header>
      <div class="heading">
        <h2>面倒なチーム分けを自動で作成します。共有URLで他の人に簡単に共有!</h2>
        <p class="note">※ 作成したチーム表の保存や画像ダウンロードも可能です。</p>
      </div>
      <el-main class="main input-container">
        <el-form
          :inline="true"
          class="project-form"
          :label-position="labelPosition"
          label-width="120px"
        >
          <el-form-item label="イベント名">
            <el-input width="200px" tabindex="1" placeholder="イベント名を入力してください" v-model="projectName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="create-button" @click="onCreate">作成</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
    <div class="tweet-container">
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-size="large" class="twitter-share-button" data-show-count="false">Tweet</a>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapMutations, createNamespacedHelpers } from "vuex";
import { Mutation, Getter } from "vuex-class";
import { Component, Prop, Vue } from "vue-property-decorator";
import ProjectEntity from "@/entity/Project.ts";
import CommonHeader from "@/components/CommonHeader.vue";
import Config from "@/config/Config.ts";
import axios from "axios";
// const Timeline = require("vue-tweet-embed").timeline;

@Component({
  components: {
    CommonHeader
    // 'v-timeline': Timeline,
  },
  methods: {
    ...mapMutations("Project", ["updateName"])
  }
})
export default class Createtable extends Vue {
  private labelPosition: string = "left";
  private projectName: string = "";
  private loading: Boolean = false;
  private twitterId: string = "XrtPAR3bZBxO4gI";
  private twitterHeight: string = "400";

  onCreate(): void {
    if (this.projectName.length < 1) {
      this.$message.error("プロジェクト名を入力して下さい。");
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
    })().catch(e => {
      if (e !== "cancel") {
        this.$message.error(
          "作成に失敗しました。しばらく経ってから再実行してください。"
        );
      }
    });
  }
}
</script>

<style scoped>
.container {
  padding-bottom: 50px;
  border: 1px solid #eee;
}
.tweet-container {
  display: flex;
  flex-direction: column; /* 子要素をflexboxにより縦方向に揃える */
  justify-content: center; /* 子要素をflexboxにより中央に配置する */
  align-items: center; /* 子要素をflexboxにより中央に配置する */
  margin-top: 50px;
  height: 100px;
  width: 100%;
}

.follow-button {
  height: 100px;
  width: 200px;
}

.heading {
  margin-top: 10px;
  margin-left: 100px;
  margin-right: 100px;
  text-align: left;
  color: darkorange;
  border-bottom: medium solid #ececec;
}
.note {
  margin-top: 10px;
  align: left;
  color: gray;
}
.main {
  align-items: center;
  margin-top: 20px;
  width: 100%;
}
.el-input {
  width: 280px;
}
.input-container {
  margin-left: 100px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
}
.project-form {
  width: 500px;
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

