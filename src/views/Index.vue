<template>
  <div class="index">
    <div class="title">
      摘要
    </div>
    <div class="list">
      <div
        v-for="(item,index) in typeList"
        :key="index"
        class="item"
      >
        <span
          class="text"
          :class="{active:type===item}"
          @click="selectType(item)"
        >
          {{ item }}
        </span>
      </div>
    </div>
    <div class="main">
      <div class="left scrollNone">
        <div
          v-for="(item,index) in dateList"
          :key="index"
          class="date"
          :class="{active:logDate===item}"
          @click="selectDate(item)"
        >
          2021-{{ item }}
        </div>
      </div>
      <div class="right scrollNone">
        <yu-card
          v-for="(item,index) in list"
          :key="index"
          :daily="item"
          @change="selectType"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {IDaily, IType} from "@/data/daily/base";
import daily from "@/data/daily/daily";
import getDaily from "@/hooks/useGetDaily";

export default defineComponent({
	setup(){

    const typeList = ref<IType[]>([ IType.Daily, IType.Html, IType.Css, IType.Js, IType.React, IType.Vue, IType.TypeScript ]);
		const type = ref<IType>(IType.Daily);


    const dailyList = ref<IDaily[]>(daily);
    const typeDailyList = ref<IDaily[]>([]);
    const list = ref<IDaily[]>([]);

    const logDate = ref<string>("");
    const dateList = ref<string[]>([]);

    const setDateList = () => {
      dateList.value = [...new Set(typeDailyList.value.map( (elem) => elem.date.join("-") ))];
      logDate.value = dateList.value[0];
    }

    //选择日期
    const selectDate = (date?:string) => {
      if(date) logDate.value = date;
      list.value = getDaily(typeDailyList.value,{date:logDate.value});
    }

    //选择类型
    const selectType = (item:IType) => {
      type.value = item;
      if(item === IType.Daily) typeDailyList.value = daily;
      else typeDailyList.value = getDaily(daily,{ type: item });
      setDateList();
      selectDate();
    };

    //初始化
    selectType(type.value);

		return {
		  type, typeList, selectType, logDate, dailyList, dateList, typeDailyList, list, selectDate
		};
	}
});
</script>
<style lang="scss" scoped>
.index{
  min-height: 100vh;
  .title{
    font-size: 20px;
    padding:12px 0;
    text-align: center;
  }
  .list{
    border: 1px solid lightslategray;
    border-left: 0;
    border-right: 0;
    display: flex;
    .item{
      min-width: 80px;
      text-align: center;
      padding: 12px;
      .text{
        border-radius: 6px;
        padding: 6px 12px;
        display: inline-block;
        border: 1px solid #d1eeee;
        background-color: antiquewhite;
        cursor: pointer;
      }
      .active{
        background-color: azure;
      }
    }
  }
  .main{
    padding-top: 12px;
    display: flex;
    height: calc(100vh - 120px);
    .left{
      border-right: 1px solid #000;
      padding: 12px 12px 0;
      width: 130px;
      height: 100%;
      overflow: hidden auto;
      .date{
        background-color: antiquewhite;
        padding: 12px;
        box-shadow: 0 0 1px 1px;
        border-radius: 6px;
        margin-bottom: 12px;
        cursor: pointer;
      }
      .active{
        background-color: aliceblue;
      }
    }
    .right{
      flex: 1;
      padding: 12px 12px 0;
      height: 100%;
      overflow: hidden auto;
    }
  }
}
</style>
