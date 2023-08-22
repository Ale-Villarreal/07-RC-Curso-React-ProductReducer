import React from 'react'

export const Product = ({ products }) => {

    

  return (
    
    <>
        { products.map( (prd) => (
        <div key={prd.id} className="col-lg-3">
            <ul className="list-group shadow">
                <li className="list-group-item">
                    <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2">{ prd.title }</h5>
                            <p className="font-italic text-muted mb-0 small">{ prd.description }</p>
                            <div className="d-flex align-items-center justify-content-between mt-1">
                                <h6 className="font-weight-bold my-2">{ prd.price }</h6>
                            </div>
                        </div><img src="https://i.imgur.com/KFojDGa.jpg" alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2"/>
                        <div className='mt-4'>
                            <button type="button" className="btn btn-outline-primary">MeGusta: 0</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        ))}
    </>
  )
}
