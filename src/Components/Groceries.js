import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addBasketItem, filterById } from '../Action';

function Groceries() {

    const dispatch = useDispatch();
    const groceryItems = useSelector(state => state.groceryItems);
    const categoryItems = useSelector(state => state.basketItems.categories);

    const onTodoClick = (id) => {
        dispatch(addBasketItem(id));
    }

    const filterItems = (id) => {
        dispatch(filterById(id));
    }

    return (
        <div>
            <header>
                <h3><i className="fa fa-leaf" aria-hidden="true"></i> Groceries</h3>
                <div className="category">
                    {categoryItems.map(category => (
                        <button key={category.id} type="button" className="btn btn-success mx-1" onClick={() => filterItems(category.id)}>{category.name}</button>
                    ))}
                </div>
            </header>

            <ul className="Groceries">
                {groceryItems.item.map(listItem => (
                    <li key={listItem.id} onClick={() => onTodoClick(listItem)} style={{ textDecoration: listItem.bought ? 'line-through' : 'none' }}> {listItem.count} {listItem.name} </li>
                ))}
            </ul>
        </div>
    )
}

export default Groceries
