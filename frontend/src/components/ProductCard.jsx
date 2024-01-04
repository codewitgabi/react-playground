import { CartPlus } from "react-bootstrap-icons";

function ProfileCard({ product }) {
  return (
    <div className="bg-bgSecondary">
      <img src={ product?.image } alt="product-img" className="w-full h-[200px] object-cover"/>
      <div className="p-2">
        <p className="text-[0.8rem]">{ product?.name }</p>
        <div className="mt-[0.5em] flex items-center justify-between">
          <span className="font-bold text-[0.8rem]">N { product?.price }</span>
          <CartPlus className="text-[1.2rem]" />
        </div>
      </div>
    </div>
  );
}


export default ProfileCard;