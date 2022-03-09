import './App.css';
import Button from './Button.js';
import Counter from './Counter.js';

function App() {
  let x = 5;
  let item = ['apple', 'oranges']
  return (
    <div className="App">
      <p>{x}</p>
      {item.map((item) => (
        <li>{item}</li>
      ))}
      <Button name = "Add" click ={() => setCount(count + 1)}/>
      <Button name = "Subtract" click ={() => setCount(count - 1)}/>
      <Button name = "Title 3" />
      <Counter />
    </div>
  );
}

export default App;
