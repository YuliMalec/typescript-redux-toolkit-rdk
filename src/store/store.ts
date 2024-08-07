import {configureStore,combineReducers} from '@reduxjs/toolkit';
import UserReduser from './redusers/UserSlice'

const rootReduser = combineReducers({
UserReduser
})

export const SetupStore =()=>{
 return   configureStore({
        reducer:rootReduser
    })
}


export type RootState = ReturnType<typeof rootReduser>
export type AppStore =ReturnType<typeof SetupStore>
export type AppDispatch = AppStore['dispatch']
