import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-bgSecondary p-[1.5em] flex flex-col gap-[2em]">
      <div className="flex flex-col gap-[2em]">
        <Link to="/">GShop</Link>

        <div className="flex flex-col">
          <h3 className="text-[1.1rem] mb-[1em] text-white">Terms & policies</h3>
          <div className="flex flex-col gap-[0.5em]">
            <Link to="/" className="text-[0.9rem]">Terms of service</Link>
            <Link to="/" className="text-[0.9rem]">Privacy policy</Link>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.1rem] mb-[1em] text-white">Company</h3>
          <div className="flex flex-col gap-[0.5em]">
            <Link to="/" className="text-[0.9rem]">Home</Link>
            <Link to="/" className="text-[0.9rem]">About us</Link>
            <Link to="/" className="text-[0.9rem]">Contact us</Link>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.1rem] mb-[1em] text-white">Contact</h3>
          <div className="flex flex-col gap-[0.5em]">
            <p className="text-[0.9rem]">(+234) 902 061 7734</p>
            <p className="text-[0.9rem]">codewitgabi222@gmail.com</p>
            <a href="https://github.com/codewitgabi" className="text-[1rem] text-textYellow">github.com/codewitgabi</a>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.1rem] text-white mb-[1em]">Location</h3>
          <div className="flex flex-col gap-[0.5em]">
            <p className="text-[0.9rem]">Talba road, Gidan Kwano,</p>
            <p className="text-[0.9rem]">Minna, Niger state,</p>
            <p className="text-[0.9rem]">Nigeria.</p>
          </div>
        </div>
      </div>

      <div>
        <hr className="h-[0.1px] bg-white border-none mb-[1em]" />
        <p className="text-[0.85rem] text-center">Copyright &copy; 2024 gshop. All Rights Reserved</p>
      </div>
    </footer>
  );
}


export default Footer;
