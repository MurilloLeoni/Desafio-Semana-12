type FilterProps = {
  totalProducts: number;
  currentDisplay: number;
  setCurrentDisplay: React.Dispatch<React.SetStateAction<number>>;
  start: number;
  end: number;
  setSortOrder: (order: string) => void;
  setFilterCategory: (category: string) => void;
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
  setFilterCategory,
}: FilterProps) => {
  return (
    <div className="bg-#FFF3E3 w-screen px-4 md:px-24 py-6 md:py-9 flex flex-col md:flex-row justify-between font-normal -mt-2">
      <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-[420px] mb-4 md:mb-0">
        <div className="flex items-center mb-2 md:mb-0">
          <img
            className="w-6 h-6 mr-2"
            src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-filter.png"
            alt="Filter"
          />
          <p className="text-lg md:text-xl">Filter</p>
        </div>
        <div className="flex md:items-center space-x-2 md:space-x-4">
          <img
            className="w-6 h-6"
            src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-grid.png"
            alt="Grid"
          />
          <img
            className="w-6 h-6"
            src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-list.png"
            alt="List"
          />
          <img
            className="hidden md:block"
            src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Line.png"
            alt="|"
          />
          <p className="text-sm md:text-base">
            Showing {start}-{end} of {totalProducts} results
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row text-sm md:text-xl">
        <div className="flex items-center mb-2 md:mb-0">
          <p>Show</p>
          <select
            className="w-24 md:w-14 h-10 md:h-14 ml-4 mr-6 text-center"
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
            className="ml-4 w-full md:w-48 h-10 md:h-14 text-center"
            onChange={(e) => {
              const value = e.target.value;
              if (value.startsWith("categoria_")) {
                setFilterCategory(value.replace("categoria_", ""));
              } else {
                setSortOrder(value);
              }
            }}
          >
            <option value="default">Default</option>
            <option value="alfabetico_asc">Alphabetical (A-Z)</option>
            <option value="alfabetico_desc">Alphabetical (Z-A)</option>
            <option value="rating_asc">Rating (Low to High)</option>
            <option value="rating_desc">Rating (High to Low)</option>
            <option value="preco_asc">Price (Low to High)</option>
            <option value="preco_desc">Price (High to Low)</option>
            <option value="categoria_Sofás">Sofás</option>
            <option value="categoria_Escrivaninhas">Escrivaninhas</option>
            <option value="categoria_Cadeiras">Cadeiras</option>
            <option value="categoria_Mesas">Mesas</option>
            <option value="categoria_Armarios">Armários</option>
            <option value="categoria_Racks">Racks</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
