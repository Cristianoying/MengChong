import axios from 'axios'
export default {
  getmineInfoActions_d({commit}){
    axios.get("http://localhost:3000/userInfo")
      .then(({data})=>{
        //console.log(data);
        commit("getmineInfoMutations",data)
      })
  }
}
