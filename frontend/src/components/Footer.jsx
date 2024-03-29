import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-bgSecondary p-[1.5em] flex flex-col gap-[2em] md:gap-[6em]">
      <div className="flex flex-col gap-[2em] md:flex-row md:justify-around">
        <Link to="/" className="text-textYellow">
          Binstore
        </Link>

        <div className="flex flex-col">
          <h3 className="text-[1.1rem] mb-[1em] text-textSecondary font-bold md:mb-[1.5em]">
            Terms & policies
          </h3>
          <div className="flex flex-col gap-[0.5em]">
            <Link to="/" className="text-[0.9rem]">
              Terms of service
            </Link>
            <Link to="/" className="text-[0.9rem]">
              Privacy policy
            </Link>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.1rem] mb-[1em] text-textSecondary font-bold mb-[1.5em]">
            Company
          </h3>
          <div className="flex flex-col gap-[0.5em]">
            <Link to="/" className="text-[0.9rem]">
              Home
            </Link>
            <Link to="/" className="text-[0.9rem]">
              About us
            </Link>
            <Link to="/" className="text-[0.9rem]">
              Contact us
            </Link>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.1rem] mb-[1em] text-textSecondary font-bold md:mb-[1.5em]">
            Contact
          </h3>
          <div className="flex flex-col gap-[0.5em]">
            <p className="text-[0.9rem]">(+234) 902 061 7734</p>
            <p className="text-[0.9rem]">codewitgabi222@gmail.com</p>
            <a
              href="https://github.com/codewitgabi"
              className="text-[1rem] text-textYellow"
            >
              github.com/codewitgabi
            </a>
          </div>
        </div>

        <div className="">
          <h3 className="text-[1.1rem] text-textSecondary mb-[1em] font-bold md:mb-[1.5em]">
            Location
          </h3>
          <div className="flex flex-col gap-[0.5em]">
            <p className="text-[0.9rem]">Talba road, Gidan Kwano,</p>
            <p className="text-[0.9rem]">Minna, Niger state,</p>
            <p className="text-[0.9rem]">Nigeria.</p>
          </div>
        </div>
      </div>

      <div>
        <hr className="h-[0.1px] bg-textSecondary border-none mb-[1em] md:mb-[2em]" />
        <p className="text-[0.85rem] text-center">
          Copyright &copy; 2024 Binshop. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
