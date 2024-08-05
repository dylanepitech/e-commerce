interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePreviousClick = () => {
    if (currentPage === 1) {
      onPageChange(totalPages);
    } else {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage === totalPages) {
      onPageChange(1);
    } else {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center space-x-4 mt-4 items-center">
      <button
        onClick={handlePreviousClick}
        className="px-4 py-2 rounded flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        <svg
          className="w-4 h-4 inline-block mr-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
        </svg>
        Précédente
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded ${page === currentPage ? 'bg-green-light text-white font-bold' : 'text-gray-700 hover:text-gray-900 focus:outline-none'}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={handleNextClick}
        className="px-4 py-2 rounded flex items-center text-gray-700 hover:text-gray-900 focus:outline-none"
      >
        Suivante
        <svg
          className="w-4 h-4 inline-block ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
