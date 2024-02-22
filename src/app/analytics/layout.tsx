import React from "react";

export default function layout({
  children,
  login,
  register,
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  register: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div className="d-flex gap-4 justify-content-center">{login} {register}</div> 
    </div>
  );
}
