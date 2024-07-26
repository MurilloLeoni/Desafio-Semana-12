import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../../utils/fetchedProducts';
import { Product } from '../../types/typeProduct';

const Main = ({
    sku = 'SKU',
    title = 'Nome do produto',
    category = 'Categória',
    tags = ['tag1', 'tag2', 'tag3'],
    normalPrice = 'Rp 2500,00',
    salePrice = 'Rp 2000,00',
    description = { short: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique voluptas commodi architecto in delectus consectetur est rem eveniet. Ut possimus dolorem quidem tempora accusamus doloribus sint sequi quae nulla sit!', long: 'Long descricão do produto' },
    colors = [
        { name: 'Azul', hex: '#0000FF' },
        { name: 'Vermelho', hex: '#FF0000' },
        { name: 'Verde', hex: '#00FF00' }
    ],
    sizes = ['P', 'M', 'G'],
    rating = 4.9,
    images,
}: Product) => {
  return (
    <div className='flex gap-20 px-24 py-11 font-poppins'>
        <div className='flex flex-col gap-8'>
            <img className="w-20 h-20 object-cover" src='/src/assets/imgs/Bedroom-home.png' alt="Imagem1" />
            <img className="w-20 h-20 object-cover" src='/src/assets/imgs/Bedroom-home.png' alt="Imagem1" />
            <img className="w-20 h-20 object-cover" src='/src/assets/imgs/Bedroom-home.png' alt="Imagem1" />
            <img className="w-20 h-20 object-cover" src='/src/assets/imgs/Bedroom-home.png' alt="Imagem1" />
        </div>
        <img className="w-[460px] h-[500px] object-cover" src='/src/assets/imgs/Bedroom-home.png' alt="Imagem1" />
        <div className='flex flex-col gap-8 border border-black'>
            <h1 className='text-[42px]'>{title}</h1>
            <div className='flex gap-6 items-center'>
                <h4 className='text-#9F9F9F font-medium text-2xl'>{salePrice}</h4>
                <h4 className='line-through font-medium text-base'>{normalPrice}</h4>
            </div>
            <p>{rating}</p>
            <p className='w-96 text-sm'>{description.short}</p>
            <h6>Size</h6>
            <div className='flex gap-4 bg-#B88E2F w-5 h-5'>
                <button>{sizes[0]}</button>
                <button>{sizes[1]}</button>
                <button>{sizes[2]}</button>
            </div>
            <h6>Color</h6>
            <div className='flex gap-4'>
                <button>{colors[0].hex}</button>
                <button>{colors[1].hex}</button>
                <button>{colors[2].hex}</button>
            </div>
            <div className='flex gap-4'>
            <select className='border border-black rounded px-4 py-4' name="" id="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button className='border border-black'>Add to cart</button>
            </div>
            <hr />
            <div className='text-#9F9F9F flex flex-col gap-3'>
            <h6>SKU <span className='ml-[62px] mr-2'>:</span> {sku}</h6>
            <h6>Category<span className='ml-5 mr-2'>:</span> {category}</h6>
            <h6>Tags<span className='ml-14 mr-2'>:</span> {tags+`,`}</h6>
            <h6>Share<span className='ml-12 mr-2'>:</span>Fcaebook</h6>
            </div>
        </div>
    </div>
  )
}

export default Main