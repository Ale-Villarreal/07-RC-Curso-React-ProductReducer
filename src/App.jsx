
import { useContext, useEffect, useReducer, useState } from 'react';
import { AddProduct } from './components/admin/AddProduct';
import { ListProduct } from './components/admin/ListProduct';
import { Product } from './components/products/Product';
import './styles/index.css';
import { productReducer } from './reducers/productReducer';
import { NavBar } from './components/ui/NavBar';
import { AuthContext } from './contexts/AuthContext';
import { ProfilePage } from './ProfilePage';


const initialProducts = [
  {
    id: 'sku-0001',
    title: 'Galaxy AS3',
    category: 'Celulares',
    price: '$120.000',
    description: 'Celular 5g con doble pantalla y 4 camaras'
  },
  {
    id: 'sku-0002',
    title: 'Galaxy A13',
    category: 'Celulares',
    price: '$80.000',
    description: 'Celular 5g con, 3 Camaras'
  },
  {
    id: 'sku-0003',
    title: 'Galaxy A22 5g',
    category: 'Celulares',
    price: '$98.000',
    description: 'Celular 5g con, 4 Camaras, 27mp'
  },
  {
    id: 'sku-0004',
    title: 'Galaxy A28 5g',
    category: 'Celulares',
    price: '$100.000',
    description: 'Celular 5g con, 4 Camaras, 27mp'
  }
]



function App() {


  const [ state, dispatch ] = useReducer(productReducer, initialProducts);
  const { user }  = useContext(AuthContext);

  const onClickAddProduct = (e, formValue) => {
    e.preventDefault();

     const newProdObj = {
      id: 'sku-0005',
      title: formValue.title,
      category: formValue.category,
      price: formValue.price,
      description: formValue.description
     }

     dispatch({
      type: '[Product] - ADD-PRODUCT',
      payload: newProdObj
    })
  }


  const onDeleteProduct = (prdId) => {
      const products = state.filter( (prd) => prd.id != prdId);
      
      dispatch({
        type: '[Product] - DELETE-PRODUCT',
        payload: products
      })
  }


  return (
    <>
        <NavBar />
      <div className="container-fluid">
        {/* <div className="row text-center mb-5 mt-5">
            <div className="col-lg-7 mx-auto">
                <h1 className="display-4" style={{  fontWeight:'lighter'}}>Product Reducer</h1>
            </div>
        </div> */}
        { user.isLogged && (
        <div className="row"  style={{ backgroundColor: '#000', padding:50}}>
            <AddProduct onClickAddProduct={(e, value) => onClickAddProduct(e, value)}/>
            <ListProduct products={state} onDeleteProduct={(value)=> onDeleteProduct(value)}/>
        </div>
        )}
          <div className='row p-5'>
            <Product products={state}/>
        </div>
      </div>

      <ProfilePage />
    </>
  )
}

export default App
