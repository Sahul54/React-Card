import './ItemDate.css'

function ItemDate(props) {

    // const date = 20;
    // const mon = "july";
    // const year = 1990;
     
    const date = props.date;

    return (
        <>
        <div className='iDate'>
           <span>{date}</span>
           {/* <span>{date}</span>
           <span>{date}</span> */}
        </div>
        </>
    )
}

export default ItemDate;