import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import axiosClient from '../../apis/axiosInstance';
import ProductItem from '../../components/HomePage/ProductList/ProductItem';
import './ProductList.css'
import { Link } from 'react-router-dom';

function ProductList() {
  const productPerPage = 15;
  let [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState('');
  const [totalPage, setTotalPage] = useState(0);
  const category = searchParams.get("category");
  const discount = searchParams.get("discount");
  const page = searchParams.get("page") != null ? searchParams.get("page")  : 1;
  useEffect(() => {
    axiosClient.get('/products')
    .then(function (response) {   
        if(response.status == '200')
        {
          const productsFromApi = JSON.stringify(response.data);
          let productList = JSON.parse(productsFromApi);
          setProducts(productList);
          console.log("product length "+productList.length );
          setTotalPage(Math.ceil(productList.length / productPerPage))
        }
        else
        {
          console.log("status not 200: "+ response);
        }
      })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {
    });
  }, [])

  const getPagination = () => 
  {
    let links = [];
    for (let index = 1; index <= totalPage; index++) {
        if(page == index)
        {

            links.push(<Link className='active' to={`/product_list?page=${index}`}>{index}</Link>)
        }
        else { 
            links.push(<Link to={`/product_list?page=${index}`}>{index}</Link>)
        }
    }
    return links;
  }
  return (
    <div className='product_list_container'>
        <Container>
            <div className='product_list'>
            {
                products != "" ?
                products?.map((item) => {
                return <ProductItem 
                    title={item.title} 
                    discount={""} 
                    image={item.image} 
                    price={item.price} 
                    rating={item.rating} 
                    id={item.id}/>
                }) : ""
            }
            </div>
        
            <div className='product_pagination'>
                <button className='change_page_btn' disabled={page == 1 ? true: false}>Prev</button>
                {
                    getPagination()
                }
                <button className='change_page_btn' disabled={page == totalPage ? true: false}>Next</button>
            </div>
        </Container>
       
    </div>
  )
}

export default ProductList
