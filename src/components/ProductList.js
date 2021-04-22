import React, { useState } from 'react'
// import NewProduct from './NewProduct'
function ProductList(props) {
    const [productList1, setProductList1] = useState(props.list)
// ????????????????????????????????????????????
    return (
        <>
            {props.productList1.map((item, index) =>
                <li key={index}>{item}</li>
            )}
            {/* <button onClick={NewProduct.add()}>add</button> */}

        </>

    )
}

export default ProductList