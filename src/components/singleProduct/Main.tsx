import React, { useContext, useEffect, useState } from "react";
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
  discountPercentage,
  new: isNew,
  slug,
}: Product) => {
  const [selectedImage, setSelectedImage] = useState(images.mainImage);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const context = useContext(AppContext);

  if (!context) {
    throw new Error("AppContext must be used within a Provider");
  }

  const { cartItems, setCartItems, updateQuantity, setSelectedProduct } =
    context;

  const item = cartItems.find((item) => item.id === id);
  const currentQuantity = item ? item.quantity : quantity;

  useEffect(() => {
    setQuantity(currentQuantity);
  }, [currentQuantity, id]);

  useEffect(() => {
    setQuantity(1);
    setSelectedImage(images.mainImage);
  }, [id, images.mainImage]);

  useEffect(() => {
    setSelectedProduct({
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
      discountPercentage,
      new: isNew,
      slug,
    });
  }, [
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
    discountPercentage,
    isNew,
    slug,
    setSelectedProduct,
  ]);

  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(quantity + change, 1);
    setQuantity(newQuantity);
    updateQuantity(id, newQuantity);
  };

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
    if (item) {
      updateQuantity(id, quantity);
    } else {
      setCartItems([...cartItems, { id, title, salePrice, images, quantity }]);
    }
  };

  return (
    <div className="flex gap-20 px-24 py-11 text-justify">
      <div className="flex flex-col gap-8">
        <img
          className="w-20 h-20 object-cover"
          src={images.mainImage}
          alt="Imagem1"
          onClick={() => handleImageClick(images.mainImage)}
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
        <h1 className="text-4xl text-left">{title}</h1>
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
                ${
                  selectedSize === size
                    ? "bg-#B88E2F text-white"
                    : "bg-#FAF3EA text-black"
                }`}
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
                ${
                  selectedColor === color.hex
                    ? "border-black"
                    : "border-transparent opacity-70"
                }
              `}
              style={{ backgroundColor: color.hex }}
              aria-label={`Color ${color.name}`}
            ></button>
          ))}
        </div>
        <div className="flex gap-4 mb-6">
          <div className="flex border border-#9F9F9F rounded-lg px-3 py-4 gap-7">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <p>{quantity}</p>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <button
            onClick={handleAddToCart}
            className="border border-black px-12 py-4 rounded-2xl"
          >
            Add to cart
          </button>
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
            Tags<span className="ml-14 mr-2">:</span> {tags.join(", ")}
          </h6>
          <div className="flex flex-row items-center">
            <h6>
              Share<span className="ml-12 mr-3">:</span>
              </h6>
              <div className="flex gap-6">
                <a href="https://www.facebook.com" target="_blank">
                <img
                  className="w-6 h-6"
                  src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-facebook2.png"
                  alt="Facebook"
                />
                </a>
                <a href=" https://www.linkedin.com" target="_blank">
                <img
                  className="w-6 h-6"
                  src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-linkedin2.png"
                  alt="Linkedin"
                />
                </a>
                <a href="https://twitter.com" target="_blank">
                <img
                  className="w-7 h-7"
                  src="https://murilloleoni-desafio3.s3.us-east-2.amazonaws.com/assets/icons/Icon-twitter2.png"
                  alt="Twitter"
                />
                </a>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
