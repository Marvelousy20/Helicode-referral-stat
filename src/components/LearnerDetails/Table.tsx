import React from "react";

interface TableData {
  firstName: string;
  lastName: string;
  ageRange: string;
  country: string;
  course: string;
  referralSource: string;
  phoneNumber: string;
}

interface TableProps {
  data: TableData[] | undefined;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table-auto min-w-full border-collapse mt-5 border">
        <thead>
          <tr className="text-[#565D62] font-normal text-sm bg-[#F9FAFB]">
            <th className="px-4 py-6 text-left">First Name</th>
            <th className="px-4 py-6 text-left">Last Name</th>
            <th className="px-4 py-6 text-left">Age Range</th>
            <th className="px-4 py-6 text-left">Country</th>
            <th className="px-4 py-6 text-left">Course of Interest</th>
            <th className="px-4 py-6 text-left">How did you hear?</th>
            <th className="px-4 py-6 text-right">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, index) => (
            <tr
              key={index}
              // className={`text-sm ${index % 2 === 0 ? "bg-gray-100" : ""}`}
              className="text-sm"
            >
              <td className="px-4 py-6 text-left border-b">{row.firstName}</td>
              <td className="px-4 py-6 text-left border-b">{row.lastName}</td>
              <td className="px-4 py-6 text-left border-b">{row.ageRange}</td>
              <td className="px-4 py-6 text-left border-b">{row.country}</td>
              <td className="px-4 py-6 text-left border-b">{row.course}</td>
              <td className="px-4 py-6 text-left border-b">
                {row.referralSource}
              </td>
              <td className="px-4 py-6 text-right border-b">
                {row.phoneNumber}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
