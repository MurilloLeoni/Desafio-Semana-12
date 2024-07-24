type CardProps = {
    category: string
    title: string
    salePrice: string
    normalPrice: string
    discountPercentage: string
    img?: string
}

const Card = ({ category='category', title='title', salePrice='Rp 2.500.000', normalPrice='Rp 3.500.000', discountPercentage='30%', img }: CardProps) => {
  return (
    <div className="relative w-72 h-[450px] group">
      <img className="w-full h-[300px] object-cover" src={img || "/src/assets/imgs/Logo-Furniro.png"} alt="" />
      <div className="absolute top-2 right-2 bg-red-400 text-white rounded-full w-8 h-8 flex items-center justify-center">
        <p className="text-xs font-semibold">{discountPercentage}</p>
      </div>
      <div className="font-poppins ml-3 mt-3 flex flex-col gap-3">
        <p className="text-2xl font-semibold">{category}</p>
        <p className="text-[#9F9F9F] font-medium">{title}</p>
        <div className="flex items-center">
          <p className="text-xl font-semibold">{salePrice}</p>
          <p className="text-[#B0B0B0] text-base font-normal line-through ml-6">{normalPrice}</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-poppins font-semibold text-base">
        <button className="bg-white text-#B88E2F px-14 py-3 mb-4 ">Add to Cart</button>
        <div className="flex gap-4 text-white">
            <div className="flex items-center cursor-pointer">
                <img src="/src/assets/icons/Icon-share.png" alt="Share" />
                <p className="ml-1">Share</p>
            </div>
            <div className="flex items-center cursor-pointer">
                <img src="/src/assets/icons/Icon-compare.png" alt="Compare" />
                <p className="ml-1">Compare</p>
            </div>
            <div className="flex items-center cursor-pointer">
                <img src="/src/assets/icons/Icon-like.png" alt="Like" />
                <p className="ml-1">Like</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
