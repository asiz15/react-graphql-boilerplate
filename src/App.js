
import './App.css';
import './tailwind.css'
import { Cart } from './components/Cart';
import { ProductList } from './components/ProductList';

function App() {
  return (
    <div className="App" style={{display: 'flex'}}>
      <ProductList/>
      <Cart/>
    </div>
  );
}

export default App;
