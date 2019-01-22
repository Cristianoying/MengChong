import Community from "@/components/community/community"
import Communityind from '@/components/community/components/selected/index.vue'
import Followind from '@/components/community/components/follow/index.vue'
import Articleind from '@/components/community/components/article/index.vue'
import Dynamic from '@/components/community/components/dynamic/index.vue'


let community = [
  {
    path: '/community',
    name: 'community',
    redirect: '/community/selected',
    component: Community,
    children: [{
            path: '/community/selected',
            name: 'selected',
            component: Communityind,
            meta: {
                isFooter: true,
                iscommuntop: true
            }
        },
        {
            path: '/community/dynamic',
            name: 'dynamic',
            component: Dynamic,
            meta: {
                isFooter: false,
                iscommuntop: false
            }
        },
        {
            path: '/community/follow',
            name: 'follow',
            component: Followind,
            meta: {
                isFooter: true,
                iscommuntop: true
            }
        },
        {
            path: '/community/article_a',
            name: 'article_a',
            component: Articleind,
            meta: {
                isFooter: true,
                iscommuntop: true
            }
        },
    ],
    meta: {
        isFooter: true
    }
}
]

export default community;
