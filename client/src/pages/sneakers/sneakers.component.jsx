import React from 'react';

import './sneakers.styles.scss';
import { Routes, Route, Link } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setCategoriesMap, fetchCategoriesAsync } from '../../store/categories/categories.action';

function SneakersShop() {
  const dispatch = useDispatch();

  console.log('redrendering')
  // useEffect(() => {
  //   dispatch(fetchCategoriesAsync());
  // }, []);
  useEffect(() => {
    async function fetchData(){
    }
    async function fetchData1(){
      dispatch(fetchCategoriesAsync());
    }


    fetchData1()
    console.log('effect fired')
    // const getCategoriesMap = async () => {
    //   const categoryMap = await getCategoriesAndDocuments();
    //   console.log(categoryMap)
    //   dispatch(setCategoriesMap(categoryMap))
    // };

    // getCategoriesMap();
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  )
}

export default SneakersShop;
