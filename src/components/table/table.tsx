import React from "react";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";
import styles from "./table.module.css";
import StatusBadge from "./StatusBadge";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import OrderDrawer from "./OrderDrawer";

export type ProductStatusProps = "Approved" | "Pending" | "Rejected";

export type ProductProps = {
    id: number;
    customer: string;
    date: string;
    product: string;
    status: ProductStatusProps;
    email: string;
    amount: string;
    paymentMethod: string;
};

type Props = {
    data: ProductProps[];
};

const defaultColumns: ColumnDef<ProductProps>[] = [
    {
        header: "Customer",
        accessorKey: "customer",
        cell: ({ row }) => (
            <div>
                <span className={styles.customerCell}>{row.original.customer}</span>
                <div className={styles.customerEmail}>{row.original.email}</div>
            </div>
        ),
    },
    {
        header: "Date",
        accessorKey: "date",
    },
    {
        header: "Product",
        accessorKey: "product",
    },
    {
        header: "Status",
        accessorKey: "status",
        cell: ({ getValue }) => <StatusBadge status={getValue() as ProductStatusProps} />,
    },
    {
        header: "Amount",
        accessorKey: "amount",
        cell: ({ getValue }) => (
            <div className={styles.amountCell} style={{ textAlign: "right", width: "100%" }}>
                {String(getValue())}
            </div>
        ),
    },
];

const mobileColumns: ColumnDef<ProductProps>[] = [
    {
        header: "Customer",
        accessorKey: "customer",
        cell: ({ row }) => (
            <span className={styles.customerCell}>{row.original.customer}</span>
        ),
    },
    {
        header: "Status",
        accessorKey: "status",
        cell: ({ getValue }) => <StatusBadge status={getValue() as ProductStatusProps} iconOnly />,
    },
    {
        header: "Amount",
        accessorKey: "amount",
        cell: ({ getValue }) => (
            <div className={styles.amountCell} style={{ textAlign: "right", width: "100%" }}>
                {String(getValue())}
            </div>
        ),
    },
];

function useIsMobile() {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 600);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);
    return isMobile;
}

export const Table = ({ data }: Props) => {
    const isMobile = useIsMobile();
    const [columns] = React.useState(() => [...defaultColumns]);
    const [sorting, setSorting] = React.useState<SortingState>([]);
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [selectedOrder, setSelectedOrder] = React.useState<ProductProps | null>(null);

    const handleRowClick = (order: ProductProps) => {
        setSelectedOrder(order);
        setDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
        setSelectedOrder(null);
    };

    const table = useReactTable({
        data,
        columns: isMobile ? mobileColumns : columns,
        state: {
            sorting,
        },
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
    });

    return (
        <div className={styles.tableContainer}>
            <h2 className={styles.sectionTitle}>Transactions</h2>
            <p className={styles.sectionDescription}>Recent transactions from your store.</p>
            <div className={styles.tableScroll}>
                <table className={styles.table}>
                    <thead>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    const isAmount = header.column.id === "amount";
                                    const sorted = header.column.getIsSorted();
                                    return (
                                        <th
                                            key={header.id}
                                            colSpan={header.colSpan}
                                            onClick={header.column.getToggleSortingHandler()}
                                            style={isAmount ? { textAlign: "right" } : {}}
                                        >
                                            {header.isPlaceholder ? null : (
                                                <span
                                                    style={{
                                                        userSelect: "none",
                                                        display: "inline-flex",
                                                        alignItems: "center",
                                                    }}
                                                >
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                    {sorted === "asc" && (
                                                        <ChevronUpIcon
                                                            style={{ marginLeft: 4, width: 16, height: 16 }}
                                                        />
                                                    )}
                                                    {sorted === "desc" && (
                                                        <ChevronDownIcon
                                                            style={{ marginLeft: 4, width: 16, height: 16 }}
                                                        />
                                                    )}
                                                </span>
                                            )}
                                        </th>
                                    );
                                })}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} onClick={() => handleRowClick(row.original)} style={{ cursor: "pointer" }}>
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <OrderDrawer open={drawerOpen} onClose={handleDrawerClose} order={selectedOrder} />
        </div>
    );
};
