import './App.css'
import Index from './components/Card/index.jsx'
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";


const arr = [
    { name: "Мужские кроссовки Nike Blazer Mid Suede", price:15900, imageUrl: '/src/assets/1.jpg'},
    { name:"Nike Air Max", price:12999, imageUrl: '/src/assets/1.jpg' },
    { name:"Nike Air Max", price:12222, imageUrl: '/src/assets/1.jpg' },
    { name:"Nike Air Max", price:12111, imageUrl: '/src/assets/1.jpg' }
]

function App() {


  return (
    <div className="wrapper clear">
            <Drawer/>
            <Header/>
        <div className='content p-40 '>
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img src="/src/assets/search.svg" alt="search"/>
                    <input placeholder="Поиск"/>
                </div>
            </div>

            <div className='sneakers d-flex'>

                {
                    arr.map ((obj =>
                        <Index
                            title={obj.name}
                            price={obj.price}
                            imageUrl={obj.imageUrl}
                        />))
                }


            </div>
        </div>
    </div>
  )
}

export default App
