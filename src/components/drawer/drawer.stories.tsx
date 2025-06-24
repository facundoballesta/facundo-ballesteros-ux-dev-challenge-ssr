import React, { useState } from "react";
import Drawer from "./drawer";
import type { ProductStatusProps } from "../table/table";

export default {
  title: "Components/Drawer",
  component: Drawer,
};

export const OrderDetail = () => {
  const [open, setOpen] = useState(false);
  // Datos de ejemplo de una orden
  const order = {
    imageSrc: "https://picsum.photos/480/290",
    imageAlt: "Producto ejemplo",
    product: "Cowl neck sweater",
    customer: "Savannah Nguyen",
    status: "Pending" as ProductStatusProps,
    date: "Sep 20, 2024 21:04",
    amount: "$14.81",
    paymentMethod: "VISA ****5858",
    id: 1,
  };
  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setOpen(true)}>Ver detalle de orden</button>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        imageSrc={order.imageSrc}
        imageAlt={order.imageAlt}
        product={order.product}
        customer={order.customer}
        status={order.status}
        date={order.date}
        amount={order.amount}
        paymentMethod={order.paymentMethod}
        id={order.id}
      />
    </div>
  );
};
