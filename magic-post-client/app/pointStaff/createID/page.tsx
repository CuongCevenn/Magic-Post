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

const createID = () => {
  return (
    <>
      <Breadcrumb pageName="Point Staff" />

      <div className="grid grid-cols-1 gap-9 sm:grid-cols-2">
        <div className="flex flex-col gap-9">
          {/* <!-- Input Fields --> */}
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Người gửi
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Họ, tên người gửi
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ, tên người gửi"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Địa chỉ người gửi
                </label>
                <input
                  type="text"
                  placeholder="Nhập địa chỉ người gửi"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Mã khách hàng
                </label>
                <input
                  type="text"
                  placeholder="Hệ thống tự tạo Mã khách hàng"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Mã bưu chính
                </label>
                <input
                  type="text"
                  placeholder="Hệ thống tự nhập Mã bưu chính"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Loại hàng gửi
                </label>
                <div className="flex px-10">
                  <CheckboxTwo>Tài liệu</CheckboxTwo>
                  <div className="flex px-30">
                    <CheckboxOne>Hàng Hóa</CheckboxOne>
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Nội dung
                </label>
                <textarea
                  rows={6}
                  placeholder="Nội dung"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                ></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-9">
          {/* // người nhạn */}

          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
              <h3 className="font-medium text-black dark:text-white">
                Người nhận
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Họ, tên người nhận
                </label>
                <input
                  type="text"
                  placeholder="Nhập họ, tên người nhận"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter  dark:bg-form-input dark:focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Địa chỉ người nhận
                </label>
                <input
                  type="text"
                  placeholder="Nhập địa chỉ người nhận"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Số điện thoại
                </label>
                <input
                  type="text"
                  placeholder="Nhập số điện thoại"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Mã đơn hàng
                </label>
                <input
                  type="text"
                  placeholder="Hệ thống tự tạo Mã khách hàng"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>

              <div>
                <label className="mb-3 block text-black dark:text-white">
                  Mã bưu chính
                </label>
                <input
                  type="text"
                  placeholder="Hệ thống tự nhập Mã bưu chính"
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:bg-form-input"
                />
              </div>
            </div>
          </div>
          <button
            // href="/auth/signupManage"
            className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Xác nhận & in biên
          </button>
        </div>
      </div>
    </>
  );
};

export default createID;
