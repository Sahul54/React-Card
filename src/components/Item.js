import './Item.css'

function Item(props){
    
    const name = props.name;

    return(
        <>
          <p className="item">{name}</p>
           {props.children}  
           {/* // components k under kuch use krna chahate ho use ye use krna padega */}
        </>
        
    )
}

export default Item;