
import { useContext, useEffect, useReducer, useState } from 'react';
import { AddProduct } from './components/admin/AddProduct';
import { ListProduct } from './components/admin/ListProduct';
import { Product } from './components/products/Product';
import './styles/index.css';
import { productReducer } from './reducers/productReducer';
import { NavBar } from './components/ui/NavBar';
import { AuthContext } from './contexts/AuthContext';
import { ProfilePage } from './ProfilePage';
import { ProductContext } from './contexts/ProductContext';






function App() {


  // const [ state, dispatch ] = useReducer(productReducer, initialProducts);
  const { state:user }  = useContext(AuthContext);
  const { state, onClickAddProduct, dispatch } = useContext(ProductContext);

  // const onClickAddProduct = (e, formValue) => {
  //   e.preventDefault();

  //    const newProdObj = {
  //     id: 'sku-0005',
  //     title: formValue.title,
  //     category: formValue.category,
  //     price: formValue.price,
  //     description: formValue.description
  //    }

  //    dispatch({
  //     type: '[Product] - ADD-PRODUCT',
  //     payload: newProdObj
  //   })
  // }


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
        { user?.isLogged && (
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
