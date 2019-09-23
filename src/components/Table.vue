<template>
  <div class="my-container">
    <div class="title-container">
      <span class="table-name"><b>{{ table.name }}</b></span>
    </div>
    <div class="member-container">
      <draggable v-model="table.members" :options="{group:'tableMember'}" @start="drag=true" @end="drag=false">
        <person-list-item
          v-for="(member, i) in table.members"
          :person="member"
          :showRemove="false"
          :key="i"
        />
      </draggable>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import PersonListItem from "@/components/PersonListItem.vue";
import draggable from "vuedraggable";

@Component({
  components: {
    PersonListItem,
    draggable
  }
})
export default class Table extends Vue {
  @Prop() public table!: any;
  mounted(): void {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-container {
  margin: 10px;
  background: #FBE9AB;
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
  color: gray;
  margin-left: 10px;
}
</style>
