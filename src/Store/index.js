import {configureStore} from '@reduxjs/toolkit'
import authReducer from './AuthReducer'
import expenseReducers from './ExpenseReducer'
import themeReducers from './ThemeReducer'


const store = configureStore({reducer:{auth:authReducer.reducer,expense:expenseReducers.reducer,theme:themeReducers.reducer}})

export default store 