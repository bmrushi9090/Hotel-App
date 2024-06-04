import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'veg',
    initialState: {
        vegCart: [],
        totalPrice: 0,
        totalQuantity: 0
    },
    reducers: {
        addToCart: (state, action) => {
            let find = state.vegCart.findIndex((data) => data.id === action.payload.id)
            find >= 0 ? state.vegCart[find].quantity += 1 : state.vegCart.push(action.payload)
        },
        removeVegCart: (state, action) => {
            state.vegCart = state.vegCart.filter((data) => data.id !== action.payload)
        },
        vegCartTotal: (state, action) => {
            let { totalQuantity, totalPrice } = state.vegCart.reduce((vegTotal, VegItem) => {
                const { price, quantity } = VegItem
                const itemTotal = price * quantity
                vegTotal.totalPrice += itemTotal
                vegTotal.totalQuantity += quantity
                return vegTotal
            },
                {
                    totalPrice: 0,
                    totalQuantity: 0
                }
            )
            state.totalPrice = totalPrice
            state.totalQuantity = totalQuantity
        },
        increaseVegQuantity: (state, action) => {
            state.vegCart = state.vegCart.map((data) => {
                if (data.id === action.payload) {
                    return { ...data, quantity: data.quantity + 1 }
                }
                return data
            })
        },
        decreaseVegQuantity: (state, action) => {
            state.vegCart = state.vegCart.map((data) => {
                if (data.id === action.payload && data.quantity > 1) {
                    return { ...data, quantity: data.quantity - 1 }
                }
                return data
            })
        }
    }
})


export const { addToCart, removeVegCart, vegCartTotal, increaseVegQuantity, decreaseVegQuantity } = counterSlice.actions

export default counterSlice.reducer