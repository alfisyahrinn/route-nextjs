import React from "react";

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={`badge ${status === "pending" ? "bg-danger" : "bg-success"}`}
    >
      {status === "pending" ? "pending" : "paid"}
    </span>
  );
}
