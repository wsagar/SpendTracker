import { useEffect, useReducer } from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import { DispatchContext, StateContext } from "./Context";
import "./MainPage.css";
import Login from "./Spend/Login";
import Register from "./Spend/Register";
import { reducer } from "./SpendReducer";
import AddTrade from "./Trade/AddTrade";
import Dashboard from "./Trade/Dashboard";
import TradeCalender from "./Trade/TradeCalender";
import TradeLayout from "./Trade/TradeLayout";
import TradeList from "./Trade/TradeList";
function Layout() {
  return (
    <div className="user-layout">
      <Outlet />
    </div>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer);

  const navigate = useNavigate();
  useEffect(() => {
    navigate("/user");
  }, []);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Routes>
          <Route path="user" element={<Layout />}>
            <Route path="" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
          <Route path="trade" element={<TradeLayout />}>
            <Route path="" element={<Dashboard />}></Route>
            <Route path="trade-calender" element={<TradeCalender />}></Route>
            <Route path="trade-list" element={<TradeList />}></Route>
            <Route path="add-trade" element={<AddTrade />}></Route>
          </Route>
        </Routes>
        <Outlet />
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
