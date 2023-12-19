import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { BRAND } from "@/types/brand";

export const metadata: Metadata = {
  title: "Thống kê",
  description: "Trang thống kê của giám đốc công ty",
  // other metadata
};

const brandData: BRAND[] = [
  {
    id: "DH00001",
    time: "7:00 12/12/2023",
    status: "Đang giao",
    local: "DGD123-Trung Hòa",
    phone: 357698999,
  },
  {
    id: "DH00001",
    time: "7:00 12/12/2023",
    status: "Đang giao",
    local: "DGD123-Trung Hòa",
    phone: 357698999,
  },
  {
    id: "DH00001",
    time: "7:00 12/12/2023",
    status: "Đang giao",
    local: "DGD123-Trung Hòa",
    phone: 357698999,
  },
  {
    id: "DH00001",
    time: "7:00 12/12/2023",
    status: "Đang giao",
    local: "DGD123-Trung Hòa",
    phone: 357698999,
  },
  {
    id: "DH00001",
    time: "7:00 12/12/2023",
    status: "Đang giao",
    local: "DGD123-Trung Hòa",
    phone: 357698999,
  },
];

const statistical = () => {
  return (
    <>
      <Breadcrumb pageName="Thống kê" />
      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Thống kê hàng gửi, hàng nhận trên toàn quốc
        </h4>

        <div className="flex">
          <div className="mb-4.5 px-50">
            <label className="mb-2.5 block text-black dark:text-white">
              Điểm tập kết
            </label>
            <div className=" relative z-20 bg-transparent dark:bg-form-input">
              <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-10 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                <option value="">Toàn quốc</option>
                <option value="">Miền Bắc</option>
                <option value="">Miền Trung</option>
                <option value="">Miền Nam</option>
              </select>
            </div>
          </div>

          <div className="mb-4.5">
            <label className="mb-2.5 block text-black dark:text-white">
              Điểm giao dịch
            </label>
            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-10 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                <option value="">Điểm giao dịch 1</option>
                <option value="">Điểm giao dịch 2</option>
                <option value="">Điểm giao dịch 3</option>
                <option value="">Điểm giao dịch 4</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="border grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
            <div className="border p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                STT
              </h5>
            </div>
            <div className="border p-2.5 xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                {" "}
                Mã đơn
              </h5>
            </div>
            <div className="border p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Thời gian
              </h5>
            </div>
            <div className="border p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Trạng thái
              </h5>
            </div>
            <div className="border hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Vị trí
              </h5>
            </div>
            <div className="border hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                Điện thoại
              </h5>
            </div>
          </div>

          <div className="border grid grid-cols-3   sm:grid-cols-6">
            <div className="border p-2.5 xl:p-5">Lọc</div>

            <div className="border">
              <input className=" px-1 py-4"></input>
            </div>
            <div className="border">
              <input className=" px-1 py-4"></input>
            </div>
            <div className="border">
              <input className=" px-1 py-4"></input>
            </div>
            <div className="border">
              <input className=" px-1 py-4"></input>
            </div>
            <div className="border">
              <input className=" px-1 py-4"></input>
            </div>
          </div>

          {brandData.map((brand, key) => (
            <div
              className={`grid grid-cols-3 sm:grid-cols-6 ${
                key === brandData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="border flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{key + 1}</p>
              </div>

              <div className="border flex items-center gap-3 p-2.5 xl:p-5">
                <p className="hidden text-black dark:text-white sm:block">
                  {brand.id}
                </p>
              </div>

              <div className="border flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{brand.time}</p>
              </div>

              <div className="border flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{brand.status}</p>
              </div>

              <div className="border hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">{brand.local}</p>
              </div>

              <div className="border hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-meta-5">0{brand.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default statistical;
