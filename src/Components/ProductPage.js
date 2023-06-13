import PageItems from './ProductItems'
import '../Assets/Styles/productPage.scss'


const ProductPage = (props)=>{

  const products = props.products;

  return (
    <div className="container">

      {products.map((product)=>(
          <PageItems product={product} key={product.id}/> //nullis optional chaining debouncing
      ))}
      
    </div>
  );
}

export default ProductPage;
