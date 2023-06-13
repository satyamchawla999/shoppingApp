import ProductPage from './Components/ProductPage';
import Navbar from './Components/Navbar';
import data from './Data/products.json'

const App = ()=>{
  
  const products = data.products;

  return (
    <div className="App">
      
      <Navbar  products={products}/>
      <ProductPage products={products}/>
      
    </div>
  );
}

export default App;
