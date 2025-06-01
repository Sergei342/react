function Header() {
    return (
        <header className='d-flex align-center p-40'>
            <div className='headerLeft'>
                <img width={40} height={40} src="/src/assets/logo.png"/>
                <div className='headerInfo'>
                    <h3 className='text-uppercase'>React Sneakers</h3>
                    <p>Магазин лучших кросовок </p>
                </div>
            </div>


            <ul className='d-flex'>
                <li className='mr-30'>
                    <img src='/src/assets/cart.svg'/>

                </li>
                <li>
                    <img src='/src/assets/user.svg'/>
                </li>
            </ul>
        </header>
    )
}

export default Header