import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsQuery } from '../../features/api/apiSlice';

function SingleProducts() {

  const {id} = useParams();
  const { data, error, isLoading } = useGetProductsQuery({ id });
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data)
  return (
    <div>singleProducts</div>
  )
}

export default SingleProducts