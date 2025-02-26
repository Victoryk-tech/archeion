import { Pagination } from "flowbite-react";
import { useState } from "react";

function Component() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => setCurrentPage(page);

  return (
    <div className="w-full flex items-center justify-center mt-4">
      <div
        className="overflow-x-auto max-w-full flex justify-center w-full"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="flex justify-center space-x-2">
          <Pagination
            currentPage={currentPage}
            totalPages={100}
            onPageChange={onPageChange}
            showIcons
            className="sm:text-sm md:text-base"
          />
        </div>
      </div>
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Component;
