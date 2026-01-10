// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { useAppDispatch, useAppSelector } from "./redux/hook";

import { Outlet } from "react-router";
import { Button } from "./components/ui/button";
import Navbar from "./components/layout/Navbar";

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
      {/* <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(increment(5))}>Increment by 5</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
      <>
        <Navbar />
        <div className="container mx-auto">
          <Outlet />
        </div>
      </>
    </div>
  );
}

export default App;
