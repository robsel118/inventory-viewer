import React from 'react';
import { PrimaryButton, SecondaryButton } from './Button';
import Center from './Center';
import ProductList from './ProductList';
import Modal from './Modal';
import Blinker from './Blinker';
import { Category } from '../types';
import UseFetchData from '../hooks/useFetchData'

interface DataProps {
  tag: Category
}

const Inventory: React.FC<DataProps> = ({ tag }) => {

  const [stocks, products, dataState, setNewDataState] = UseFetchData(tag);

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
