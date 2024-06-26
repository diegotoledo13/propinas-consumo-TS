import { useState } from "react";
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    const itemExist = order.find((orderItem) => orderItem.id === item.id);
    if (itemExist) {
      const upDateOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
      setOrder(upDateOrder);
    } else {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  };
  const removeItem = (id: MenuItem["id"]) => {
    setOrder(order.filter((orderItem) => orderItem.id !== id));
  };
  const placeOrder = () => {
    alert("Orden guardada");
    setOrder([]);
    setTip(0);
  };
  const removeTip = () => {
    setTip(0);
  };
  return {
    addItem,
    tip,
    setTip,
    order,
    removeItem,
    placeOrder,
    removeTip,
  };
}
