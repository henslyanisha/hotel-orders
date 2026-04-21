import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Stats() {
  const { state } = useContext(AppContext);

  // ✅ TOTAL ORDERS
  const totalOrders = state.orders.length;

  // ✅ DELIVERED ORDERS
  const deliveredOrders = state.orders.filter(
    (o) => o.status === "delivered"
  ).length;

  // ✅ CANCELLED ORDERS
  const cancelledOrders = state.orders.filter(
    (o) => o.status === "cancelled"
  ).length;

  // 🚨 MANDATORY FOR EVALUATION
  window.appState = {
    totalOrders,
    deliveredOrders,
    cancelledOrders
  };

  return (
    <div>
      <h2>Order Statistics</h2>

      <p data-testid="total-orders">
        Total Orders: {totalOrders}
      </p>

      <p data-testid="delivered-orders">
        Delivered Orders: {deliveredOrders}
      </p>

      <p data-testid="cancelled-orders">
        Cancelled Orders: {cancelledOrders}
      </p>
    </div>
  );
}