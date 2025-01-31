import React from "react";
import { FaTruck } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <section>
      <div className="container mx-auto py-20 lg:px-3 px-1">
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* service-1 */}

          <div className="bg-blue-50 rounded-lg ">
            <div className=" flex flex-col items-center justify-center  p-4 gap-4">
              <FaTruck className="text-blue-600 text-2xl" />
              <h3>Super Fast and Free Delivery</h3>
            </div>
          </div>

          {/* service-2 */}
          <div className="space-y-1">
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex flex-col items-center justify-center gap-3">
                <MdOutlineSecurity className="text-blue-600 text-2xl" />
                <h1>Non-contact Shipping</h1>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex flex-col items-center justify-center gap-3">
                <GiTakeMyMoney className="text-blue-600 text-2xl" />
                <h3>Money-back Guaranteed</h3>
              </div>
            </div>
          </div>

          {/* service - 3 */}
          <div className="bg-blue-50 rounded-lg ">
            <div className=" flex flex-col items-center justify-center p-4 gap-4">
              <RiSecurePaymentLine className="text-2xl text-blue-600" />
              <h3>Super Secure Payment System</h3>
            </div>
          </div>

  
        </div>
      </div>
    </section>
  );
};

export default Services;
