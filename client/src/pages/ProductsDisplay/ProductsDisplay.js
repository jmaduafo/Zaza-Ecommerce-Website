import React, { useState, useEffect } from 'react'
import './productsDisplay.css'
import QuickAdd from '../../components/QuickAdd/QuickAdd'
import Loader from '../../components/Loader/Loader'

import { useQuery } from '@apollo/client';

import ProductItem from '../Detail/Detail';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/action';
import { QUERY_PRODUCTS } from '../../utils/queries';
// import spinner from '../../assets/spinner.gif';


const ProductsDisplay = ({title}) => {
  const [quickAdd, setQuickAdd] = useState(false)
  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
    }
  }, [data, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }

  return (
    <div className="my-2">
      <h2>Our Products:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {filterProducts().map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <p>Loading</p> : null}
    </div>
  );
}

{/* <img src={spinner} alt="loading" /> */}

//   return (
//     <>
//     <QuickAdd setQuickAdd={setQuickAdd} quickAdd={quickAdd}/>
//     <div className='products-display-section'>
//       <div className='products-display-top'>
//         <h2>{title}</h2>
//         <div className='filter'>
//           <div className='filter-title'>
//             <i className='bx bx-filter bx-sm'></i>
//             <p>Filter By:</p>
//           </div>
//           <p>Size</p>
//           <p>Color</p>
//           <p>Style</p>
//         </div>
//         <div className='filter-categories'></div>
//       </div>
//       <div className='products-display-grid'>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
//         <div className='product'>
//           <div className='product-image'>
//             <img src='https://res.cloudinary.com/dyxxn831a/image/upload/v1690420669/ZAZA%20Images/igor-starkov-Cx-MtcVHR2c-unsplash_pinmgw.jpg'/>
//           </div>
//           <div className='product-info'>
//             <div className='title-rating'>
//               <p>Winter Fall Silk Slip</p>
//               <i className='bx bx-heart bx-sm' ></i>
//               {/* <div>
//                 <i className='bx bxs-star' ></i>
//                 <p>4.7</p>
//               </div> */}
//             </div>
//             <div className='price-favorite'>
//               <p>$35</p>
//             </div>
//           </div>
//           <div className='product-add' onClick={() => setQuickAdd(true)}>
//             <p>+ Quick Add</p>
//           </div>
//         </div>
        
//       </div> 
//     </div>
//     </>
//   )
// }

export default ProductsDisplay