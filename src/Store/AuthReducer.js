import  {createSlice} from '@reduxjs/toolkit'

 const auth = {
    isLoggedin: false
    ,token:''
    ,userID:'',user:'',
    expiresIn:0
}
const authReducer = createSlice({
    name: 'auththentication',
    initialState:auth,
    reducers: {
        loginHandle(state,action){
        state.isLoggedin=true
        state.token=action.payload.token
        state.userID = action.payload.userID
        state.expiresIn = action.payload.expiresIn
        state.user=action.payload.userID.replace('@gmail.com','')
    }
    ,logoutHandle(state){
        state.isLoggedin=false
        state.token=''
        state.userID=''
        state.expiresIn=0
        state.user=''

    }

}
})


export const authActions = authReducer.actions
export default authReducer