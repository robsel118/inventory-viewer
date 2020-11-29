import React from 'react';
import { Product } from '../../types';
import ProdcutDetails from '../ProductDetails/ProductDetails.component';
import { Table, Wrapper } from './ProductList.styles'
import { Row, RowData } from '../ProductDetails/ProductDetails.styles'

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