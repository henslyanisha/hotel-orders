import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Orders() {
  const { state } = useContext(AppContext);

  return (
    <div>
      {/* TOTAL ORDERS */}
      <h2>Total Orders: {state.orders.length}</h2>

      {/* ORDER LIST */}
      {state.orders.map(order => (
        <div
          key={order.orderId}
          data-testid="order-item"
          style={{ margin: "10px 0" }}
        >
          <p><strong>Customer Name:</strong> {order.customerName}</p>
          <p><strong>Restaurant:</strong> {order.restaurant}</p>
        </div>
      ))}
    </div>
  );
}