<template>
    <div id="video">
        <Videotop-com></Videotop-com>
        <Videocenter-com></Videocenter-com>
        <Videobottom-com></Videobottom-com>
    </div>
    
</template> 
<script>
    import Videotop from "./components/videotop";
    import Videocenter from "./components/videocenter";
    import Videobottom from "./components/videobottom";
    export default {
        components:{
           "Videotop-com":Videotop,
           "Videocenter-com":Videocenter,
           "Videobottom-com":Videobottom
        }
    }
</script>
<style lang="scss">

</style>
