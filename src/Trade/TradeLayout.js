import React from "react";
import { Link, Outlet } from "react-router-dom";

export function TradeLink() {
  return (
    <div>
      <Link to="add-trade">Add Trade</Link>
      <Link to="trade-calender">Trade Calender</Link>
      <Link to="trade-list">Trade List</Link>
    </div>
  );
}

export default function TradeLayout() {
  return (
    <div>
      <TradeLink />
      <div class="trade-content">
        <Outlet />
      </div>
    </div>
  );
}
