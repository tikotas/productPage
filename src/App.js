import './App.css';
import Product from './components/Product/Product';
import Input from './components/Input/Input';

const products = [
  {
    icon: `🍌`,
    name: `Bananas`,
    price: `2$ `,
    desc: `Fresh bananas from Ecuador`,
  },
  {
    icon: `🍏`,
    name: `Apples`,
    price: `1.5$ `,
    desc: `Fresh apples from Armenia`,
  },
  {
    icon: `🍇`,
    name: `Grapes`,
    price: `2.5$ `,
    desc: `Fresh grapes from Italy`,
  },
  {
    icon: `🍑`,
    name: `Peaches`,
    price: `3.5$ `,
    desc: `Fresh peaches from Armenia`,
  },
];
const li = products.map((item, index) => {
  return (
    <li key={index}>
      <Product
        icon={item.icon}
        name={item.name}
        price={item.price}
        description={item.desc}
      />
    </li>
  )
})
function App() {
  return (
    <div className="App">
      <Input />
      <ol>
        {li}
      </ol>
    </div>
  );
}

export default App;
