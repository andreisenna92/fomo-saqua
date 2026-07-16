import { defineMcp } from "@lovable.dev/mcp-js";
import listEventsTool from "./tools/list-events";
import listCategoriesTool from "./tools/list-categories";

export default defineMcp({
  name: "fomo-saquarema-mcp",
  title: "FOMO Saquarema",
  version: "0.1.0",
  instructions:
    "Ferramentas públicas do app FOMO — descubra eventos que acontecem em Saquarema. Use `list_categories` para ver as categorias disponíveis e `list_events` para listar eventos (opcionalmente filtrando por categoria).",
  tools: [listEventsTool, listCategoriesTool],
});
