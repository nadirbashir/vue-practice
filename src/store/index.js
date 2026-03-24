import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      isLoadingProducts: false,
      productsFetchError: null,
      products: [],
      cart: [],
    }
  },
  getters: {
    GET_PRODUCTS(state) {
      return state.products
    },
    GET_IS_LOADING_PRODUCTS(state) {
      return state.isLoadingProducts
    },
    GET_PRODUCTS_FETCH_ERROR(state) {
      return state.productsFetchError
    },
    GET_CART_ITEMS(state) {
      return state.cart
    },
  },
  mutations: {
    SET_LOADING_PRODUCTS(state, isLoading) {
      state.isLoadingProducts = isLoading
    },
    SET_PRODUCTS(state, products) {
      state.products = products
    },
    SET_PRODUCTS_FETCH_ERROR(state, err) {
      state.productsFetchError = err
    },
    ADD_TO_CART(state, product) {
      const existingItem = state.cart.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId)
    },
  },
  actions: {
    async FETCH_PRODUCTS({ commit }) {
      try {
        commit('SET_LOADING_PRODUCTS', true)
        const response = await fetch('https://dummyjson.com/products/category/smartphones')
        const result = await response.json()
        commit('SET_PRODUCTS', result.products)
      } catch (err) {
        commit('SET_PRODUCTS_FETCH_ERROR', err)
      } finally {
        commit('SET_LOADING_PRODUCTS', false)
      }
    },
  },
})

export default store
