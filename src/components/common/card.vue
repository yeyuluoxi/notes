<template>
  <div class="yuCard">
    <div class="title">
      <span class="date">2021-{{ daily.date.join("-") }}</span>
      <span
        class="type"
        @click="select"
      >{{ daily.type }}</span>
      <span
        v-if="daily.title"
        class="title"
      >{{ daily.title }}</span>
    </div>
    <div class="content">
      <ul>
        <li
          v-for="(item,index) in daily.note"
          :key="index"
          :class="{pre: daily.pre}"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, SetupContext } from 'vue';

export default defineComponent({
  props: {
    daily:{
      type: Object,
      required: true,
    }
  },
  emits: ['change'],
  setup(props,context:SetupContext){
    const select = () => {
      context.emit( "change", props.daily.type );
    };
    return { select };
  }
})
</script>
<style lang="scss" scoped>
.yuCard{
  padding:12px;
  box-shadow: 0 0 1px 1px;
  border-radius: 6px;
  margin-bottom: 12px;
  background-color: #fff;
  .title{
    margin-bottom: 6px;
    span{
      display: inline-block;
      padding: 6px 12px;
      margin-right:12px;
      background-color: antiquewhite;
      border-radius: 12px;
    }
    .type{
      cursor: pointer;
    }
  }
  .content{
    border-top: 1px solid antiquewhite;
    padding-top: 6px;
    ul li{
      line-height: 1.5;
      &.pre{
        white-space: pre;
      }
    }
  }
}
</style>
