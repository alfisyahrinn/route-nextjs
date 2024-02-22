"use client";
import Image from "next/image";
export default function page({ params }: { params: { id: string } }) {
  const products = [
    {
      id: 1,
      price: 100000,
      title: "Jersey chelsea",
    },
    {
      id: 2,
      price: 112300,
      title: "jersey mu",
    },
    {
      id: 3,
      price: 23000,
      title: "hazard nametag",
    },
  ];
  const selectedProduct = products.find(product => product.id.toString() === params.id);
  return (
    <div className="d-flex justify-content-center">
      <div className="">
        <div className="card mb-3 border-3 overflow-hidden">
          <Image
            src={"/mobile.jpg"}
            alt={"screenshot"}
            width={500}
            height={400}
          />
          <div className="card-body">
            <h1>{selectedProduct?.title}</h1>
            <h5 className="card-text">Rp. {selectedProduct?.price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
