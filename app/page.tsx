

import { gql } from '@apollo/client';

import React from 'react'

const gpl = String.raw;
const fetchProducts = async ()=>{
  const res = await fetch ('http://localhost:3000/api/graphql',
{
  method: "POST",
  headers:{
    "Content-Type":"application/json",
  },
  body:JSON.stringify({
    query: gql`
    query fetchProductQuery{
      getProducts{
        title
      }
    }`
  })
}
  )
  const products = await res.json
  console.log('pro', products.data.getProducts)

  return []
}


export default async function page() {
  const products = await fetchProducts()
  console.log('pro', products)
  return (
    <div>{products.products?.map((item:{item:String})=>{
      return <p>{item.title}</p>
    })}</div>
  )
}
