<template>
    <Transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <div v-if="zoomedImage"
            class="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            @click="zoomedImage = null">
            <img :src="zoomedImage"
                class="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-zoom-out" />
            <button class="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
    </Transition>

    <Transition name="modal">
        <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" role="dialog"
            aria-modal="true">
            <!-- Backdrop -->
            <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" @click="$emit('close')">
            </div>

            <!-- Modal Panel -->
            <div
                class="relative w-full w-11/12 md:w-3/4 max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] transition-all transform">

                <!-- Close Button (Absolute) -->
                <button @click="$emit('close')"
                    class="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-md hover:bg-white/40 rounded-full text-slate-800 transition-colors">
                    <span class="sr-only">Close</span>
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <!-- Scrollable Content -->
                <div class="overflow-y-auto custom-scrollbar h-full">

                    <!-- Hero Image -->
                    <div v-if="image" class="w-full h-64 sm:h-80 relative">
                        <img :src="image" :alt="title" class="w-full h-full object-cover" />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 class="absolute bottom-6 left-8 text-3xl font-bold text-white font-display drop-shadow-md">
                            {{ title }}
                        </h3>
                    </div>

                    <!-- Content Body -->
                    <div class="p-8 sm:p-10" :class="{ 'editorial-theme': layoutMode === 'editorial' }">
                        <!-- Fallback Title if no Image -->
                        <div v-if="!image" class="mb-8 border-b border-slate-100 pb-6">
                            <h3 class="text-3xl font-bold text-slate-900 font-display">{{ title }}</h3>
                        </div>

                        <!-- Header: Tags (Left) & GitHub Link (Right) - Project Style -->
                        <div class="mb-8 flex justify-between items-start gap-4">
                            <!-- Tags Slot -->
                            <slot name="header-meta"></slot>

                            <div class="flex flex-wrap gap-3 justify-end">
                                <a v-if="github" :href="github" target="_blank" rel="noopener noreferrer"
                                    class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all shadow-sm group !no-underline"
                                    aria-label="View on GitHub">
                                    <svg class="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors"
                                        fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <span>GitHub Repository</span>
                                </a>
                            </div>
                        </div>

                        <!-- Highlighted Description -->
                        <div v-if="description" class="mb-8 pb-8 border-b border-slate-100 flex gap-4 items-start">
                            <svg class="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                            <p class="text-xl text-slate-900 font-medium leading-relaxed">
                                {{ description }}
                            </p>
                        </div>

                        <!-- Main Content (Intro + What I Did + Insights) -->
                        <div class="prose-content" @click="handleContentClick">
                            <!-- Integrated Overview for Editorial Mode -->
                            <div v-if="layoutMode === 'editorial'" class="mb-8">
                                <h2 class="!mt-0">Overview</h2>
                                <div class="not-prose flex flex-col gap-1 mt-6 mb-8">
                                    <div class="flex items-baseline gap-2 text-slate-600">
                                        <!-- Website Link (Integrated into Title) -->
                                        <span class="font-bold text-lg leading-none text-slate-800">
                                            {{ subtitle || 'Organization' }}
                                        </span>

                                        <span class="text-slate-300 leading-none">|</span>
                                        <span class="text-base font-medium text-slate-500 leading-none">
                                            {{ date }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <slot></slot>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </Transition>
</template>

<script setup>
import { ref } from 'vue';

const zoomedImage = ref(null)

const handleContentClick = (event) => {
    const target = event.target
    if (target.tagName === 'IMG' && target.closest('.graph-carousel')) {
        zoomedImage.value = target.src
    }
}

defineProps({
    isOpen: Boolean,
    title: String,
    image: String,
    description: String,
    subtitle: String, // Changed logic to accept subtitle/organization manually
    date: String,     // Added date prop manually since it's now direct
    github: String,
    website: String,
    layoutMode: {
        type: String,
        default: 'default' // 'default' | 'editorial'
    }
})

defineEmits(['close'])
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
    opacity: 0;
    transform: scale(0.95);
}

/* Base Prose Styles (For Projects / Default) */
:deep(.prose-content) {
    @apply text-lg text-slate-600 leading-8;
}

:deep(.prose-content h1) {
    @apply text-3xl font-extrabold text-slate-900 mt-10 mb-6 tracking-tight;
}

:deep(.prose-content h2) {
    @apply text-2xl font-bold text-slate-900 mt-20 mb-6 tracking-tight flex items-center border-none;
}

