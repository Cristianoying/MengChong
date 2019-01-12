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
            url: "api/mock/5c37f86a74255b71a6a8cb64/getDogGoodsList"
        }).then((data) => {
            if (data.data.code === 1000) {
                commit("getDogGoodsList", data.data.data)
            }
        })
    },
    getDogGoodsListAgain({ dispatch }) { //无限加载
        dispatch("getDogGoodsList")
    },
    getCatGoodsList({ commit }) { //查询相关商品列表  猫
        axios({
            method: "post",
            url: "api/mock/5c37f86a74255b71a6a8cb64/getCatGoodsList"
        }).then((data) => {
            if (data.data.code === 1000) {
                commit("getCatGoodsList", data.data.data)
            }
        })
    },
    getCatGoodsListAgain({ dispatch }) { //无限加载
        dispatch("getCatGoodsList")
    },
    getPetFoodGoodsList({ commit }) { //查询相关商品列表  食物
        axios({
            method: "post",
            url: "api/mock/5c37f86a74255b71a6a8cb64/getPetFoodGoodsList"
        }).then((data) => {
            if (data.data.code === 1000) {
                commit("getPetFoodGoodsList", data.data.data)
            }
        })
    },
    getFoodGoodsListAgain({ dispatch }) { //无限加载
        dispatch("getPetFoodGoodsList")
    },
}