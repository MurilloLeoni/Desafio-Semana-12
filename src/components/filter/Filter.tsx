type FilterProps = {
  totalProducts: number;
  currentDisplay: number;
  setCurrentDisplay: React.Dispatch<React.SetStateAction<number>>;
  start: number;
  end: number;
  setSortOrder: (order: string) => void;
  setFilterRating: (rating: number | null) => void;
  setFilterPrice: (price: number | null) => void;
};

const Filter = ({
  totalProducts,
  currentDisplay,
  setCurrentDisplay,
  start,
  end,
  setSortOrder,
}: FilterProps) => {
  return (
    <div className="bg-#FFF3E3 w-screen px-24 py-9 flex justify-between font-normal -mt-2">
      <div className="flex items-center justify-between w-[420px]">
        <div className="flex">
          <img
            className="w-6 h-6 mr-2"
            src="/src/assets/icons/Icon-filter.png"
            alt="Filter"
          />
          <p className="text-xl">Filter</p>
        </div>
        <img
          className="w-6 h-6"
          src="/src/assets/icons/Icon-grid.png"
          alt="Grid"
        />
        <img
          className="w-6 h-6"
          src="/src/assets/icons/Icon-list.png"
          alt="List"
        />
        <img className="" src="/src/assets/icons/Line.png" alt="|" />
        <p className="text-base">
          Showing {start}-{end} of {totalProducts + 1} results
        </p>
      </div>
      <div className="flex text-xl">
        <div className="flex items-center">
          <p>Show</p>
          <select
            className="w-14 h-14 ml-4 mr-6 text-center"
            value={currentDisplay}
            onChange={(e) => setCurrentDisplay(Number(e.target.value))}
          >
            <option value={16}>16</option>
            <option value={32}>32</option>
            <option value={48}>48</option>
            <option value={60}>60</option>
          </select>
        </div>
        <div className="flex items-center">
          <p>Sort by</p>
          <select
            className="ml-4 w-48 h-14 text-center"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="default">Default</option>
            <option value="alfabetico">Alphabetical</option>
            <option value="rating">Rating</option>
            <option value="preco">Price</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
