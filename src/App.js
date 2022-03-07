import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index.js";

function App() {
  // get the data from the redux store
  const account = useSelector((state) => state.account);   

  // dispatch function
  const dispatch = useDispatch();
  const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="App">
      <h1>{account}</h1>
      {/* when you click the button it dispatch the action to reducer to update the state in store */}
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
    </div>
  );
}

export default App;
