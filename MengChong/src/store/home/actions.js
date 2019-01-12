
import axios from "axios";
export default {
    handleTopicList({commit}){
        axios({
            method:"post",
            url:"/api/mock/5c370dfcf93efc493ce9c7ca/example/topic/getAll",
        })
        .then((data)=>{
            commit("handleTopicList",data.data);
        })
    },

    //https://www.easy-mock.com/mock/5c370dfcf93efc493ce9c7ca/example/ goods/bargain/page
    handleTimeList({commit}){
        axios({
            method:"post",
            url:"/api/mock/5c370dfcf93efc493ce9c7ca/example/goods/bargain/page",
        })
        .then((data)=>{
            commit("handleTimeList",data.data);
        })
    },
}