import { parse, format } from "date-fns";

export function formatDate(dateString: string) {
  if (!dateString) return "";

  const parsed = parse(dateString, "yyyy-MM-dd", new Date());
  return format(parsed, "PPP"); // Example: Jul 6th, 2025
}
