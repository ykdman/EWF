import { setupWorker } from "msw/browser";
import { getCategory } from "./category.mock";

const handler = [getCategory];

export const worker = setupWorker(...handler);
