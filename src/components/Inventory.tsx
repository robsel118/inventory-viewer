import React, { useState, useEffect } from 'react';
import ProductList from './ProductList/ProductList.component';
import Center from './Center';
import { PrimaryButton, SecondaryButton } from './Button';
import axios, { AxiosResponse } from 'axios';
import { Product } from '../types';
import Modal from './Modal/Modal.component';

interface DataProps {
  tag: 'shirts' | 'jackets' | 'accessories'
}

const Inventory: React.FC<DataProps> = ({ tag }) => {

  const [stocks, setStocks] = useState<Record<string, string>>({});
  const [products, setProducts] = useState<Product[]>([]);
  const [dataState, setDataState] = useState<'pending' | 'success' | 'failed' | 'partial'>('pending');

  useEffect(() => {
    async function fetchContent(): Promise<void> {

      let productList: Product[] = [];
      let stockList: Record<string, string> = {};

      try {

        productList = await fetchProducts();

        stockList = await fetchStocks(productList);
        setStocks(stockList);
        setProducts(productList);
      } catch (error) {
        setDataState('failed')
      }
    }

    async function fetchProducts(): Promise<Product[]> {

      const res = await axios.get(`https://bad-api-assignment.reaktor.com/products/${tag}`,
        {
          headers: { 'Content-Type': 'application/json', 'Cache-Control': `private, max-age=${5 * 60}` }
        });

      const products: Product[] = res.data;

      return products;

    }

    async function fetchStocks(products: Product[]): Promise<Record<string, string>> {

      const manufacturers = [...(new Set<string>(products.map(d => d.manufacturer)))];
      const promises = await axios.all<AxiosResponse>(
        manufacturers.reduce((acc: Promise<AxiosResponse<any>>[], manufacturer) => {
          return [...acc, axios.get(`https://bad-api-assignment.reaktor.com/availability/${manufacturer}`)];
        }, [])
      )

      const validStock = promises
        .filter(promise =>
          promise.data.code === 200 &&
          promise.data.response !== "[]")
        .map(promise => promise.data.response);


      const allFetched = validStock.length === promises.length ? 'success' : 'partial'
      setDataState(allFetched);
      const temp = validStock.flat().reduce((acc: Record<string, string>, av) => {
        acc[av.id.toLowerCase()] = av.DATAPAYLOAD;
        return acc;
      }, {});

      return temp
    }
    if (dataState === 'pending')
      fetchContent();
  }, [tag, dataState])






  return (<div>
    {
      dataState === 'pending' && <Center>Loading</Center>
    }
    {
      dataState === 'failed' &&
      <Center>
        <Modal
          title={"Failed to fetch data"}
          description={"Something went wrong went fetching the data"}
          color={'red'}
        >
          <PrimaryButton onClick={() => {
            setDataState('pending');
          }}>Retry
              </PrimaryButton>
        </Modal>
      </Center>
    }
    {
      dataState === 'partial' &&
      <Center>
        <Modal
          title={"Failed to fetch Stock on some items"}
          description={"Some items can already be display, do you wish to show them or do you wish to retry?"}
          color={'red'}
        >
          <SecondaryButton onClick={() => setDataState('success')}>Show</SecondaryButton>
          <PrimaryButton onClick={() => {
            setDataState('pending');
          }}>Retry
              </PrimaryButton>
        </Modal>
      </Center>
    }
    {
      dataState === 'success' && <ProductList stocks={stocks} products={products} />
    }
  </div>)
}

export default Inventory;
