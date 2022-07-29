// import { create } from '@mui/material/styles/createTransitions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    lastId: 0,
    inputData: [
        {
            id:'',
            title:'',
            content:''
        }
    ],
    selectRowData:{}
}

export const noticeSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        save: (state, action) => {
            return{
                lastId: state.lastId+1,
                inputData: state.inputData.concat({
                    ...action.payload,
                    id: state.lastId+1
                })
            }
        },

        select: (state, action) => {
            state.selectRowData = state.inputData.find(row => row.id === action.payload)
        }
    },
    extraReducers: {}
})

export const { save, select } = noticeSlice.actions;

export default noticeSlice.reducer;
