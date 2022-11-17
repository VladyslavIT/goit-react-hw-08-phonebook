import { configureStore, createSlice } from "@reduxjs/toolkit";


const filerSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        setFilter(state, action) { 
           return state = action.payload;
        }
        
    }

});

export const { setFilter } = filerSlice.actions;
export const filterReducer = filerSlice.reducer;

const contactSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addContact(state, action) { },
        deleteContact(state, action) {}
    }
})

export const store = configureStore({
    reducer: {
        contacts: contactSlice.reducer,
        filter: filterReducer,
    },
});

