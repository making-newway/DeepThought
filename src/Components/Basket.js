import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearBasketItems, toggleBasketItem } from '../Action';

function Basket() {

    const dispatch = useDispatch();
    const basketItems = useSelector(state => state.basketItems.list);

    const isClear = !basketItems.length;

    const onTodoClick = (id) => {
        dispatch(toggleBasketItem(id));
    }

    const onClearClick = () => {
        dispatch(clearBasketItems());
    }

	return (
		<div>
			<header>
				<h3><i className="fa fa-shopping-basket" aria-hidden="true"></i> Basket</h3>
			</header>

			{
				isClear ?
				<ul className="Basket">
					<li>Your basket is empty!</li>
				</ul>
				:
				<ul className="Basket">
					{basketItems.map(listItem => (
                        <li key={listItem.id} onClick={() => onTodoClick(listItem.id)} style={{ textDecoration: listItem.bought ? 'line-through' : 'none' }}> {listItem.count} {listItem.name} </li>
					))}

                    <h3 className="clearBasket" onClick={() => onClearClick()}><i className="fa fa-trash" aria-hidden="true"></i> </h3>
				</ul>
			}
		</div>
    )
}

export default Basket;