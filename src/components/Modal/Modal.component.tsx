import React from 'react';
import { Wrapper, Warning, Description, Padding, Actions } from './Modal.styles';


interface DataProps {
  title: string
  description: string
  color: string
  children: React.ReactNode
}

const Modal: React.FC<DataProps> = ({ title, description, color, children }: DataProps) =>
(<Wrapper color={'red'}>
  <Padding>
    <Warning> {title} </Warning>
    <Description> {description} </Description>
  </Padding>
  <Actions>
    {children}
  </Actions>
</Wrapper>)

export default Modal;