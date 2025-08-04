import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'

export const useAccountStore = defineStore("account", () => {
  const state = reactive({
    checked: false, // 로그인 여부를 확인했는지 여부
    loggedIn: false // 현재 로그인 여부 

  });

  const setChecked = val => state.checked = val; 

  const setLoggedIn = val => state.loggedIn = val;

  return { state, setChecked, setLoggedIn};
});