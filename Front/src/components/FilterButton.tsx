interface FilterButtonProps {
  label: string;
}

const FilterButton = ({ label }: FilterButtonProps) => {
  return (
    <div className="relative inline-block w-full">
      <select
        key={label}
        className="appearance-none flex justify-center outline-none items-center bg-green-light text-white font-semibold h-[40px] w-[150px] rounded px-4 cursor-pointer"
      >
        <option value={label}>{label}</option>
        <option value="option1">{label} Option 1</option>
        <option value="option2">{label} Option 2</option>
        <option value="option3">{label} Option 3</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
        {label === 'Plus de filtres' ? (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        ) : (
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default FilterButton;
