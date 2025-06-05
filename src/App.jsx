
import './App.css'
import Card from './components/Card.jsx'
import Header from "./components/Header.jsx";
import Drawer from "./components/Drawer.jsx";


function App() {


  return (
    <div className="wrapper clear">

            <Drawer/>




<Header />


        <div className='content p-40 '>
            <div className="d-flex align-center mb-40 justify-between">
                <h1>Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img src="/src/assets/search.svg" alt="search"/>
                    <input placeholder="Поиск"/>
                </div>
            </div>

            <div className='sneakers d-flex'>
               <Card />
            </div>
        </div>
    </div>
  )
}

export default App
