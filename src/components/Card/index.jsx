import styles from './Card.module.scss';


function Index(props) {


    return (
        <div className={styles.card}>
            <img width={133} height={112} src={props.imageUrl} alt=''/>
            <p>{props.title}</p>
            <div className='price d-flex justify-between align-center '>
                <div className='d-flex flex-column '>
                    <span>Цена</span>
                    <b>{props.price}</b>
                </div>
                <button  className='button' >
                    <img width={11} height={11} src='/src/assets/plus.svg'/>
                </button>
            </div>
        </div>

    )
}
export default Index

