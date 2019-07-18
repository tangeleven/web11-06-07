<template>
   <el-breadcrumb class="app-breadcrumb" separator="/">
       <transition-group>
           <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
               <span v-if="item.redirect === 'noRedirect' || index===levelList.length-1" class="no-redirect">{{item.meta.title}}</span>
               <a v-else @click.prevent="handleLink(item)">{{item.meta.title}}</a>
           </el-breadcrumb-item>
       </transition-group>
   </el-breadcrumb>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import pathToRegexp from 'path-to-regexp'
export default {
    // 只有写data函数的时候，会报 vue 警告，不知道为什么
    data() {
        return {
            levelList: null
        }
    },
    watch: {
        $route: {
            handler(route) {
                this.getBreadcrumb();
            },
            immediate: true
        }
    },
    methods: {
        getBreadcrumb() {
            console.log(this.$route.matched);
            let matched = this.$route.matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false);

            const first = matched[0];

            if (!this.isHome(first)) {
                matched = [{ path: '/', redirect: '/home', meta: { title: '首页' } }].concat(matched);
            }

            this.levelList = matched;
        },
        isHome(route) {
            const name = route && route.name
            if (!name) {
                return false;
            }
            return name.trim().toLocaleLowerCase === "home".toLocaleLowerCase;
        },
        pathCompile(path) {
            const { params } = this.$route;
            var toPath = pathToRegexp.compile(path);
            return toPath(params);
        },
        handleLink(item) {
            const { redirect, path } = item;
            if (redirect) {
                this.$router.push(redirect);
                return;
            }

            this.$router.push(this.pathCompile(path))
        }
    }
}

</script>
<style scoped>
.app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 8px;
}
.app-breadcrumb.el-breadcrumb .no-redirect {
    color: #97a8be;
    cursor: text;
}
/* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
    transition: all .5s;
}
.breadcrumb-enter,
.breadcrumb-leave-active {
    opacity: 0;
    transform: translateX(20px);
}
.breadcrumb-move {
    transition: all .5s;
}
.breadcrumb-leave-active {
    position: absolute;
}
</style>