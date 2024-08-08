<template>
    <div class="bg-[#E3E3E3] min-h-screen text-[#FFFFFF]">
        <Hero />
        <Navbar />
        <Sidebar />
        <Video />
        <Evaluate />
    </div>
</template>

<script>
    import Navbar from '@/components/Navbar.vue'
    import Sidebar from '@/components/Sidebar.vue'
    import Hero from "@/components/Case/CaseHero.vue"
    import Video from "@/components/Case/Video.vue"
    import Evaluate from "@/components/Case/Evaluate.vue"

    export default {
        name: 'Case',
        components: {
            Hero,
            Navbar,
            Sidebar,
            Evaluate,
            Video,

        }
    }
</script>

