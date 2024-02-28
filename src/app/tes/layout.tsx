import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import React, { ReactNode } from "react";
interface ProfileData {
  id: number;
  name: string;
  role: "admin" | "user";
}

async function getData() {
  const res = await fetch("http://localhost:3004/users/1", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return await res.json();
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getData();
  const roleName = data.role === "admin" ? "Admin" : "Siswa";
  return {
    title: `Dashboard ${roleName}`,
  };
}
export default async function Layout({
  profile,
  statistik,
}: {
  profile: ReactNode;
  statistik: ReactNode;
}) {
  const data = await getData();
  console.log(data);

  return (
    <>
      <h1>role:   {data.role}</h1>
      <div className="flex h-screen">
        <div className="bg-green-400 w-full">{profile}</div>
        {data.role === "admin" && (
          <div className="bg-red-400 w-full">{statistik}</div>
        )}
      </div>
    </>
  );
}
