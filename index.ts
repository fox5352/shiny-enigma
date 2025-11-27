import {
  DatabaseType,
  type Component as ComponentType,
  ViewType,
  TableReturn,
} from "vulpine-lib";

const database: DatabaseType = "supabase";

const Component: ComponentType = {
  type: ViewType.Table,
  onLoad: async (db): Promise<TableReturn> => {
    const data: TableReturn = [
      ["id", "name"],
      ["1", "Alice", "2", "Bob"],
    ];
    return data;
  },
  onDestroy: async () => {},
};

// Export as default
export default { Component, database };
