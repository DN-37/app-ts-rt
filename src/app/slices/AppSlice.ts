import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from '../../utils/Types';

const initialState: AppTypeInitialState = {}

export const AppSlice = createSlice({
    name: 'App',
    initialState,
    reducers: {}
});

export const { } = AppSlice.actions;