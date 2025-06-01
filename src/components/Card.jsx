

function Card() {
    return (
        <div className='card'>
            <img width={133} height={112} src='/src/assets/1.jpg' alt=''/>
            <p>Мужские кроссовки Nike Blazer Mid Suede</p>
            <div className='price d-flex justify-between align-center '>
                <div className='d-flex flex-column '>
                    <span>Цена</span>
                    <b>12999</b>
                </div>
                <button className='button'>
                    <img width={11} height={11} src='/src/assets/plus.svg'/>
                </button>
            </div>
        </div>
    )
}
export default Card

