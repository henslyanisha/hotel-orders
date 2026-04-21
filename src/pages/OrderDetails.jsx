import { useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function OrderDetails() {
  const { id } = useParams(); // get id from URL
  const { state } = useContext(AppContext);

  // find order by id
  const order = state.orders.find(
    (o) => o.orderId === Number(id)
  );

  if (!order) return <h2>Order not found</h2>;

  return (
    <div>
      <h2>Order Details</h2>

      <p><strong>Order ID:</strong> {order.orderId}</p>

      <h3>Items:</h3>
      {order.items.map((item, index) => (
        <p key={index}>
          {item.name}
        </p>
      ))}

      <p><strong>Total Amount:</strong> ₹{order.totalAmount}</p>
    </div>
  );
}