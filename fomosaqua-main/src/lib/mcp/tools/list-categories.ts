import { defineTool } from "@lovable.dev/mcp-js";
import { categories } from "@/components/fomo/data";

export default defineTool({
  name: "list_categories",
  title: "List FOMO categories",
  description: "Lista as categorias de eventos do FOMO em Saquarema e a quantidade de eventos em cada uma.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const rows = categories.map((c) => ({ id: c.id, name: c.name, emoji: c.emoji, count: c.count }));
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { categories: rows },
    };
  },
});