:deep(.prose-content h2)::before {
    content: '';
    @apply w-2 h-8 bg-emerald-500 rounded-full mr-3 flex-shrink-0;
}

:deep(.prose-content h3) {
    @apply text-xl font-bold text-slate-900 mt-8 mb-3;
}

:deep(.prose-content h4) {
    @apply text-lg font-semibold text-slate-900 mt-6 mb-2;
}

:deep(.prose-content p) {
    @apply mb-6;
}

:deep(.prose-content ul) {
    @apply list-disc list-outside ml-6 mb-6 space-y-2 marker:text-emerald-500;
}

:deep(.prose-content ol) {
    @apply list-decimal list-outside ml-6 mb-6 space-y-2 marker:text-emerald-500;
}

:deep(.prose-content li) {
    @apply pl-1;
}

:deep(.prose-content strong) {
    @apply font-bold text-slate-900;
}

:deep(.prose-content blockquote) {
    @apply border-l-4 border-emerald-500 bg-slate-50 pl-4 py-3 pr-4 my-6 rounded-r-lg text-slate-700 italic;
}

:deep(.prose-content img) {
    @apply rounded-xl shadow-md my-8 border border-slate-100 w-full object-cover;
}

:deep(.prose-content a) {
    @apply text-emerald-600 underline decoration-emerald-300 decoration-2 underline-offset-2 hover:text-emerald-700 hover:decoration-emerald-500 transition-all;
}

:deep(.prose-content code) {
    @apply bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono border border-slate-200;
}

:deep(.prose-content pre) {
    @apply bg-slate-900 text-slate-50 p-4 rounded-xl overflow-x-auto my-6 text-sm leading-relaxed border border-slate-800;
}

:deep(.prose-content pre code) {
    @apply bg-transparent text-inherit p-0 border-none;
}

:deep(.prose-content hr) {
    @apply my-10 border-slate-200;
}

:deep(.prose-content table) {
    @apply w-full my-8 text-left border-collapse;
}

:deep(.prose-content th) {
    @apply border-b-2 border-slate-200 pb-3 font-bold text-slate-900;
}

:deep(.prose-content td) {
    @apply border-b border-slate-100 py-3 text-slate-600;
}


/* Editorial Mode Styles (Only if .editorial-theme class is present) */
.editorial-theme :deep(.prose-content) {
    @apply text-lg text-slate-700 leading-8 font-sans;
}

.editorial-theme :deep(.prose-content h1) {
    @apply text-3xl font-extrabold text-slate-900 mt-12 mb-6 tracking-tight border-b-2 border-emerald-100 pb-2 inline-block;
}

.editorial-theme :deep(.prose-content h2) {
    @apply text-2xl font-bold text-slate-800 mt-10 mb-8 tracking-tight flex items-center border-none pb-0;
}

.editorial-theme :deep(.prose-content h2)::before {
    content: '';
    @apply w-2 h-8 bg-emerald-500 rounded-full mr-3 flex-shrink-0;
}

.editorial-theme :deep(.prose-content ul) {
    @apply my-6 space-y-3 list-none ml-0;
}

.editorial-theme :deep(.prose-content li) {
    @apply pl-6 relative text-slate-700;
}

.editorial-theme :deep(.prose-content li)::before {
    content: '';
    @apply absolute left-0 top-3 w-2 h-2 bg-emerald-400 rounded-full;
}

.editorial-theme :deep(.prose-content blockquote) {
    @apply text-xl text-slate-700 leading-8 font-normal my-8 border-none p-0 bg-transparent not-italic;
}

.editorial-theme :deep(.prose-content blockquote)::before {
    content: none;
}

.editorial-theme :deep(.prose-content strong) {
    @apply font-bold text-slate-900;
}


/* Scrollbar Styling */
.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    @apply bg-slate-200 rounded-full hover:bg-slate-300;
}

/* Carousel */
:deep(.graph-carousel) {
    @apply flex overflow-x-auto gap-4 py-4 mb-6 scroll-smooth;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

:deep(.graph-carousel::-webkit-scrollbar) {
    height: 6px;
}

:deep(.graph-carousel::-webkit-scrollbar-thumb) {
    @apply bg-slate-200 rounded-full;
}

:deep(.graph-carousel img) {
    @apply w-auto h-40 object-contain rounded-lg shadow-sm border border-slate-100 flex-none bg-white;
    margin: 0 !important;
    scroll-snap-align: start;
    cursor: zoom-in;
}
</style>
