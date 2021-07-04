let nextTodoId = 0;

export const addBasketItem = item => {
	return {
		type: 'ADD_BASKETITEM',
		item
	}
};

export const addCustomBasketItem = name => {
	return {
		type: 'ADD_BASKETITEM',
		id: nextTodoId++,
		name
	}
};

export const toggleBasketItem = id => {
	return {
		type: 'TOGGLE_BASKETITEM',
		id
	}
};

export const clearBasketItems = () => {
	return {
		type: 'CLEAR_BASKETITEMS'
	}
};

export const filterById = id => {
	return {
		type: 'FILTER_BY_ID',
		id
	}
}