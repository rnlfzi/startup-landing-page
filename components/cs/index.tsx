import Image from "next/image";
import Link from "next/link";

import { IoIosArrowForward } from "react-icons/io";

const CS = () => {
  return (
    <div className="px-5 md:px-52 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Image
          src="/assets/cta-2-1.png"
          height={1000}
          width={1000}
          alt="boost"
          className="w-full h-full object-cover md:order-last"
        />
        <div className="flex flex-col justify-end py-6 gap-10 pr-0 md:pr-12">
          <h2 className=" line-clamp-3 text-4xl text-custom-maintext font-semibold">
            Boost your agencies by choosing Ninja Developers
          </h2>
          <p className=" line-clamp-4 text-sm text-custom-maintext">
            We offer a risk-free trial period of up to two weeks. You will only
            have to pay if you are happy with the developer and wish to
            continue. If you are unsatisfied, we’ll refund payment or fix issues
            on our dime period customers.
          </p>
          <p className=" line-clamp-2 text-sm text-custom-ligthgrey">
            If you are happy with the developer and wish to continue. If you are
            unsatisfied, we’ll refund payment or fix issues.
          </p>
          <Link
            href="/"
            className="text-custom-secondary text-sm font-semibold flex items-center gap-2"
          >
            Learn More
            <IoIosArrowForward className="inline-block" size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CS;
