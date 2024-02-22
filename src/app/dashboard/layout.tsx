import SideNav from "@/components/sidenav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="row">
      <div className="col-3 ">
        <SideNav />
      </div>
      <div className="col-9">{children}</div>
    </div>
  );
}
