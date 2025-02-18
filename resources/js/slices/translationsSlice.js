import { createSlice } from '@reduxjs/toolkit';

const translationsSlice = createSlice({
    name: 'translations',
    initialState: {
        translations: {},
        currentLanguage: 'ar', // Default to Arabic
    },
    reducers: {
        setTranslations: (state, action) => {
            state.translations = action.payload;
            console.log('translations' ,action.payload )
        },
        changeLanguage: (state, action) => {
            state.currentLanguage = action.payload;
        },
    },
});

export const { setTranslations, changeLanguage } = translationsSlice.actions;
export default translationsSlice.reducer;

