import './Product.css'

export function Product(props) {
    return(
        <>
            {
                props.products.map((elem) => {
                    return <div className='product'>
                        <p className='title'>{elem.title}</p>
                        <p className='price'>Price: ${elem.price}</p>
                        <p className='description'>{elem.description}</p>
                    </div>
                })
            }
        </>
    )
}