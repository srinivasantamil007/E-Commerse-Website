import React, {useEffect} from 'react';
import Category from '../../components/Category/Category';
import ProductList from '../../components/ProductList/ProductList';
import SingleCategory from '../../components/SingleCategory/SingleCategory';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../store/productSlice';
import { fetchCategories, fetchProductsByCategory } from '../../store/categorySlice';
import "./HomePage.scss";
import Sliders from '../../components/Sliders/Sliders';
const HomePage = () => {
   const dispatch = useDispatch();
  const {data: categories, status: categoryStatus} = useSelector((state) => state.category);
  const {data: products, status: productStatus} = useSelector((state) => state.product);
  const {catProductAll: productsByCategory, catProductAllStatus} = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, 'all'));
    dispatch(fetchProductsByCategory(2, 'all'));
  }, [dispatch]);

  return (
    <div className = "home-page">
     <Sliders />
      <Category categories = {categories} status = {categoryStatus}className = "categories" />
      <ProductList products = {products} status = {productStatus} />
      <section>
        { productsByCategory[0] && <SingleCategory products = {productsByCategory[0]} status = {catProductAllStatus} /> }
      </section>
      <section>
        { productsByCategory[1] && <SingleCategory products = {productsByCategory[1]} status = {catProductAllStatus} /> }
      </section>
    </div>
  )
}

export default HomePage;