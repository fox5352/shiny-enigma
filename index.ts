import {
  DatabaseType
  type Component as ComponentType,
  ViewType,
  TableReturn,
} from "vulpine-lib";

export const database: DatabaseType = "supabase";

export const Component: ComponentType = {
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
