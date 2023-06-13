import '../Assets/Styles/productItem.scss';

const ProductItem = (props)=>{

  const product = props.product;

  return (
    <div className="item">

      <div className='rightBlock'>
        <img className="image" src={product.img} />
      </div>

      <div className='leftBlock'>

        <h2>{product.name}</h2>
        <br/>

        <p>Price : {product.price}</p>

        <br/>
        <p>{product.description}</p>

      </div>
      
    </div>
  );
}

export default ProductItem;
