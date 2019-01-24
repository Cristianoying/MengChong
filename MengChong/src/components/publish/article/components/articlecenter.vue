<template>
  <div id="articlescenter" >
    <div class="cover" @click="addphoto()"  v-show ="flag" ref = "divGenres">
      <input type="file" accept="image/*" capture="camera" @change="onFileChange($event)">
    </div>
    <div class="addcover" v-show ="flag">点击设置封面</div>
  </div>
</template>
<script>
import lrz from "lrz";
export default {
  data() {
    return {
      imgarr: [],
      flag:true
    };
  },
  methods: {
    addphoto(e) {
      let els = this.$refs.divGenres.querySelectorAll("input[type=file]");
      els[0].click();
      return false;
    },
    onFileChange: function(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      var reader = new FileReader();
        // 将文件以Data URL形式进行读入页面
        reader.readAsDataURL(files[0]);
        reader.onload = function(e){
            console.log(this.result)
          document.getElementById("articlescenter").style.background = "url("+ this.result+")";
        

            
        } ;
         this.flag = false;
    },
    
    
  }
};
</script>
<style lang="scss">
#articlescenter {
  width: 100%;
  height: 3.33rem;
  background: rgba(238, 238, 238, 1);
  border-radius: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .cover {
    width: 0.48rem;
    height: 0.4rem;
    background: url(../../../../../static/publishs_img/publisharticle_slices/pubarticle2x.png)
      no-repeat;
    background-size: 100% 100%;
    input {
      display: none;
    }
  }
  .addcover {
    font-size: 0.2rem;
    font-family: PingFang-SC-Bold;
    font-weight: bold;
    color: rgba(98, 98, 98, 1);
    line-height: 70px;
  }
}
</style>