<template>
    <div class="app-wrapper">
        <sidebar class="sidebar-container" />
        <div class="main-container">
            <router-view />
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/Sidebar/index'
export default {
    components: {
        Sidebar
    }
}
</script>
