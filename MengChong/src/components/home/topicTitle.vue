
    <template>
  <div id="topicTltle_w">
    <div class="topicTitle_scroll_w wrapper" ref="topicTitle_w">
      <div class="topicContent content">
        <TopicTliteHeader_w></TopicTliteHeader_w>
        <div id="topicTltle_main_w">
          <ul>
            <li>
              <div class="topicTitle_mainone_w">
                <router-link to="animal">
                  <img src="../../../static/home_w/sy_slices_w/tx_cy_1@2x.png">
                </router-link>
                <p>
                  <i>萌萌哒见面了...</i>
                  <em>小 主 红 人</em>
                </p>
                <span>+关注</span>
              </div>
              <div class="topicTitle_maintwo_w">
                <router-link to="#">
                  <img src="../../../static/home_w/sy_slices_w/wz_cy_1@2x.png">
                  <h1>狗狗DIY圣诞项圈制作...</h1>
                </router-link>
              </div>

              <p>
                <b>177</b>
                <strong>6</strong>
              </p>
            </li>

            <li>
              <div class="topicTitle_mainone_w">
                <router-link to="#">
                  <img src="../../../static/home_w/sy_slices_w/tx_cy_1@2x.png">
                </router-link>
                <p>
                  <i>萌萌哒见面了...</i>
                  <em>小 主 红 人</em>
                </p>
                <span>+关注</span>
              </div>
              <div class="topicTitle_maintwo_w">
                <router-link to="#">
                  <img src="../../../static/home_w/sy_slices_w/wz_cy_1@2x.png">
                  <h1>狗狗DIY圣诞项圈制作...</h1>
                </router-link>
              </div>

              <p>
                <b>177</b>
                <strong>6</strong>
              </p>
            </li>

            <li>
              <div class="topicTitle_mainone_w">
                <router-link to="#">
                  <img src="../../../static/home_w/sy_slices_w/tx_cy_1@2x.png">
                </router-link>
                <p>
                  <i>萌萌哒见面了...</i>
                  <em>小 主 红 人</em>
                </p>
                <span>+关注</span>
              </div>
              <div class="topicTitle_maintwo_w">
                <router-link to="#">
                  <img src="../../../static/home_w/sy_slices_w/wz_cy_1@2x.png">
                  <h1>狗狗DIY圣诞项圈制作...</h1>
                </router-link>
              </div>

              <p>
                <b>177</b>
                <strong>6</strong>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

    <script>
import TopicTliteHeader_w from "./topicList/topicListHeader";
import BScroll from "better-scroll";
export default {
  components: {
    TopicTliteHeader_w: TopicTliteHeader_w
  },
  filters: {},
  mounted() {
    this.scroll=new BScroll(this.$refs.topicTitle_w,{
        //只有设置为true pulling才能使用
        pullUpLoad:true,
        click:true,

    });
  }
};
</script>

    <style scoped>
#topicTltle_w {
  width: 100%;
  height: 100%;
}
#topicTltle_w > .topicTitle_scroll_w {
  width: 100%;
  height: 100%;
  position: fixed;
}

#topicTltle_main_w {
  width: 100%;
  height: 100%;
}
#topicTltle_main_w > ul {
  width: 100%;
  height: auto;
  background: rgba(238, 238, 238, 1);
  overflow: hidden;
}
#topicTltle_main_w > ul > li {
  width: 100%;
  height: 6.49rem;
  margin: 0.3rem 0rem;
  background: #ffffff;
  padding: 0rem 0.26rem;
}
#topicTltle_main_w > ul > li > .topicTitle_mainone_w {
  width: 100%;
  height: 1.54rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#topicTltle_main_w > ul > li > .topicTitle_mainone_w > a {
  display: block;
  width: 1rem;
  height: 1rem;
}
#topicTltle_main_w > ul > li > .topicTitle_mainone_w > a > img {
  width: 1rem;
  height: 1rem;
}
#topicTltle_main_w > ul > li > .topicTitle_mainone_w > p {
  width: 65%;
  height: 1.54rem;
  margin-left: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.3rem 0rem 0.5rem;
}
#topicTltle_main_w > ul > li > .topicTitle_mainone_w > p > i {
  display: block;
  width: 90%;
  font-style: normal;
  font-size: 0.32rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(22, 22, 22, 1);
}
#topicTltle_main_w > ul > li > .topicTitle_mainone_w > p > em {
  font-style: normal;
  display: block;
  width: 90%;
  font-size: 0.2rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(237, 60, 60, 1);
}
#topicTltle_main_w > ul > li > .topicTitle_mainone_w > span {
  display: block;
  width: 1.22rem;
  height: 0.46rem;
  line-height: 0.5rem;
  line-height: 0.46rem;
  text-align: center;
  border: 2px solid #cccccc;
  border-radius: 0.08rem;
  font-size: 0.22rem;
  font-family: PingFang-SC-Regular;
  font-weight: bold;
  color: rgba(252, 53, 53, 1);
  margin-top: 0.4rem;
  align-self: flex-start;
}
.topicTitle_maintwo_w {
  width: 100%;
  height: 3.64rem;
  margin-bottom: 0.5rem;
}
.topicTitle_maintwo_w > a {
  width: 100%;
  height: 3.64rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.topicTitle_maintwo_w > a > img {
  width: 5.82rem;
  height: 3.2rem;
  margin-bottom: 0.17rem;
}
.topicTitle_maintwo_w > a > h1 {
  width: 5.82rem;
  height: 3.2rem;
  font-size: 0.28rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: rgba(22, 22, 22, 1);
}
#topicTltle_main_w > ul > li > p {
  width: 100%;
  height: 0.5rem;
  display: flex;
  justify-content: flex-end;
}
#topicTltle_main_w > ul > li > p > b {
  display: block;
  width: 14%;
  height: 100%;
  font-size: 0.24rem;
  text-indent: 0.45rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  line-height: 0.45rem;
  color: #cccccc;
  background: url(../../../static/home_w/sy_center_w/dianzhan.png) no-repeat
    left center;
}
#topicTltle_main_w > ul > li > p > strong {
  display: block;
  width: 10%;
  height: 100%;
  text-indent: 0.54rem;
  font-size: 0.24rem;
  font-family: PingFang-SC-Regular;
  font-weight: 400;
  color: #cccccc;
  line-height: 0.45rem;
  background: url(../../../static/home_w/sy_center_w/xiaoxi.png) no-repeat left
    center;
}
</style>

