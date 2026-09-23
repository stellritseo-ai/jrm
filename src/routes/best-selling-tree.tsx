import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/best-selling-tree")({
  beforeLoad: () => {
    throw redirect({ to: "/best-selling-trees", replace: true });
  },
});
