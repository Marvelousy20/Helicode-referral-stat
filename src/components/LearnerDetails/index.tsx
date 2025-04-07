"use client";
import { useState } from "react";
import Table from "./Table";
import { useGetApplicationsQuery } from "@/redux/features/applicationApi";
import Pagination from "../pagination";

export default function LearnerDetails() {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);
  const { data, isLoading, isError } = useGetApplicationsQuery({
    page: currentPage,
    limit: itemsPerPage,
  });

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

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: Unable to fetch referral stats.</p>;

  return (
    <div className="mt-10">
      <div className="flex justify-between text-[#101828] text-lg font-medium">
        <h4>Learner details</h4>

        <button className="underline">Download CSV</button>
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
            totalPages={data?.meta?.totalPages}
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
