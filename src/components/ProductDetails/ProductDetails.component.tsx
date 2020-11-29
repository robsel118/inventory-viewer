import React from 'react';
import { Row, RowData, RowDataAttribute, RowDataColor, RowDataStock } from './ProductDetails.styles';

interface DataProps {
  id: string
  name: string
  color: string[]
  price: number
  manufacturer: string,
  availability: string
}

const ProductDetails: React.FC<DataProps> = ({ id, name, color, price, availability, manufacturer }) => {

  return (<Row>
    <RowData>
      {name}
      <RowDataAttribute>{id}</RowDataAttribute>
    </RowData>
    <RowData alignment={'right'}>€ {price}</RowData>
    <RowData>
      <RowDataStock
        className={availability}>
        {availability}
      </RowDataStock>
    </RowData>
    <RowData>
      {manufacturer}
    </RowData>
    <RowData>
      <ul>
        {
          color.map(c => <RowDataColor title={c} key={`${id}-${c}`} color={c}></RowDataColor>)
        }
      </ul>
    </RowData>
  </Row>);

}

export default ProductDetails
