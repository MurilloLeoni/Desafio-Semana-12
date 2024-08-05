import { Product } from "../types/typeProduct";


const mockProduct: Product = {
  id: 1,
  sku: "12345",
  title: "Sample Product",
  category: "Furniture",
  tags: ["new", "sale"],
  normalPrice: "$200",
  salePrice: 150,
  discountPercentage: 25,
  new: true,
  slug: "sample-product",
  description: {
    short: "Short description of the sample product.",
    long: "Long description of the sample product, including detailed information and features."
  },
  colors: [
    { name: "Red", hex: "#FF0000" },
    { name: "Blue", hex: "#0000FF" }
  ],
  sizes: ["Small", "Medium", "Large"],
  rating: 4.5,
  images: {
    mainImage: "https://example.com/main-image.jpg",
    gallery: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ]
  }
};

export default mockProduct;