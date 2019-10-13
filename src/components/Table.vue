<template>
  <div class="my-container">
    <div class="title-container">
      <span class="table-name">
        <b>{{ table.name }}</b>
      </span>
    </div>
    <div class="member-container">
      <draggable
        v-model="table.members"
        :options="{
          group:'tableMember',
          animation: 200,
          delay: 50,
        }"
        :move="canDrag"

      >
        <div v-for="(member, i) in table.members" :key="i" class="list-item-container">
          <person-list-item
            :person="member"
            :showRemove="false"
            :key="i"
          />
        </div>
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
  @Prop() public editable!: boolean;
  mounted(): void {}

  canDrag(): Boolean {
    return this.editable;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-container {
  margin: 10px;
  background: #fbe9ab;
  width: 250px;
  min-height: 300px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column; /* Safari */
  flex-direction: column;
}
.list-item-container{
  padding: 4px;
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
