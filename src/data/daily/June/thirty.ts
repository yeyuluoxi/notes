import {date, IDaily, IType, month} from "@/data/daily/base";

const first: IDaily = {
  date: [month.June, date.Thirtieth],
  type: IType.Vue,
  title: "vue3缓存",
  note: [`
<router-view v-slot="{ Component }">
  <keep-alive>
    <component
      :is="Component"
      v-if="$route.meta.keepAlive"
      :key="$route.path"
    />
  </keep-alive>
  <component
    :is="Component"
    v-if="!$route.meta.keepAlive"
    :key="$route.path"
  />
</router-view>
  `,
    "注: 不要动态修改keepAlive的值"
  ],
  pre: true
}


const JuneThirty: Array<IDaily> = [first];

export default JuneThirty;