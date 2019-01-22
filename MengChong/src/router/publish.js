import Publish from "@/components/publish/public/publish"
import Publicvideo from "@/components/publish/video/publicvideo"
import Publictrends from "@/components/publish/trends/publictrends"
import Publicarticle from "@/components/publish/article/publicarticle"


let publish = [

  {
    path: '/publish',
    name: 'publish',
    component: Publish

  },
  {
    path: '/publish/trends',
    name: 'trends',
    component: Publictrends
  },
  {
    path: '/publish/video',
    name: 'video',
    component: Publicvideo
  },
  {
    path: '/publish/article',
    name: 'article',
    component: Publicarticle
  }
 ]
export default publish;
