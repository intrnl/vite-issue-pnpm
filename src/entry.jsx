import { h, render } from 'preact';

import { Store } from '@intrnl/substate';
import { useStoreState } from '@intrnl/substate/preact';


let CounterStore = new Store({
  name: 'Counter',
  initialState: {
    value: 0,
  },
});

function increment () {
  CounterStore.update((draft) => { draft.value++ });
}

function decrement () {
  CounterStore.update((draft) => { draft.value-- });
}


function Display () {
  let count = useStoreState(CounterStore, (store) => store.value);

  return (
    <div>
      {count}
    </div>
  );
}

function Buttons () {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  )
}


function App () {
  return (
    <div>
      <Display />
      <Buttons />
    </div>
  );
}

render(<App />, document.querySelector('#root'));
