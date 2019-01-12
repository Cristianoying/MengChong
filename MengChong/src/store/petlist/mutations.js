export default {
    //点击搜索框，查询到热门标签和个人历史记录
    getBeforHottagAndHisearch(state, params) {
        state.beforHottagAndHisearch = params;
    },
    //查询相关商品列表  狗
    getDogGoodsList(state, params) {
        state.dogGoodsList = [...state.dogGoodsList, ...params.dogGoodsList];
    },
    //查询相关商品列表  猫
    getCatGoodsList(state, params) {
        state.catGoodsList = [...state.catGoodsList, ...params.catGoodsList];
    },
    //查询相关商品列表  食物
    getPetFoodGoodsList(state, params) {
        state.petFoodGoodsList = [...state.petFoodGoodsList, ...params.petFoodGoodsList];
    }
}