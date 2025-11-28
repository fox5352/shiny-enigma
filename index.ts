import {
  DatabaseType,
  type Component as ComponentType,
  ViewType,
  TableReturn,
  LoadReturn,
} from "vulpine-lib";

const database: DatabaseType = "supabase";

const Component: ComponentType = {
  type: ViewType.Table,
  onLoad: async (db): Promise<LoadReturn> => {
    const data: TableReturn = [
      ["id", "name"],
      ["1", "Alice", "2", "Bob"],
    ];
    return {
      kind: "table",
      value: data,
    };
  },
  onDestroy: async () => {},
};

// Export as default
export default { Component, database };
