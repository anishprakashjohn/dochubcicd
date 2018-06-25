//SET TEXT_FILTER

export const setTextFilter = ( text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

//SET_CATEGORY_FILTER
export const setCategoryFilter = ( category = 'All') => ({
    type: 'SET_CATEGORY_FILTER',
    category
})