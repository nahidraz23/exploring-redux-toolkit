// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./redux/hook";

import { Button } from "./components/ui/button";

function App() {
  // const dispatch = useAppDispatch();
  // const {count}  = useAppSelector((state) => state.counter);

  // const handleIncrement = () => {
  //   dispatch(increment());
  // };

  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };

  return (
    <div>
      <h1>Basic ToDo App </h1>
      <Button>Test</Button>

      {/* <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(increment(5))}>Increment by 5</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
    </div>
  );
}

export default App;
