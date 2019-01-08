import axios from "axios";
export default{
    handleSelect({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/data"
        }).then((data)=>{
            commit("handleSelect",data.data);
        })
    }
}