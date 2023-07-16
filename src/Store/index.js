import {configureStore} from '@reduxjs/toolkit'
import authReducer from './AuthReducer'
import expenseReducers from './ExpenseReducer'


const store = configureStore({reducer:{auth:authReducer.reducer,expense:expenseReducers.reducer}})

export default store 