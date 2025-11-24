import {
  type Route as RouteType,
  type Component as ComponentType,
  ViewType,
} from "vulpine-lib";

export const Route: RouteType = "supabase";

export const Component: ComponentType = {
  type: ViewType.Table,
  onLoad: () => {},
  onDestroy: async () => {},
};
