import { combineReducers } from "redux";


const initialState = {
	categories: [
		{id:1, name:'Fruit'},
		{id:2, name:'Vegetable'},
		{id:3, name:'Dairy'},
		{id:4, name:'Meat'},
		{id:5, name:'Grain'}
	],
	filterId: null,
	item: [
		{id:1, name:'Strawberry', categoryId:1},
		{id:2, name:'Blueberry', categoryId:1},
		{id:3, name:'Orange', categoryId:1},
		{id:4, name:'Banana', categoryId:1},
		{id:5, name:'Apple', categoryId:1},

		{id:6, name:'Carrot', categoryId:2},
		{id:7, name:'Celery', categoryId:2},
		{id:8, name:'Mushroom', categoryId:2},
		{id:9, name:'Green Pepper', categoryId:2},

		{id:10, name:'Eggs', categoryId:3},
		{id:11, name:'Cheese', categoryId:3},
		{id:12, name:'Butter', categoryId:3},

		{id:13, name:'Chicken', categoryId:4},
		{id:14, name:'Beef', categoryId:4},
		{id:15, name:'Pork', categoryId:4},
		{id:16, name:'Fish', categoryId:4},

		{id:17, name:'Rice', categoryId:5},
		{id:18, name:'Pasta', categoryId:5},
		{id:19, name:'Bread', categoryId:5}
	],

	list: []
};

export const groceryItems = (state = initialState, action) => {
	switch (action.type){
		case 'FILTER_BY_ID':

			if(state.filterId !== action.id){
				
				let itemsFilter = initialState.item.filter(items => items.categoryId === action.id);

				return {
					...state,
					item : itemsFilter,
					filterId: action.id
				}
			} else {
				return {
					...initialState
				}
			}

		default:
			return state;
	}
};

export const basketItems = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_BASKETITEM':
			let itemExists=false;

			let newBasket = state.list.map(basketItem => {
				if(basketItem.id === action.item.id){
					itemExists=true;
					return {...basketItem, count: basketItem.count+1};
				}else{
					return basketItem;
				}
			});

			if(itemExists){
				return {
					...state,
					list: newBasket
				};

			} else {
				return {
					...state,
					list: [...state.list, {...action.item, count: 1, bought: false}]
				};
			}

		case 'TOGGLE_BASKETITEM':
			let newList = state.list.map(basketItem => (basketItem.id === action.id) ? {...basketItem, bought: !basketItem.bought} : basketItem );
            
			return {
				...state,
				list: newList

			};

		case 'CLEAR_BASKETITEMS':
			return {
				...state,
				list: []
			};
			
		default:
			return state;

	}
};

export const basketApp = combineReducers({
	groceryItems,
	basketItems,
});