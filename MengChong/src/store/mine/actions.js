import axios from 'axios'
export default {
  getmineInfoActions_d({commit}){
    //获取我的页面的信息==》
    //https://www.easy-mock.com/mock/5c34ca878fafe728d1f70c7d/userinfo
    axios.get("/api/mock/5c34ca878fafe728d1f70c7d/userinfo")
      .then(({data})=>{
        commit("getmineInfoMutations",data.userInfo)
      })
  },
  getCommentAllActions({commit}){
    //获取我的页面里面的被评论页面的初始信息
    axios.get("/api/mock/5c34ca878fafe728d1f70c7d/comment/getall").then(({data})=>{
      commit("getCommentAllMutations",data.commentList)
    })
  },
  getLikeAllActions({commit}){
    //获取我的页面里面的被赞页面的初始信息
    axios.get("api/mock/5c34ca878fafe728d1f70c7d/like/getall").then(({data})=>{
      commit("getLikeAllMutations",data.likelist)
    })
  }
}
