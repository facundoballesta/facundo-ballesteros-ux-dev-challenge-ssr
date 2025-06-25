import { ProductProps, Table } from "../components/table/table";
import CardsSection from "../components/card/CardsSection";
import data from "../data/data.json";

export const Dashboard = () => {
  return (
    <>
      <CardsSection />
      <Table data={data.orders as ProductProps[]} />
    </>
  );
};
