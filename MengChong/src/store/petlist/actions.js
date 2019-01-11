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
    //查询相关商品列表  狗
    getDogGoodsList({ commit }) {
        axios({
            method: "post",
            url: "api/mock/5c37f86a74255b71a6a8cb64/getDogGoodsList"
        }).then((data) => {
            if (data.data.code === 1000) {
                commit("getDogGoodsList", data.data.data)
            }
        })
    },
    //查询相关商品列表  猫
    getCatGoodsList({ commit }) {
        axios({
            method: "post",
            url: "api/mock/5c37f86a74255b71a6a8cb64/getCatGoodsList"
        }).then((data) => {
            if (data.data.code === 1000) {
                commit("getCatGoodsList", data.data.data)
            }
        })
    }
}