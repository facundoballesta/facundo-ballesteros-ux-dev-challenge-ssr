import React, { useEffect, useState, useRef } from "react";
import Drawer from "../drawer/drawer";
import { ProductProps } from "./table";

interface OrderDrawerProps {
  open: boolean;
  onClose: () => void;
  order: ProductProps | null;
}

const ANIMATION_DURATION = 300; // Debe coincidir con el transition del drawer

const OrderDrawer: React.FC<OrderDrawerProps> = ({ open, onClose, order }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [drawerOrder, setDrawerOrder] = useState<ProductProps | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openRaf = useRef<number | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (open && order) {
      setDrawerOrder(order);
      setShouldRender(true);
      setDrawerOpen(false); // Monta oculto
      if (openRaf.current) cancelAnimationFrame(openRaf.current);
      openRaf.current = requestAnimationFrame(() => setDrawerOpen(true));
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    } else if (!open && drawerOrder) {
      setDrawerOpen(false); // Activa animación de salida
      closeTimeout.current = setTimeout(() => {
        setShouldRender(false);
        setDrawerOrder(null);
      }, ANIMATION_DURATION);
    }
    return () => {
      if (openRaf.current) cancelAnimationFrame(openRaf.current);
      if (closeTimeout.current) clearTimeout(closeTimeout.current);
    };
  }, [open, order, drawerOrder]);

  if (!shouldRender || !drawerOrder) return null;
  return (
    <Drawer
      open={drawerOpen}
      onClose={onClose}
      imageSrc="https://picsum.photos/480/290"
      imageAlt={drawerOrder.product}
      product={drawerOrder.product}
      customer={drawerOrder.customer}
      status={drawerOrder.status}
      date={drawerOrder.date}
      amount={drawerOrder.amount}
      paymentMethod={drawerOrder.paymentMethod}
      id={drawerOrder.id}
    />
  );
};

export default OrderDrawer;
