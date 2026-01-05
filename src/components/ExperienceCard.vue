<template>
    <div
        class="group p-8 bg-white rounded-2xl border border-slate-200 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-100/40 hover:-translate-y-1 cursor-pointer h-full relative overflow-hidden">
        <!-- Top Gradient Animation -->
        <div
            class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left">
        </div>

        <div class="flex flex-col h-full justify-between relative">
            <div>
                <!-- Header: Role | Date -->
                <div class="flex justify-between items-start gap-4 mb-2">
                    <h3
                        class="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors tracking-tight">
                        {{ role }}
                    </h3>
                    <span class="text-sm text-slate-400 font-medium whitespace-nowrap pt-1">
                        {{ date }}
                    </span>
                </div>

                <!-- Organization -->
                <div class="text-lg text-slate-600 font-medium">
                    {{ organization }}
                </div>
            </div>

            <!-- "View Details" Call to Action -->
            <div
                class="mt-8 flex items-center text-sm font-bold text-emerald-600 transition-all duration-300 transform group-hover:translate-x-2">
                View Details
                <svg class="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    role: String,
    organization: String,
    date: String
})
</script>
