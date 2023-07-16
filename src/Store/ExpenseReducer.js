import {createSlice} from '@reduxjs/toolkit'


const initialstate = {
    Items: [],
    totalAmount:0,
    isPremium : false
}

const expenseReducers = createSlice({
    name: 'expense',
    initialState:initialstate,
    reducers:{
        addItem(state,action){
            state.Items.push(action.payload)
            state.totalAmount = Number(state.totalAmount) + Number(action.payload.money)
            if(state.totalAmount>=10000){
                state.isPremium = true
            }
            
        },
        removeItem(state,action){
            const ItemIndex = state.Items.findIndex(x=>x.name===action.payload)
            const Item = state.Items[ItemIndex]
            state.Items.splice(ItemIndex,1)
            state.totalAmount = state.totalAmount - Item.money
            if(state.totalAmount<10000){
                state.isPremium = false
            }

        }
    }
})

export const expenseActions = expenseReducers.actions

export default expenseReducers



