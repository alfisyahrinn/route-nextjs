import { Metadata } from "next/dist/lib/metadata/types/metadata-interface";
import React, { ReactNode } from "react";
interface ProfileData {
  name: string;
  role: 1 | 2;
}

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 0,
    },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data =await res.json()
  console.log(data);
  
  return await res.json();
}

// export async function generateMetadata(): Promise<Metadata> {
//   const profile: ProfileData = await getData();
//   const roleName = profile.role === 1 ? "Admin" : "Siswa";
//   return {
//     title: `Dashboard ${roleName}`,
//   };
// }
export default async function Layout({
  profile,
  statistik,
}: {
  profile: ReactNode;
  statistik: ReactNode;
}) {
  getData()
  // const name: ProfileData = await getData();
  return (
    <>
    <h1>holla</h1>
      <div className="flex h-screen">
        <div className="bg-green-400 w-full">{profile}</div>
          <div className="bg-red-400 w-full">{statistik}</div>
      </div>
    </>
  );
}
