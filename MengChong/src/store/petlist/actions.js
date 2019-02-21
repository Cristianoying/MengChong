import axios from "axios"
export default {
    //点击搜索框，查询到热门标签和个人历史记录
    getBeforHottagAndHisearch({ commit }) {
        axios({
            method: "post",
            url: "api/mock/5c37f86a74255b71a6a8cb64/getBeforHottagAndHisearc",
        }).then((data) => {
            if (data.data.code === 1000) {
                commit("getBeforHottagAndHisearch", data.data.data)
            }
        })
    },
    getDogGoodsList({ commit }) { //查询相关商品列表  狗
        axios({
            method: "post",
            url: "api/getDogGoodsList"
        }).then((data) => {
                commit("getDogGoodsList", data.data)
        })
    },
    getDogGoodsListAgain({ dispatch }) { //无限加载 狗
        dispatch("getDogGoodsList")
    },
    getCatGoodsList({ commit }) { //查询相关商品列表  猫
        axios({
            method: "post",
            url: "api/getCatGoodsList"
        }).then((data) => {
            console.log(data)
                commit("getCatGoodsList", data.data)
        })
    },
    getCatGoodsListAgain({ dispatch }) { //无限加载 猫
        dispatch("getCatGoodsList")
    },
    getPetFoodGoodsList({ commit }) { //查询相关商品列表  食物
        axios({
            method: "post",
            url: "api/getPetFoodGoodsList"
        }).then((data) => {
                commit("getPetFoodGoodsList", data.data)
        })
    },
    getFoodGoodsListAgain({ dispatch }) { //无限加载 食物
        dispatch("getPetFoodGoodsList")
    },
    getGoodsByName({ commit },params) { //搜索列表相关商品
        axios({
            method: "post",
            url: "api/getGoodsByName",
            data:{search:params}
        }).then((data) => {
                commit("getGoodsByName", data.data)
        })
    },
    // getGoodsByNameAgain({ dispatch }) {
    //     dispatch("getGoodsByName")
    // }
    getPetDetails({commit},params){
            axios({
                method:"post",
                url:"api/getGoods",
                data:params
            }).then((data)=>{
                commit("getPetDetails",data.data)
            })
    }
}