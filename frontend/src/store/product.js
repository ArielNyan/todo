import {create} from 'zustand'

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({products}),
  createProduct: async (newProduct) => {
    if(!newProduct.name || !newProduct.price || !newProduct.image){
      return {sucess: false, message: 'Fill all Fields'}
    }
    const response = await fetch('http://localhost:4000/api/products', {
      method: 'POST',
      headers:{
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify(newProduct)
    })
    const data = await response.json()
    set((state) => ({products: [...state.products, data.data]}))
    return {sucess: true, message: 'product created sucessfully'}
  }
}))
