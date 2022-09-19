import chartData from "@/data/chart";
import { rest } from "msw";

export default [
  rest.get(
    "https://jsonplaceholder.typicode.com/posts",
    (_, response, context) => {
      return response(context.json(chartData));
    }
  ),
];
