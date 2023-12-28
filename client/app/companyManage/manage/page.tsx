"use client";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import { accounts } from "@/types/Accounts";
import Link from "next/link";
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Quản lý",
  description:
    "Trang Quản lý Tài khoản các trưởng điểm Tập kết và điểm giao dịch",
  // other metadata
};

const accountsData: accounts[] = [
  {
    name: "Nguyễn Đình Cường",
    username: "DTK-MB",
    role: "Trưởng ĐTK",
    region: `Miền Bắc`,
    transactionPoin: "",
    status: "Active",
  },
  {
    name: "Hoàng",
    role: "Trưởng ĐGD",
    username: "DGD-MB-01",
    region: `Miền Bắc`,
    transactionPoin: "Hà Nội",
    status: "Close",
  },
  {
    name: "Hoàng",
    role: "Trưởng ĐGD",
    username: "DGD-MB-01",
    region: `Miền Bắc`,
    transactionPoin: "Hà Nội",
    status: "Active",
  },
  {
    name: "Hoàng",
    role: "Trưởng ĐGD",
    username: "DGD-MB-01",
    region: `Miền Bắc`,
    transactionPoin: "Hà Nội",
    status: "Active",
  },
];

const Manage = () => {
  const [accountsData, setAccountsData] = useState([]);
  const [users, setUsers] = useState([{}]);
  const [count, setCount] = useState("");

  useEffect(() => {
    // Gửi yêu cầu đến API để lấy dữ liệu
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/v1/users"); // Thay 'URL_API' bằng URL thực tế của API
        const data = await response.json();

        setCount(data.count);
        setUsers(data.users);

        console.log(data.count);
        // console.log(data.users);
        // const mockApiResponse = data;
        // setAccountsData(mockApiResponse);
        // console.log(mockApiResponse);
      } catch (error) {
        console.error("Error fetching data from API:", error);
      }
    };

    fetchData(); // Gọi hàm để lấy dữ liệu khi component được mount
  }, []); // [] đảm bảo useEffect chỉ chạy một lần sau khi component được mount

  return (
    <>
      <Breadcrumb pageName="Quản lý" />

      <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
          Quản lý tài khoản và các điểm
        </h4>

        <div className="mb-1 flex flex-col px-20 py-5 gap-50 xl:flex-row">
          <div className="mb-2">
            <label className="mb-2.5 block text-black dark:text-white">
              Điểm tập kết
            </label>
            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select className="relative z-20  appearance-none rounded border border-stroke bg-transparent py-3 px-10 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                <option value="">Toàn quốc</option>
                <option value="">Miền Bắc</option>
                <option value="">Miền Trung</option>
                <option value="">Miền Nam</option>
              </select>
              <span className="absolute top-1/2 right-2 z-30 -translate-y-1/2">
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>

          <div className="mb-2">
            <label className="mb-2.5 block text-black dark:text-white">
              Điểm giao dịch
            </label>
            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select className="relative z-20  appearance-none rounded border border-stroke bg-transparent py-3 px-10 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                <option value="">Toàn quốc</option>
                <option value="">Điểm giao dịch 1</option>
                <option value="">Điểm giao dịch 2</option>
                <option value="">Điểm giao dịch 3</option>
                <option value="">Điểm giao dịch 4</option>
              </select>
              <span className="absolute top-1/2 right-2 z-30 -translate-y-1/2">
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g opacity="0.8">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                      fill=""
                    ></path>
                  </g>
                </svg>
              </span>
            </div>
          </div>

          <Link
            href="/auth/signupManage"
            className="inline-flex items-center justify-center rounded-full bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Tạo tài khoản cho trưởng điểm
          </Link>
        </div>

        {/* table */}
        <div className="max-w-full overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr className="bg-gray-2 text-left dark:bg-meta-4">
                <th className="min-w-[20px] py-4 px-2 font-medium text-black dark:text-white xl:pl-5">
                  STT
                </th>
                <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                  Họ tên
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Tên tài khoản
                </th>
                <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                  Chức vụ
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Khu vực
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Điểm giao dịch
                </th>
                <th className="py-4 px-4 font-medium text-black dark:text-white">
                  Trạng thái
                </th>
                <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                  Quản lý
                </th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user, index) => {
                  return(
                    <tr key={index}>
                    
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.role}</td>
                      <td>{user.region}</td>
                    </tr>
                  )

                      
                }
              }

            
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Manage;
