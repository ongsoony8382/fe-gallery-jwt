<script setup>
import { reactive, onMounted } from 'vue';
import { getItems, removeItem, removeAllItem } from '@/services/cartService';

const state = reactive({
  items: [],
});

const load = async () => {
  const res = await getItems();
  if (res.status !== 200) {
    return;
  }
  console.log('res.data:', res.data);
  state.items = res.data;
};

onMounted(() => {
  load();
});


const remove = async (cartId) => {
  const res = await removeItem(cartId);
  console.log(res);
  if (res === undefined || res.status != 200) {
    return;
  }
  // 다시 리로딩 하거나
  // 또는 방금 삭제한 객체만 state.items에서 삭제한다.
  load();
};


const clear = async () => {
  const res = await removeAllItem();
  console.log(res);
  if(res === undefined || res.status != 200){
    return;
  };
  state.items = [];
}

</script>

<template>
  <div class="cart">
    <div class="container">
      <template v-if="state.items.length">
        <ul class="items">
          <li v-for="item in state.items" :key="item.id">
            <img
              :alt="`상품 사진(${item.name})`"
              :src="`/pic/item/${item.imgPath}`"
            />
            <b class="name">{{ item.name }}</b>
            <span class="price">
              {{
                (
                  item.price -
                  (item.price * item.discountPer) / 100
                ).toLocaleString()
              }}원
            </span>
            <span class="remove float-end" @click="remove(item.id)" title="삭제"
              >&times;</span
            >
          </li>
        </ul>

        <div class="act d-flex justify-content-between">
          <button @click="clear" class="btn btn-danger">장바구니 비우기</button>
          <router-link to="/order" class="btn btn-primary"
            >주문하기</router-link
          >
        </div>
      </template>
      <div class="text-center py-5" v-else>장바구니가 비어있습니다.</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart {
  .items {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    border: 1px solid #eee;
    margin-top: 25px;
    margin-bottom: 25px;
  }

  img {
    width: 150px;
    height: 150px;
  }

  .name {
    margin-left: 25px;
  }

  .price {
    margin-left: 25px;
  }

  .remove {
    cursor: pointer;
    font-size: 30px;
    padding: 5px 15px;
  }
}

.act .btn {
  width: 300px;
  display: block;
  margin: 0 auto;
  padding: 30px 50px;
  font-size: 20px;
}
</style>
