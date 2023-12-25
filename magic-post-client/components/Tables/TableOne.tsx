import { BRAND } from "@/types/brand";
import Image from "next/image";

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

const TableHome = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Trạng thái đơn hàng
      </h4>

      <div className="hidden sm:block flex items-center justify-center ">
        <form action="https://www.google.com/" method="POST">
          <div className="relative py-10 flex items-center justify-center ">
            <input
              type="text"
              placeholder="Nhập mã đơn hàng"
              className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125 border-2 h-10 border-rose-600 rounded"
            />
            <button className=" px-5 py-10  ">
              <svg
                className=" hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                width="20"
                height="20"
                viewBox="0 0 20 20"
              >
                // icon search
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                  fill=""
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      <div className=" flex-col">
        <div className="border grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="border p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">STT</h5>
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
  );
};

export default TableHome;
