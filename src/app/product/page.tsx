import Image from "next/image";
import Link from "next/link";
import { TbMoneybag } from "react-icons/tb";
const products = [
  {
    id: 1,
    price: 100000,
    title: 'Jersey chelsea',
  },
  {
    id: 2,
    price: 112300,
    title: 'jersey mu',
  },
  {
    id: 3,
    price: 23000,
    title: 'hazard nametag',
  },
];
export default function Product() {
  return (
    <div className="row">\
    {products.map((item)=>{
      return(
      <div className="col-4" key={item.id}>
        <div className="card mb-3 border-3 overflow-hidden">
          <Image
            src={"/mobile.jpg"}
            alt={"screenshot"}
            width={500}
            height={400}
          />
          <div className="card-body">
            <h1>{item.title}</h1>
            <h5 className="card-text">Rp. {item.price}</h5>
            <Link data-test='link' href={`/product/${item.id}`}  className="btn btn-primary">
              <TbMoneybag /> Beli
            </Link>
          </div>
        </div>
      </div>
      )
    })}
    </div>
  );
}
