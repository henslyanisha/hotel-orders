import { createContext, useReducer } from "react";
import AppReducer from "../reducer/AppReducer";

export const AppContext = createContext();

// ✅ SAMPLE DATA
const sampleOrders = [
  {
    orderId: 1,
    customerName: "Rahul",
    restaurant: "KFC",
    items: [{ name: "Burger", price: 200, quantity: 2 }],
    totalAmount: 400,
    status: "delivered",
    deliveryTime: "30 mins",
    rating: 4
  },
  {
    orderId: 2,
    customerName: "Anisha",
    restaurant: "Domino's",
    items: [{ name: "Pizza", price: 300, quantity: 1 }],
    totalAmount: 300,
    status: "cancelled",
    deliveryTime: "-",
    rating: 0
  },
  {
    orderId: 3,
    customerName: "Karthik",
    restaurant: "McDonald's",
    items: [{ name: "Fries", price: 150, quantity: 2 }],
    totalAmount: 300,
    status: "delivered",
    deliveryTime: "25 mins",
    rating: 5
  },
  {
    orderId: 4,
    customerName: "Priya",
    restaurant: "Subway",
    items: [{ name: "Sandwich", price: 250, quantity: 1 }],
    totalAmount: 250,
    status: "delivered",
    deliveryTime: "20 mins",
    rating: 4
  }
];

// ✅ INITIAL STATE
const initialState = {
  orders: sampleOrders,
  filteredOrders: []
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};