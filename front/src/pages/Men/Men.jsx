import './Men.css';
import Product from '../../components/Product/Product'
import product11 from './product11.jpg'
import product22 from './product22.jpg'
import product33 from './product33.png'
import product44 from './product44.jpg'

function Men() {
  const products = [
    {
      id: 1,
      imgSrc: product11,
      title: ' Moisture Essence',
      price: 78.9
    },
    {
      id: 2,
      imgSrc: product22,
      title: 'ALL DAY PERFECT',
      price: 50.9
    },
    {
      id: 3,
      imgSrc: product33,
      title: 'Refillable Moisturizer',
      price: 69.9
    },
    {
      id: 4,
      imgSrc: product44,
      title: 'Valentino Fragrance',
      price: 292.9
    }
  ];
  return (
    <>
       <div className="topm">
          <p>New here? Get 20% off everything! with code : ImNew</p>
        </div>
        <div className="title-container">
        <div className="line"></div>
        <h2 className="title">MEN SECTION</h2>
        <div className="line"></div>
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

export default Men;