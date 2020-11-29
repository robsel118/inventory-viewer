import React from 'react';
import { Product } from '../../types';
import ProdcutDetails, { Row, RowData } from '../ProductDetails';
import { Table, Wrapper } from './ProductList.styles'

interface DataProps {
  products: Product[]
  stocks: Record<string, string>
}
const ProductList: React.FC<DataProps> = ({ stocks, products }) => {

  function extractDataPayload(payload: string): string {
    return payload.replaceAll(/<[^>]*>/g, "").trim().toLowerCase();
  }

  return (
    <Wrapper>
      <Table>
        <tbody>
          <Row>
            <RowData>Product</RowData>
            <RowData alignment={'right'}>Price</RowData>
            <RowData>Stocks</RowData>
            <RowData>Manufacturer</RowData>
            <RowData>Colors</RowData>
          </Row>
          {
            products
              .filter(product => product.id in stocks)
              .map((product) => {
                return (<ProdcutDetails
                  key={product.id}
                  {...product}
                  availability={extractDataPayload(stocks[product.id])} />)
              })
          }
        </tbody>
      </Table>
    </Wrapper>
  );
}

export default ProductList;