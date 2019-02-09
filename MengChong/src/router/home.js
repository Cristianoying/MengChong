import Home from '@/components/home/home'
import Home_topic_w from "@/components/home/topicList.vue"
import topicTitle_w from "@/components/home/topicTitle.vue"
import animal_w from "@/components/home/animal.vue"


let home = [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: {
        isFooter: true
      },
    },
    {
      /*由首页转跳到话题列表详情页*/
      path: '/home/topic_w/:t_w_id',
      name: "home_topic_w",
      component: Home_topic_w,
    },
    {
      // 有话题列表页 转跳到 某一个话题页
      path: "/topicTitle_w/:topicTitleId",
      name: "topicTitle_w",
      component: topicTitle_w,
      
    },
    {
      //转跳到宠物详情页
      path: "/animal",
      name: "animal",
      component: animal_w,
    }
]
export default home;
