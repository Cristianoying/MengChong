export default {
    //点击搜索框，查询到热门标签和个人历史记录
    getBeforHottagAndHisearch(state, params) {
        state.beforHottagAndHisearch = params;
    },
    //查询相关商品列表  狗
    getDogGoodsList(state, params) {
        state.dogGoodsList = params;
    },
    //查询相关商品列表  狗
    getCatGoodsList(state, params) {
        state.catGoodsList = params;
        console.log(params)
    }
}