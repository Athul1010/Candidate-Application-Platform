


import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StatusCode from '../utils/StatusCode';
//IF I USE AXIOS => import axios from 'axios';

const initialState = { 
    data:[]
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => { 

        builder
        .addCase(getCandidateDetails.pending, (state, action)=>{
            state.status = StatusCode.LOADING;
        })
        .addCase(getCandidateDetails.fulfilled, (state, action) =>{ 
            state.data = action.payload;
            state.status = StatusCode.IDLE
        })
        .addCase(getCandidateDetails.rejected, (state, action)=>{
            state.status = StatusCode.ERROR
        })
    }
});


export const {fetchProducts} = productSlice.actions; 
export default productSlice.reducer;

export const getCandidateDetails = createAsyncThunk('products', async () => { 
    
const body = JSON.stringify({
    "limit": 10,
    "offset": 0
   });
   
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*")

    const data = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', {
        method: "POST",
        headers: myHeaders,
        body,
    })
    const result = await data.json();
    return result.jdList;
})

