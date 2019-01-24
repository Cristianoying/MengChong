
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

  
    handleTimeList({commit}){
        axios({
            method:"post",
            url:"/api/mock/5c370dfcf93efc493ce9c7ca/example/goods/bargain/page",
        })
        .then((data)=>{
            commit("handleTimeList",data.data);
        })
    },
    //请求动态详情
    handleDongTai({commit}){
        axios({
            method:"post",
            url:"/api/mock/5c370dfcf93efc493ce9c7ca/example/dynamic/mine/getAll",
        })
        .then((data)=>{
            commit("handleDongTai",data.data);
        })
    },
    //请求话题动态列表
    //https://www.easy-mock.com/mock/5c370dfcf93efc493ce9c7ca/example/dynamic/getTopicBytopicId
    topicUserList({commit}){
        axios({
            method:"post",
            url:"/api/mock/5c370dfcf93efc493ce9c7ca/example/dynamic/getTopicBytopicId",
        })
        .then((data)=>{
            commit("topicUserList",data.data);
        })
    },
}