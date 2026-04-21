import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Filter() {
  const { state, dispatch } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const handleChange = (value) => {
    setSearch(value);

    dispatch({
      type: "FILTER_DATA",
      payload: value
    });
  };

  const data = search ? state.filteredOrders : state.orders;

  return (
    <div>
      <h2>Filter Orders by Restaurant</h2>

      <input
        data-testid="filter-input"
        placeholder="Enter restaurant name"
        value={search}
        onChange={(e) => handleChange(e.target.value)}
      />

      {data.map(order => (
        <div key={order.orderId} data-testid="order-item">
          <p><strong>{order.customerName}</strong></p>
          <p>Restaurant: {order.restaurant}</p>
        </div>
      ))}
    </div>
  );
}