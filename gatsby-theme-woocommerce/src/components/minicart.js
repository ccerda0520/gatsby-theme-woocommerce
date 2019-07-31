import React from 'react';
import styled from 'styled-components';
import ShoppingCartIcon from '../../assets/svg/shopping-cart.svg';
import { colorBorder, colorPrimary } from '../helpers/variables';
import { useCart, useCartDispatch } from './custom-hooks/use-cart';

const StyledWrapper = styled('div')`
    margin-left: auto;
    position: relative;
`;
const StyledShoppingCartButton = styled('button')`
    display: flex;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`;
const StyledShoppingCartIcon = styled(ShoppingCartIcon)`
    width: 25px;
    fill: white;
`;

const StyledCart = styled('div')`
    position: absolute;
    background: white;
    width: 250px;
    padding: 15px;
    border: 1px solid gray;
    top: calc(100% + 15px);
    right: 0;
    z-index: 100;
    &:before {
        position: absolute;
        bottom: 100%;
        right: 0;
        content: '';
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid white;
    }
`;

const StyledCartCount = styled('div')`
    font-size: 13px;
    position: absolute;
    bottom: -8px;
    right: -9px;
    line-height: 1;
    color: white;
    background: ${colorPrimary};
    padding: 4px;
`;

const StyledCartList = styled('ul')`
    display: flex;
    flex-direction: column;
    padding: 0;
    list-style: none;
`;

const StyledCartListItem = styled('li')`
    position: relative;
    padding: 0 0 10px 0;
    border-bottom: 1px solid ${colorBorder};
    margin-bottom: 10px;
`;

const StyledCartListItemRemoveButton = styled('button')`
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
`;

const StyledCartListItemImage = styled('img')`
    width: 100px;
`;

const MiniCart = () => {
    const [showCart, setShowCart] = React.useState(false);
    const cart = useCart();
    const setCart = useCartDispatch();

    return (
        <StyledWrapper>
            <StyledShoppingCartButton aria-label="Toggle minicart items" onClick={() => setShowCart(!showCart)}>
                <StyledShoppingCartIcon />
                {cart.length !== 0 && <StyledCartCount>{cart.length}</StyledCartCount>}
            </StyledShoppingCartButton>
            {showCart && (
                <>
                    {!cart.length && (
                        <StyledCart>
                            <div>No items in cart.</div>
                        </StyledCart>
                    )}
                    {cart.length !== 0 && (
                        <StyledCart>
                            <StyledCartList>
                                {cart.map((item) => (
                                    <StyledCartListItem key={item.id}>
                                        {item.image && (
                                            <StyledCartListItemImage
                                                src={item.image.localFile.childImageSharp.fixed.src}
                                                alt={item.image.alt || item.image.name}
                                            />
                                        )}
                                        <div>{`Name: ${item.name}`}</div>
                                        <div>{`Qty: ${item.quantity}`}</div>
                                        <StyledCartListItemRemoveButton
                                            aria-label="Remove item from cart"
                                            onClick={() => {
                                                const updatedCart = cart.filter((subItem) => subItem.id !== item.id);
                                                setCart({
                                                    type: 'update',
                                                    cart: updatedCart,
                                                });
                                            }}
                                        >
                                            X
                                        </StyledCartListItemRemoveButton>
                                    </StyledCartListItem>
                                ))}
                            </StyledCartList>
                        </StyledCart>
                    )}
                </>
            )}
        </StyledWrapper>
    );
};

export default MiniCart;
