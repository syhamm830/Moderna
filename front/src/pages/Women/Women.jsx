import './Women.css';
import Product from '../../components/Product/Product'
import product1 from './product1.jpg'
import product2 from './product2.jpg'
import product3 from './product3.jpg'
import product4 from './product4.jpg'

function Women() {
  const products = [
    {
      id: 1,
      imgSrc: product1,
      title: 'Sunscreen ISDIN  SPF 50',
      price: 78.9
    },
    {
      id: 2,
      imgSrc: product2,
      title: 'Mascara lash princess',
      price: 14.9
    },
    {
      id: 3,
      imgSrc: product3,
      title: 'Extreme Plumping Lip Filler',
      price: 14.9
    },
    {
      id: 4,
      imgSrc: product4,
      title: 'REVOLUTION PALETTE',
      price: 24.9
    }
  ];
  return (
    <>
       <div className="topm">
          <p>New here? Get 20% off everything! with code : ImNew</p>
        </div>
        <div className="product-list">
        {products.map(product => (
          <Product
            key={product.id}
            imgSrc={product.imgSrc}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default Women;