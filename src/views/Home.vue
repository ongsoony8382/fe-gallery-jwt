<script setup>
import { getItems } from '@/services/itemService';
import { onMounted, reactive } from 'vue';
import Card from '@/components/Card.vue';

const state = reactive({
  items: [],
});

/*
이 화면이 마운트될 때 딱 한 번 getItems 통신하시고, 
통신으로 받아온 데이터를 콘솔에 뿌려주시오. */

onMounted(async () => {
  const res = await getItems();
  if (res.status !== 200) {
    return;
  }
  console.log('res.data:', res.data);
  state.items = res.data;
});
</script>

<template>
  <div class="home">
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-3">
          <div class="col" v-for="item in state.items" :key="item.id">
            <Card :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
