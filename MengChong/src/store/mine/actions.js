import axios from 'axios'
export default {
  getmineInfoActions_d({commit}){
    //获取我的页面的信息==》
    axios.get("http://localhost:3000/userInfo")
      .then(({data})=>{
        //console.log(data);
        commit("getmineInfoMutations",data)
      })
  },
  getLikeAllActions({commit}){
    //获取我的页面里面的获赞页面的初始信息
    axios.get("/api/mock/5c348acb571e3a78765765a7/like/getall").then(({data})=>{
      console.log(data.likelist);
      commit("getLikeAllMutations",data.likelist)
    })
  }
}
