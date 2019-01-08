import axios from 'axios'
export default {
  getmineInfoActions_d({commit}){
    //获取我的页面的信息==》
    axios.get("http://localhost:3000/userInfo")
      .then(({data})=>{
        //console.log(data);
        commit("getmineInfoMutations",data)
      })
  }
}
