import {
  DatabaseType,
  type Component as ComponentType,
  ViewType,
  TableReturn,
  LoadReturn,
} from "vulpine-lib";

import { type SupabaseClient } from "@supabase/supabase-js";

const database: DatabaseType = "supabase";

const Component: ComponentType = {
  type: ViewType.Table,
  onLoad: async (db: SupabaseClient): Promise<LoadReturn> => {
    const { data, error } = await db.from("products").select("*");

    console.log(data);

    const table: TableReturn = [
      ["id", "name"],
      [
        ["1", "Alice"],
        ["2", "Bob"],
      ],
    ];
    return {
      kind: "table",
      value: table,
    };
  },
  onDestroy: async () => {},
};

// Export as default
export default { Component, database };
