import React, { useContext, useState } from "react";
import { Product } from "../../types/typeProduct";
import AppContext from "../../contexts/AppContext";

const Main = ({
  id,
  sku,
  title,
  salePrice,
  description,
  images,
  normalPrice,
  rating,
  sizes,
  tags,
  category,
  colors,
}: Product) => {

    const [selectedImage, setSelectedImage ] = useState(images.mainImage);
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const context = useContext(AppContext);
  
    if (!context) {
      throw new Error("AppContext must be used within a Provider");
    }
  
    const { cartItems, setCartItems } = context;

    const handleImageClick = (image: string) => {
      setSelectedImage(image);
    };

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
      };

    const handleColorClick = (color: string) => {
        setSelectedColor(color);
      };

      const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        setCartItems([...cartItems, { id, title, salePrice, images }]);
      };

  return (
    <div className="flex gap-20 px-24 py-11 text-justify">
      <div className="flex flex-col gap-8">
        <img
          className="w-20 h-20 object-cover"
          src={images.mainImage}
          alt="Imagem1"
          onClick = {() => handleImageClick(images.mainImage)}
        />
        {images.gallery.map((image, index) => (
          <img
            key={index}
            className="w-20 h-20 object-cover cursor-pointer"
            src={image}
            alt={`Imagem ${index + 2}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
      <img
        className="w-[460px] h-[500px] object-cover"
        src={selectedImage}
        alt="ImagemPrincipal"
      />
      <div className="flex flex-col gap-4 w-96">
        <h1 className="text-4xl">{title}</h1>
        <div className="flex gap-6 items-center">
          <h4 className="text-#9F9F9F font-medium text-2xl">Rp. {salePrice}</h4>
          <h4 className="line-through font-medium text-base">
            Rp. {normalPrice}
          </h4>
        </div>
        <p>{rating} Rating</p>
        <p className="w-96 text-sm text-#9F9F9F">{description.short}</p>
        <h6>Size</h6>
        <div className="flex gap-4">
          {sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => handleSizeClick(size)}
              className={`px-3 py-2 rounded-md flex items-center justify-center 
                ${selectedSize === size ? 'bg-#B88E2F text-white' : 'bg-#FAF3EA text-black'}`}
            >
              {size}
            </button>
          ))}
        </div>
        <h6 className="text-#9F9F9F">Color</h6>
        <div className="flex gap-4">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => handleColorClick(color.hex)}
              className={`w-8 h-8 rounded-full border-2
                ${selectedColor === color.hex ? 'border-black' : 'border-transparent opacity-70'}
              `}
              style={{ backgroundColor: color.hex }}
              aria-label={`Color ${color.name}`}
            >
            </button>
          ))}
        </div>
        <div className="flex gap-4 mb-6">
          <select
            className="border border-#9F9F9F rounded-lg px-4 py-4"
            name=""
            id=""
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button onClick={handleAddToCart} className="border border-black px-12 py-4 rounded-2xl">Add to cart</button>
        </div>
        <hr />
        <div className="text-#9F9F9F flex flex-col gap-3 mt-6">
          <h6>
            SKU <span className="ml-[62px] mr-2">:</span> {sku}
          </h6>
          <h6>
            Category<span className="ml-5 mr-2">:</span> {category}
          </h6>
          <h6>
            Tags<span className="ml-14 mr-2">:</span> {tags + `,`}
          </h6>
          <h6>
            Share<span className="ml-12 mr-2">:</span>Fcaebook
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Main;
