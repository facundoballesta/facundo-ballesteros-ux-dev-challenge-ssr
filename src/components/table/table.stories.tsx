import { Table, ProductProps } from "./table";
import data from "../../data/data.json";

interface DataJson {
    orders: ProductProps[];
}

const typedData = data as unknown as DataJson;
const orders: ProductProps[] = typedData.orders;

export default {
    title: "Components/Table",
    component: Table,
    parameters: {
        docs: {
            description: {
                component:
                    "Tabla de transacciones con ordenamiento, selección de fila y drawer de detalles. Utiliza TanStack Table y muestra el estado del pedido con un badge. Haz click en una fila para ver los detalles.",
            },
        },
    },
};

const Template = (args: { data: ProductProps[] }) => <Table {...args} />;

export const Default = Template.bind({});
(Default as typeof Template & { args: { data: ProductProps[] } }).args = {
    data: orders,
};
