
import './App.css'


function App() {


  return (
    <div className="wrapper clear">
        <header className='d-flex align-center p-40'>
            <div className='headerLeft'>
                <img width={40} height={40} src="/src/assets/logo.png"/>
                <div className='headerInfo'>
                    <h3 className='text-uppercase' >React Sneakers</h3>
                    <p>Магазин лучших кросовок </p>
                </div>
                </div>


                <ul className='d-flex'>
                    <li className='mr-30'>
                        <img src='/src/assets/cart.svg'/>
                        <span>1250р</span>
                    </li>
                    <li>
                        <img src='/src/assets/user.svg'/>
                    </li>
                </ul>
        </header>

        <div className='content p-40 '>
            <h1>Все кроссовки</h1>
            <div className='sneakers d-flex'>
            <div className='card '>
                <img width={133} height={112} src='/src/assets/1.jpg' alt=''/>
                <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                <div className='price d-flex justify-between align-center'>
                    <div className='d-flex flex-column '>
                        <span>Цена</span>
                        <b>12999</b>
                    </div>
                    <button className='button'>
                        <img width={11} height={11} src='/src/assets/plus.svg'/>
                    </button>
                </div>
            </div>


            <div className='card'>
                <img width={133} height={112} src='/src/assets/1.jpg' alt=''/>
                <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                <div className='price d-flex justify-between align-center'>
                    <div className='d-flex flex-column '>
                        <span>Цена</span>
                        <b>12999</b>
                    </div>
                    <button className='button'>
                        <img width={11} height={11} src='/src/assets/plus.svg'/>
                    </button>
                </div>
            </div>


            <div className='card'>
                <img width={133} height={112} src='/src/assets/1.jpg' alt=''/>
                <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                <div className='price d-flex justify-between align-center'>
                    <div className='d-flex flex-column '>
                        <span>Цена</span>
                        <b>12999</b>
                    </div>
                    <button className='button'>
                        <img width={11} height={11} src='/src/assets/plus.svg'/>
                    </button>
                </div>
            </div>


            <div className='card'>
                <img width={133} height={112} src='/src/assets/1.jpg' alt=''/>
                <p>Мужские кроссовки Nike Blazer Mid Suede</p>
                <div className='price d-flex justify-between align-center'>
                    <div className='d-flex flex-column '>
                        <span>Цена</span>
                        <b>12999</b>
                    </div>
                    <button className='button'>
                        <img width={11} height={11} src='/src/assets/plus.svg'/>
                    </button>
                </div>
            </div>
            </div>
        </div>

    </div>
  )
}

export default App
