import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/get-free-consultation")({
  beforeLoad: () => {
    throw redirect({ to: "/lets-talk", replace: true });
  },
});
