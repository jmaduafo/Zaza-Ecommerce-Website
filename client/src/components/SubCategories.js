import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../utils/GlobalState';
import {
  UPDATE_SUBCATEGORIES,
  UPDATE_CURRENT_SUBCATEGORY,
} from '../utils/action';
import { QUERY_SUBCATEGORIES } from '../utils/queries';

function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { subcategories } = state;

  const { data: subcategoryData } = useQuery(QUERY_SUBCATEGORIES);

  useEffect(() => {
    if (subcategoryData) {
      dispatch({
        type: UPDATE_SUBCATEGORIES,
        subcategories: subcategoryData.subcategories,
      });
    }
  }, [subcategoryData, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_SUBCATEGORY,
      currentSubcategory: id,
    });
  };

  return (
    <div>
      <h2>Choose a Category:</h2>
      {subcategories.map((item) => (
        <button
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryMenu;
