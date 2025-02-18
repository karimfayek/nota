import store from "@/store";

const getTranslations = () => {
    const state = store.getState();
    return state.translations.translations;
};

export default getTranslations;