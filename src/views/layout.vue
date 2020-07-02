<template>
    <section class="wrap">
        <aside class="aside">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
            >
                <el-menu-item v-for="(item,index) in menuArr" :key="'menu_'+index" index="item.id">
                    <i class="el-icon-menu"></i>
                    <span slot="title">{{item.name}}</span>
                </el-menu-item>
            </el-menu>
        </aside>
        <main class="main">
            <router-view />
        </main>
    </section>
</template>

<script>
import leftMenu from "@/menu/menu.js";

export default {
    data() {
        return {
            menuArr: []
        };
    },
    created() {
        // console.log(leftMenu);
        this.menuArr = leftMenu;
        let name='fyx';
        let age=20;
        let desc = `${name} is ${age} years old.`;
        let b=this.replace(desc);
        // console.log('b',b)
    },
    methods: {
        replace(desc) {
            let a= desc.replace(/\$\{([^}]+)\}/g, function(matched, key) {
                console.log(matched);
                console.log( key);
                return eval(key);
            });
            console.log(a)
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
};
</script>

<style scoped>
.wrap {
    display: flex;
}
.aside {
    width: 300px;
}
.main {
    width: calc(100% - 300px);
}
</style>