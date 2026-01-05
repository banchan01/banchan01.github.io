<template>
    <div
        class="group p-8 bg-white rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-100/40 hover:-translate-y-1 cursor-pointer h-full relative overflow-hidden">
        <div
            class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
        </div>
        <div class="flex flex-col h-full justify-between relative">
            <div>
                <h3
                    class="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors tracking-tight">
                    {{ title }}
                </h3>
                <p class="mt-4 text-sm text-slate-600 leading-relaxed font-normal line-clamp-3">
                    {{ description }}
                </p>
            </div>
            <div class="mt-6 flex flex-wrap gap-2">
                <span v-for="tag in tags" :key="tag"
                    class="px-3 py-1 text-xs font-semibold tracking-wide bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 transition-colors">
                    {{ tag }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup>
// 부모 컴포넌트(index.astro)에서 데이터를 받아올 수 있게 설정합니다.
defineProps({
    title: String,
    description: String,
    tags: Array
})
</script>