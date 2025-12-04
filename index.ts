import {
  DatabaseType,
  type Component as ComponentType,
  ViewType,
  TableReturn,
  LoadReturn,
} from "vulpine-lib";

import { type SupabaseClient } from "@supabase/supabase-js";

const database: DatabaseType = "supabase";

type Product = {
  id: number;
  created_at: string;
  ref: number;
  name: string;
  description: string;
  amount: number;
  price: number;
};

const Component: ComponentType = {
  type: ViewType.Table,
  onLoad: async (db: SupabaseClient): Promise<LoadReturn> => {
    const { data, error } = await db.from("products").select("*");

    if (error) throw error;

    const tableData =
      data.map((product: Product) => [
        `${product.id}`,
        `${product.created_at}`,
        `${product.ref}`,
        `${product.name}`,
        `${product.description}`,
        `${product.amount}`,
        `${product.price}`,
      ]) || [];

    console.log(tableData);

    const table: TableReturn = [
      ["id", "created_at", "ref", "name", "description", "amount", "price"],
      tableData,
    ];

    console.log("Table");
    console.log(table);

    return {
      kind: "table",
      value: table,
    };
  },
  onDestroy: async () => {},
};

// Export as default
export default { Component, database };
