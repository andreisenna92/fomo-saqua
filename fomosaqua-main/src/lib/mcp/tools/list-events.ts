import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { events } from "@/components/fomo/data";

export default defineTool({
  name: "list_events",
  title: "List FOMO events",
  description:
    "Lista os eventos públicos de Saquarema exibidos no app FOMO, com título, data, horário, local, categoria e engajamento.",
  inputSchema: {
    category: z
      .string()
      .optional()
      .describe("Filtra eventos por categoria (ex: SURF, MÚSICA, GASTRONOMIA). Case-insensitive."),
    limit: z.number().int().positive().optional().describe("Número máximo de eventos a retornar."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, limit }) => {
    let result = events;
    if (category) {
      const c = category.toLowerCase();
      result = result.filter((e) => e.category.toLowerCase() === c);
    }
    if (limit) result = result.slice(0, limit);
    const rows = result.map((e) => ({
      id: e.id,
      title: e.title,
      category: e.category,
      date: e.date,
      time: e.time,
      location: e.location,
      interested: e.interested,
      checkins: e.checkins,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(rows, null, 2) }],
      structuredContent: { events: rows },
    };
  },
});
