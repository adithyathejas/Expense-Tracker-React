import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoggedin: false
    ,token:''
    ,userID:'',
    expiresIn:0
}
const authReducer = createSlice({
    name: 'auththentication',
    initialState:initialState,
    reducers: {
        loginHandle(state,action){
        state.isLoggedin=true
        state.token=action.payload.token
        state.userID = action.payload.userID
        state.expiresIn = action.payload.expiresIn
    }
    ,logoutHandle(state){
        state.isLoggedin=false
        state.token=''
        state.userID=''
        state.expiresIn=0

    }

}
})


export const authActions = authReducer.actions
export default authReducer