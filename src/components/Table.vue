<template>
    <div class="container">
      <div class="title-container">
        <span class="table-name">{{ table.name }}</span>
      </div>
      <div class="member-container">
        <person-list-item v-for="(member, i) in table.members" :person="member" :showRemove="false" :key="i"/>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PersonListItem from "@/components/PersonListItem.vue";

@Component({
  components: {
    PersonListItem
  }
})
export default class Table extends Vue {
  @Prop() public table!: any;
  mounted(): void {
    console.log("aaaaaaaaaaaaaaa")
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin: 10px;
  background: #D94B5E;
  width: 300px;
  min-height: 300px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column; /* Safari */
  flex-direction: column;
}
.member-container {
  min-height: 180px;
}
.title-container {
  height: 40px;
  line-height: 40px;
  text-align: left;
  padding-left: 16px;
}

.table-name {
  color: white;
  margin-left: 10px;
}
</style>
