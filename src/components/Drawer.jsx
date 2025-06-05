function Drawer() {
return (
    <div style={{display: ''}} className="overlay">
        <div className="drawer">
            <h2 className="mb-30 d-flex justify-between">Корзина
                <img className="removeBtn cu-p"
                     src="/src/assets/btn-remove.svg"
                     alt="btn-remove"/></h2>
            <div className="items">

                <div className="cartItem d-flex align-center mb-20">

                    <div style={{backgroundImage: 'url(/src/assets/1.jpg)'}} className="cartItemImg">

                    </div>

                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
                        <b>12 990</b>
                    </div>
                    <img className="removeBtn" src="/src/assets/btn-remove.svg" alt="btn-remove"/>
                </div>

                <div className="cartItem d-flex align-center mb-20">

                    <div style={{backgroundImage: 'url(/src/assets/1.jpg)'}} className="cartItemImg">

                    </div>

                    <div className="mr-20 flex">
                        <p className="mb-5">Мужские кроссовки Nike Air Max 270</p>
                        <b>12 990</b>
                    </div>
                    <img className="removeBtn" src="/src/assets/btn-remove.svg" alt="btn-remove"/>
                </div>
 <div className="cartTotalBlock">

                <ul>
                    <li>
                        <span>Итого</span>
                        <div></div>
                        <b>21 489 руб.</b>
                    </li>
                    <li>
                        <span>Налог</span>
                        <div></div>
                        <b>1074 руб.</b>
                    </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/src/assets/arrow.svg"/></button>

            </div>

            </div>

            
        </div>
    </div>
        )

        }
        export default Drawer
