<template>
    <div class="flex flex-col gap-8">
        <ExperienceCard v-for="(exp, index) in experiences" :key="index" :role="exp.role"
            :organization="exp.organization" :date="exp.date" class="cursor-pointer" @click="openModal(exp)" />

        <DetailModal :is-open="isModalOpen" :title="selectedExperience?.role" :website="selectedExperience?.website"
            :github="selectedExperience?.github" :subtitle="selectedExperience?.organization"
            :date="selectedExperience?.date" layout-mode="editorial" @close="closeModal">
            <template #header-meta>
                <div class="flex flex-wrap gap-2">
                    <span v-for="tag in selectedExperience?.tags" :key="tag"
                        class="px-3 py-1 text-sm font-semibold bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100">
                        {{ tag }}
                    </span>
                </div>
            </template>
            <template #default>
                <div class="prose-content space-y-4 text-slate-600 leading-relaxed" v-html="selectedExperience?.html">
                </div>
            </template>
        </DetailModal>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ExperienceCard from './ExperienceCard.vue';
import DetailModal from './DetailModal.vue';

const props = defineProps({
    experiences: {
        type: Array,
        required: true
    }
});

const isModalOpen = ref(false);
const selectedExperience = ref(null);

const openModal = (exp) => {
    selectedExperience.value = exp;
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    isModalOpen.value = false;
    setTimeout(() => {
        selectedExperience.value = null;
    }, 300);
    document.body.style.overflow = '';
};
</script>
