"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function SideNav() {
  const pathName = usePathname();

  return (
    <div className="list-group">
      <Link 
      data-test="side-nav-items"
        href="/dashboard"
        className={`list-group-item list-group-item-action ${
          pathName === "/dashboard" && "active"
        } `}
      >
        Dashboard
      </Link>
      <Link 
      data-test="side-nav-items"
        href="/dashboard/customers"
        className={`list-group-item list-group-item-action ${
          pathName === "/dashboard/customers" && "active"
        } `}
      >
        Customers
      </Link>
      <Link 
      data-test="side-nav-items"
        href="/dashboard/invoices"
        className={`list-group-item list-group-item-action ${
          pathName === "/dashboard/invoices" && "active"
        } `}
      >
        Invoice
      </Link>
    </div>
  );
}
