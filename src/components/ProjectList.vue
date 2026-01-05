<template>
    <div class="flex flex-col gap-8">
        <ProjectCard v-for="project in projects" :key="project.slug" :title="project.data.title"
            :description="project.data.description" :tags="project.data.tags" class="cursor-pointer"
            @click="openModal(project)" />

        <DetailModal :is-open="isModalOpen" :title="selectedProject?.title" :image="selectedProject?.image"
            :description="selectedProject?.description" :github="selectedProject?.github" @close="closeModal">
            <template #header-meta>
                <div class="flex flex-wrap gap-2">
                    <span v-for="tag in selectedProject?.tags" :key="tag"
                        class="px-3 py-1 text-sm font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                        {{ tag }}
                    </span>
                </div>
            </template>
            <template #default>
                <div class="prose-content space-y-4 text-slate-600 leading-relaxed" v-html="selectedProject?.html">
                </div>
            </template>
        </DetailModal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ProjectCard from './ProjectCard.vue';
import DetailModal from './DetailModal.vue';

const props = defineProps({
    projects: {
        type: Array,
        required: true
    }
});

const isModalOpen = ref(false);
const selectedProject = ref(null);

const openModal = (project) => {
    // Construct the object structure expected by Modal
    // The props.projects items have { data, html, ... }
    selectedProject.value = {
        title: project.data.title,
        description: project.data.description,
        tags: project.data.tags,
        image: project.data.image,
        github: project.data.github,
        html: project.html
    };
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
};

const closeModal = () => {
    isModalOpen.value = false;
    setTimeout(() => {
        selectedProject.value = null;
    }, 300); // Wait for transition
    document.body.style.overflow = '';
};
</script>
