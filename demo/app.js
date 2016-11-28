import { render, dom } from '../index';
import Counter from './counter';
import { subscribe, dispatch } from './store';
import { add, subtract, set } from './actions';

const App = ({state}) => (
  <div>
    <div>
      <h1>RektJS Demo App</h1>
    </div>
    <Counter
      counter={state.counter}
      onAdd={() => dispatch(add(1))}
      onSubtract={() => dispatch(subtract(1))}
    />
  </div>
);

subscribe(state => {
  render(
    <App state={state} />,
    document.getElementById('root')
  );
});

//setInterval(() => dispatch(set(Math.floor(Math.random() * 200))), 5);
