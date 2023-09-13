import React from 'react'

export const ListProduct = ({ products, onDeleteProduct }) => {

    

  return (
    <div className="col-lg-8" >
        <table className="table mt-6" >
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">PRODUCTO</th>
                <th scope="col">PRECIO</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {  products.map( (prd) => (
                <tr key={prd.id}>
                <th scope="row">{ prd.id }</th>
                <td>{ prd.title  }</td>
                <td>{ prd.price }</td>
                <td>
                    {/* <button className='btn btn-info mx-2 btn-sm'>Editar</button> */}
                    <button 
                        data-testid='buttonDelete'
                        className='btn btn-danger  btn-sm'
                        onClick={() => onDeleteProduct(prd.id)}
                    >
                        Eliminar
                    </button>
                </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
