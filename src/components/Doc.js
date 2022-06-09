const StateProvince = (props) => {
    return( 
        <>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <img src={props.imageUrl} />
        </>     
        )
}

export default StateProvince;