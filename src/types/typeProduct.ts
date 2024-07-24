export type Product = {
    id: number;
    sku: string;
    title: string;
    category: string;
    tags: string[];
    normalPrice: string;
    salePrice: string;
    discountPercentage: number;
    new: boolean;
    description: {
        short: string;
        long: string;
    };
    colors: { name: string; hex: string }[];
    sizes: string[];
    rating: number;
    images: {
        mainImage: string;
        gallery: string[];
    };
};