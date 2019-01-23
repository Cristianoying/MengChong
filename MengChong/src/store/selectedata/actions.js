import axios from "axios";
export default{
    handleSelect({commit}){
        axios({
            method:"get",
            // url:"http://localhost:3000/data",
            url:"/api/mock/5c370eb7f2375651600a22c2/example/dynamic/most"
        }).then((data)=>{
            commit("handleSelect",data.data.data);
        })
    },
     // https://www.easy-mock.com/mock/5c370eb7f2375651600a22c2/example/dynamic/getAll
     //https://www.easy-mock.com/mock/5c370eb7f2375651600a22c2/example/dynamic/most
     handlemockone({commit}){
        axios({
            method:"get",
            url:"/api/mock/5c370eb7f2375651600a22c2/example/dynamic/getAll"
        }).then((data)=>{
            // console.log(data.data);
            
            commit("handlemockone",data.data.data)
        })
     }
}
