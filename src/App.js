
import './App.css';
import ProductList from './components/ProductList'
function App() {
  let list = ["ruth", "racheli"]
  return (
    <div className="App">
      <ProductList productList1={list}></ProductList>
    </div>
  );
}

export default App;
