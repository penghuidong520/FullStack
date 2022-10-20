import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProduct } from "../../store/products";
import { getProduct } from "../../store/products";
import { deleteCart } from "../../store/cart";

const CartIndexItem = ({cart}) => {
    const dispatch = useDispatch();
    const productId = cart.productId;
    const [quantity, setQuantity] = useState(1);
    const product = useSelector(getProduct(productId));

    const optionList = []
    for (let i = 1; i <= 10; i++) {
        optionList.push(
            <option key={i} value={i}>{i}</option>
        )
    }

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [dispatch, cart, productId])

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(deleteCart(cart.id));
    }

    if (product) {
        return (
            <div className="cart-product-container">
                <div className="cart-img" >
                    <Link id="cart-product-img-link" to={`/products/${productId}`}>
                        <img className="cart-product-img" src={product.photourls[0]} alt="" />
                    </Link>
                </div>
                <div className="cart-product-body">
                    <h1>{product.name}</h1>
                    <div className="cart-product-body-info" >
                        <div className="cart-product-body-free">
                            <p className="order-free-stuff">FREE Shipping</p>
                            <span>&nbsp;&&nbsp;</span>
                            <p className="order-free-stuff">FREE Returns</p>
                        </div>
                        <div className="cart-product-body-category" >
                            <span id="cart-product-category">Category: &nbsp;</span>
                            <Link to={`/category/${product.categoryId}`} id="cart-product-category-name" >{product.category}</Link>
                        </div>
                    </div>
                    <div className="cart-product-body-actions">
                        <div className="cart-product-quantity body-action">
                            {/* <div id="qty">Qty: {quantity}</div> */}
                            <select onChange={e => setQuantity(e.target.value)} >
                                {optionList}
                            </select>
                        </div>
                        <button className="body-action" id="cart-remove" onClick={handleRemove} >Delete</button>
                    </div>
                </div>
                <div className="cart-product-price-container">
                    <span id="cart-product-price">${product.price}</span>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default CartIndexItem;