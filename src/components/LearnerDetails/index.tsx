"use client";
import { useState } from "react";
import Table from "./Table";
import {
  useGetApplicationsQuery,
  useGetAllApplicationsQuery,
} from "@/redux/features/applicationApi";
import Pagination from "../pagination";

export default function LearnerDetails() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const { data, isLoading, isError } = useGetApplicationsQuery({
    page: currentPage,
    limit: itemsPerPage,
  });

  const { data: allData } = useGetAllApplicationsQuery();

  console.log(allData);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Handle items per page change
  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  };

  const downloadCSV = () => {
    // Checks if data exists
    if (!allData || !allData.data || allData.data.length === 0) {
      return;
    }

    const applications = allData.data;

    // Define CSV headers based on your table structure
    const headers = [
      "id",
      "firstName",
      "lastName",
      "email",
      "ageRange",
      "country",
      "course",
      "referralSource",
      "phoneNumber",
      "discordUserName",
      "paymentStatus",
      "paymentType",
      "paymentMethod",
      "paidOn",
    ] as const;

    let csvContent = headers.join(",") + "\n";

    // Add data rows
    applications.forEach((application) => {
      const row = headers.map((header) => {
        // Get the value and handle potential undefined values
        const value =
          application[header] !== undefined ? application[header] : "";

        // Handle values that contain commas by wrapping in quotes
        const formattedValue =
          typeof value === "string" && value.includes(",")
            ? `"${value}"`
            : value;

        return formattedValue;
      });

      csvContent += row.join(",") + "\n";
    });

    // Create a Blob with the CSV content
    const blob = new Blob([csvContent], { type: "text/csv;cgarset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Create download link and trgger click
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "applications.csv");
    link.style.display = "hidden";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: Unable to fetch referral stats.</p>;

  return (
    <div className="mt-10">
      <div className="flex justify-between text-[#101828] text-lg font-medium">
        <h4>Learner details</h4>

        <button className="underline" onClick={downloadCSV}>
          Download CSV
        </button>
      </div>

      <div>
        <div className="flex items-center space-x-2 mt-4">
          <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
            Items per page:
          </label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border p-2 rounded text-sm"
          >
            <option value={10}>10</option>
            <option value={15}>15</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </div>

        <Table
          data={data?.data}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
        />

        {data && (
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(data?.meta?.totalItems / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        )}

        <div className="mt-4 text-sm text-gray-500">
          Showing {data?.data?.length} of {data?.meta?.totalItems} applications
        </div>
      </div>
    </div>
  );
}
