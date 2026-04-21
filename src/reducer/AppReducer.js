export default function AppReducer(state, action) {
  switch (action.type) {

    case "SET_DATA":
      return {
        ...state,
        orders: action.payload
      };

    case "FILTER_DATA":
      return {
        ...state,
        filteredOrders: state.orders.filter(order =>
          order.customerName
            .toLowerCase()
            .includes(action.payload.toLowerCase())
        )
      };

    default:
      return state;
  }
}