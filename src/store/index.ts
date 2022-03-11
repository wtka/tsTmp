import { InjectionKey } from 'vue';
import { createStore, useStore as baseUseStore, Store } from 'vuex';

const store = createStore({
  state: {
    /* 新開戶 = 1, 案件清單 = 2*/
    mode: '1',
    // /* 左側選單控制 */
    menuCollapse: {
      indentity: true, // 身分認證
      query: true, // 開戶前查詢
      updata: true, // 資料登錄
      setting: true, // 開戶設定
    },
  },

  mutations: {
    setMode(state, mode) {
      state.mode = mode;
    },
    setMenuCollapse(state, menuCollapse) {
      state.menuCollapse = menuCollapse;
    },
  },
  actions: {},
  modules: {},
});

type StoreState<T> = T extends { state: infer S } ? S : T;
type State = StoreState<typeof store>;
const storeKey: InjectionKey<Store<State>> = Symbol();

function useStore(): Store<State> {
  return baseUseStore(storeKey);
}

export { store, storeKey, useStore };
