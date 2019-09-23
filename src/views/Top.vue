<template>
  <div class="container">
    <div class="container" v-loading.fullscreen.lock="loading">
      <header class="header">
        <common-header></common-header>
      </header>
      <section class="section">
        <h2 class="main-heading">面倒なチーム分けを自動で作成します。共有URLで他の人に簡単に共有!</h2>
        <div class="input-container">
          <b-field>
            <b-input width="200px" placeholder="イベント名を入力" v-model="projectName"></b-input>
            <b-button class="create-button" type="is-success" @click="onCreate">作成</b-button>
          </b-field>
        </div>
      </section>
    </div>
    <section>
      <div class="description-title">
        <b>使い方</b>
      </div>
      <div class="description">
        <ol>
          <li>イベントを作成</li>
          <li>参加メンバーを追加</li>
          <li>「チームを決める」でチームを自動編成</li>
          <li>ドラッグ&ドロップでチーム編成を調整</li>
          <li>データを共有したい場合は保存ボタンで保存</li>
          <li>チーム表をダウンロードしたい場合は「チーム表をダウンロード」</li>
          <li>URLで他の人とデータを共有</li>
        </ol>
      </div>
      <div class="description-title">
        <b>シチュエーション</b>
      </div>
      <div class="description">
        <ul>
          <li>飲み会の席分けを決めたい</li>
          <li>イベントのグループ分けを決めたい</li>
          <li>チームランチの編成を作りたい</li>
        </ul>
      </div>
    </section>
    <div class="tweet-container">
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        data-size="large"
        class="twitter-share-button"
        data-show-count="false"
      >Tweet</a>
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
      this.$dialog.alert({
        message: "プロジェクト名を入力して下さい。"
      });
      return;
    }
    const config = new Config();
    (async () => {
      await this.confirm(
        'プロジェクトを作成します。よろしいですか？',
      );
      this.loading = true;
      const response = await axios.post(`${config.API_URL_BASE}/projects`, {
        name: this.projectName
      });
      this.loading = false;
      this.$router.push({ path: `/edit/${response.data.editId}` });
    })().catch(e => {
      if (e !== "cancel") {
        this.$dialog.alert({
          message: '作成に失敗しました。しばらく経ってから再実行してください。'
        });
      }
    });
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

.main-heading {
  color: darkorange;
  font-size: 1.2rem;
}
.heading {
  margin-top: 10px;
  margin-left: 100px;
  margin-right: 100px;
  text-align: left;
  border-bottom: medium solid #ececec;
}

.description-title {
  margin-top: 20px;
  margin-left: 60px;
  text-align: left;
}

.description {
  margin-top: 10px;
  margin-left: 100px;
  text-align: left;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
}
.project-form {
  width: 500px;
  margin-top: 10px;
}
.header {
  height: 80px;
  line-height: 80px;
  background: #3d455a;
}
.create-button {
  margin-left: 16px;
}

ul > li {
  display: list-item;
  list-style: disc;
}
</style>

