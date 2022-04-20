import React from 'react';
import render from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImagen', () => {
  test('debe de mostrar la imagen', () => {
    const wrapper = render.create(
      <ProductImage img="https:hola.com" className="custom" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('no debe de mostrar la imagen', () => {
    const wrapper = render.create(
      <ProductCard product={product2}>
        {() => <ProductImage className="product-image" />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
