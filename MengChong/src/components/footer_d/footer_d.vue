<template>
  <div class="footer_d">
    <ul class="footer_ul_d">
      <li
        class="footer_li_d"
        v-for="(item,index) in footer_list_d"
        :key="index"
      >
        <router-link :to="{name:item.url}">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
    import Vuex from "vuex";
    export default {
        name: "footer_d",
              data(){
                return {
                  footer_list_d:[
                    {
                      title:"首页",
                      icon:"&#xe61c;",
                      url:"home"
                    },
                    {
                      title:"社区",
                      icon:"&#xe62d;",
                      url:"community"
                    },
                    {
                      title:"",
                      icon:"&#xe728;",
                      url:"publish"
                    },
                    {
                      title:"淘宠",
                      icon:"&#xe61e;",
                      url:"petlist"
                    },
                    {
                      title:"我的",
                      icon:"&#xe65b;",
                      url:"mine"
                    }
                  ],

                }
              }

  };

</script>

<style scoped>
.footer_d {
  height: 0.92rem;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  padding-bottom: 0.3rem;
}

.footer_ul_d {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer_li_d {
  height: 100%;
  width: 100%;
  list-style: none;
}

.footer_li_d a {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
i {
  font-size: 0.6rem;
  color: #c8c8c8;
  font-weight: 800;
}

span {
  color: #c8c8c8;
  font-size: 0.22rem;
  font-weight: 800;
}

.footer_ul_d li:nth-child(3) i {
  font-size: 1.1rem;
  position: relative;
  top: -0.4rem;
}
.footer_li_d > .router-link-active i,
.footer_li_d > .router-link-active span {
  color: #e83f39;
}

.footer_li_d > .router-link-active i,
.footer_li_d > .router-link-active span {
  color: #e83f39;
}
</style>
