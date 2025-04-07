import React from "react";
import { formatDate, getCountryName } from "@/lib/utils";

interface TableData {
  firstName: string;
  lastName: string;
  ageRange: string;
  country: string;
  course: string;
  referralSource: string;
  phoneNumber: string;
  email: string;
  discordUserName: string;
  paymentStatus: string;
  paymentType: string;
  paymentMethod: string;
  paidOn: string;
}

interface TableProps {
  data: TableData[] | undefined;
  currentPage: number;
  itemsPerPage: number;
}

const Table: React.FC<TableProps> = ({ data, currentPage, itemsPerPage }) => {
  const startIndex = (currentPage - 1) * itemsPerPage;

  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full border-collapse mt-5 border">
        <thead>
          <tr className="text-[#565D62] font-normal text-sm bg-[#F9FAFB]">
            <th className="px-4 py-6 text-left whitespace-nowrap">#</th>
            <th className="px-4 py-6 text-left whitespace-nowrap">
              First Name
            </th>
            <th className="px-4 py-6 text-left whitespace-nowrap">Last Name</th>
            <th className="px-4 py-6 text-left whitespace-nowrap">Email</th>
            <th className="px-4 py-6 text-left whitespace-nowrap">Age Range</th>
            <th className="px-4 py-6 text-left whitespace-nowrap">Country</th>
            <th className="px-4 py-6 text-left whitespace-nowrap">
              Course of Interest
            </th>
            <th className="px-4 py-6 text-left whitespace-nowrap">
              How did you hear?
            </th>
            <th className="px-4 py-6 text-right whitespace-nowrap">
              Phone Number
            </th>
            <th className="px-4 py-6 text-left whitespace-nowrap">
              Discord Username
            </th>
            <th className="px-4 py-6 text-left whitespace-nowrap">
              Payment status
            </th>
            <th className="px-4 py-6 text-left whitespace-nowrap">
              Payment Type
            </th>
            <th className="px-4 py-6 text-left whitespace-nowrap">
              Payment Option
            </th>
            <th className="px-4 py-6 text-left whitespace-nowrap">Time</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr
              key={index}
              // className={`text-sm ${index % 2 === 0 ? "bg-gray-100" : ""}`}
              className="text-sm"
            >
              <td className="px-4 py-6 text-left border-b">
                {startIndex + index + 1}
              </td>
              <td className="px-4 py-6 text-left border-b">{row.firstName}</td>
              <td className="px-4 py-6 text-left border-b">{row.lastName}</td>
              <td className="px-4 py-6 text-left border-b">{row.email}</td>

              <td className="px-4 py-6 text-left border-b">{row.ageRange}</td>
              <td className="px-4 py-6 text-left border-b">
                {getCountryName(row.country)}
              </td>
              <td className="px-4 py-6 text-left border-b">{row.course}</td>
              <td className="px-4 py-6 text-left border-b">
                {row.referralSource}
              </td>
              <td className="px-4 py-6 text-right border-b">
                {row.phoneNumber}
              </td>
              <td className="px-4 py-6 text-left border-b">
                {row.discordUserName}
              </td>
              <td className="px-4 py-6 text-left border-b capitalize">
                {row.paymentStatus}
              </td>
              <td className="px-4 py-6 text-left border-b capitalize">
                {row.paymentType}
              </td>
              <td className="px-4 py-6 text-left border-b capitalize">
                {row.paymentMethod}
              </td>
              <td className="px-4 py-6 text-left border-b">
                {formatDate(row.paidOn)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
