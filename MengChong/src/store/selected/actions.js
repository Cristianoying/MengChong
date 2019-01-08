import axios from "axios";
export default{
    handleSelect({commit}){
        axios({
            method:"get",
            url:"http://localhost:3000/data"
        }).then((data)=>{
            console.log(data.data)
            commit("handleSelect",data.data);
        })
    }
}