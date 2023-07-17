import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    theme:'light'
}

const themeReducers = createSlice({
    name: 'theme',
    initialState:initialState,
    reducers:{
        toggleTheme(state){
            state.theme= state.theme==='light'?'dark':'light'
        }
    }
})

export const themeReducerActions = themeReducers.actions
export default themeReducers