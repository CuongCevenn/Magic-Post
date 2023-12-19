import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import CheckboxFive from "@/components/Checkboxes/CheckboxFive";
import CheckboxFour from "@/components/Checkboxes/CheckboxFour";
import CheckboxOne from "@/components/Checkboxes/CheckboxOne";
import CheckboxThree from "@/components/Checkboxes/CheckboxThree";
import CheckboxTwo from "@/components/Checkboxes/CheckboxTwo";
import SwitcherFour from "@/components/Switchers/SwitcherFour";
import SwitcherOne from "@/components/Switchers/SwitcherOne";
import SwitcherThree from "@/components/Switchers/SwitcherThree";
import SwitcherTwo from "@/components/Switchers/SwitcherTwo";
import { BRAND } from "@/types/brand";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Form Elements Page | Next.js E-commerce Dashboard Template",
  description: "This is Form Elements page for TailAdmin Next.js",
  // other metadata
};

const delivery = () => {
  return (
    <>
      <Breadcrumb pageName="Point Staff" />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Giao hàng
        </h4>

        <div className="hidden sm:block">
          <form action="https://formbold.com/s/unique_form_id" method="POST">
            <div className="relative">
              <input
                type="text"
                placeholder="Nhập mã đơn hàng"
                className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125 border-2 h-10 border-rose-600 rounded"
              />
            </div>
          </form>
          <button className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            Thành công
          </button>
          <button className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
            Giao thất bại
          </button>
        </div>
      </div>
    </>
  );
};

export default delivery;
