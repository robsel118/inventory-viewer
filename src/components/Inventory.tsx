import React from 'react';
import { PrimaryButton, SecondaryButton } from './Button';
import Center from './Center';
import ProductList from './ProductList';
import Modal from './Modal';
import Blinker from './Blinker';
import UseFetchData from '../hooks/useFetchData'
import { Category } from '../types';

interface DataProps {
  match: {
    params: {
      category: Category
    }
  }
}

const Inventory: React.FC<DataProps> = ({match:{ params } }) => {
  const [stocks, products, dataState, setNewDataState] = UseFetchData(params.category);
  return (<div>
    {
      dataState === 'pending' &&
      <Center>
        <Blinker>Loading</Blinker>
      </Center>
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
            setNewDataState('pending');
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
          <SecondaryButton onClick={() => setNewDataState('success')}>Show</SecondaryButton>
          <PrimaryButton onClick={() => {
            setNewDataState('pending');
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
