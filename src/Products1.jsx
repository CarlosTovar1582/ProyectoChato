/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


import  DetailsProducts  from './DetailsProducts'
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition, RadioGroup,Disclosure } from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, UserIcon, XMarkIcon,PlusIcon,MinusIcon } from '@heroicons/react/24/outline'



import { StarIcon } from '@heroicons/react/20/solid'


const product = {
  name: 'Producto 1',
  price: '',
  rating: 4,
  images: [
    {
      id: 1,
      name: 'Angled view',
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
        id: 2,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
        id: 3,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
        id: 4,
        name: 'Angled view',
        src: 'https://tailwindui.com/img/ecommerce-images/product-page-03-product-01.jpg',
        alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
    <p>The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.</p>
  `,
  details: [
    {
      name: 'Features',
      items: [
        'Multiple strap configurations',
        'Spacious interior with top zip',
        'Leather handle and tabs',
        'Interior dividers',
        'Stainless strap loops',
        'Double stitched construction',
        'Water-resistant',
      ], 
   
    
    },
    {
        name: 'Care',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ], 
     
      
      },
      {
        name: 'Shiping',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ], 
     
      
      },
      {
        name: 'Returns',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ], 
     
      
      },
    // More sections...
  ],
}

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Flats', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Heels', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
              { name: 'Accessories', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Tops', href: '#' },
              { name: 'Bottoms', href: '#' },
              { name: 'Swimwear', href: '#' },
              { name: 'Underwear', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Significant Other', href: '#' },
            ],
          },
        ],
      ],
    },
    {
      id: 'men',
      name: 'Men',
      featured: [
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg',
          imageAlt:
            'Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters.',
        },
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        [
          {
            id: 'shoes',
            name: 'Shoes & Accessories',
            items: [
              { name: 'Sneakers', href: '#' },
              { name: 'Boots', href: '#' },
              { name: 'Sandals', href: '#' },
              { name: 'Socks', href: '#' },
            ],
          },
          {
            id: 'collection',
            name: 'Shop Collection',
            items: [
              { name: 'Everything', href: '#' },
              { name: 'Core', href: '#' },
              { name: 'New Arrivals', href: '#' },
              { name: 'Sale', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'clothing',
            name: 'All Clothing',
            items: [
              { name: 'Basic Tees', href: '#' },
              { name: 'Artwork Tees', href: '#' },
              { name: 'Pants', href: '#' },
              { name: 'Hoodies', href: '#' },
              { name: 'Swimsuits', href: '#' },
            ],
          },
          {
            id: 'accessories',
            name: 'All Accessories',
            items: [
              { name: 'Watches', href: '#' },
              { name: 'Wallets', href: '#' },
              { name: 'Bags', href: '#' },
              { name: 'Sunglasses', href: '#' },
              { name: 'Hats', href: '#' },
              { name: 'Belts', href: '#' },
            ],
          },
        ],
        [
          {
            id: 'brands',
            name: 'Brands',
            items: [
              { name: 'Re-Arranged', href: '#' },
              { name: 'Counterfeit', href: '#' },
              { name: 'Full Nelson', href: '#' },
              { name: 'My Way', href: '#' },
            ],
          },
        ],
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
}
const ordersA = [
  {
    id: 1,
    date: 'July 12, 2021',
    datetime: '2021-07-12',
    status: 'delivery',
    productName: 'Producto 1',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-01.jpg',
    imageAlt: 'Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers.',
  },
  {
    id: 2,
    date: 'June 21, 2021',
    datetime: '2021-06-21',
    status: 'delivery',
    productName: 'Producto 2',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-02.jpg',
    imageAlt: 'Light grey canvas backpack with black handle, zipper, and edge details.',
  },
  {
    id: 3,
    date: 'June 6, 2021',
    datetime: '2021-06-06',
    status: 'delivery',
    productName: 'Producto 3',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-03.jpg',
    imageAlt: 'Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap.',
  },
  {
    id: 4,
    date: 'May 24, 2021',
    datetime: '2021-05-24',
    status: 'delivery',
    productName: 'Producto 4',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-04.jpg',
    imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',
  },
  {
    id: 5,
    date: 'May 24, 2021',
    datetime: '2021-05-24',
    status: 'delivery',
    productName: 'Producto 5',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-04.jpg',
    imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',
  },
  {
    id: 6,
    date: 'May 24, 2021',
    datetime: '2021-05-24',
    status: 'delivery',
    productName: 'Producto 6',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-04.jpg',
    imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',
  },
  {
    id: 7,
    date: 'May 24, 2021',
    datetime: '2021-05-24',
    status: 'delivery',
    productName: 'Producto 7',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-04.jpg',
    imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',
  },
  {
    id: 8,
    date: 'May 24, 2021',
    datetime: '2021-05-24',
    status: 'delivery',
    productName: 'Producto 8',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/order-history-page-05-product-04.jpg',
    imageAlt: 'White canvas tote bag with black drawstring liner and white handle.',
  },
  // More orders...
]
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
}


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Products() {
  const [open, setOpen] = useState(false)
  let [isOpen, setIsOpen] = useState(false)
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (

    <div className="bg-white py-8 font-mono text-xl">
      
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4">
                      {navigation.categories.map((category) => (
                        <Tab
                          key={category.name}
                          className={({ selected }) =>
                            classNames(
                              selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                              'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium'
                            )
                          }
                        >
                          {category.name}
                        </Tab>
                      ))}
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    {navigation.categories.map((category) => (
                      <Tab.Panel key={category.name} className="space-y-10 px-4 pb-8 pt-10">
                        <div className="space-y-4">
                          {category.featured.map((item, itemIdx) => (
                            <div
                              key={itemIdx}
                              className="group aspect-h-1 aspect-w-1 relative overflow-hidden rounded-md bg-gray-100"
                            >
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className="object-cover object-center group-hover:opacity-75"
                              />
                              
                              <div className="flex flex-col justify-end">
                                <div className="bg-white bg-opacity-60 p-4 text-base sm:text-sm">
                                  <a href={item.href} className="font-medium text-gray-900">
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    {item.name}
                                  </a>
                                  <p aria-hidden="true" className="mt-0.5 text-gray-700 sm:mt-1">
                                    Shop now
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        {category.sections.map((column, columnIdx) => (
                          <div key={columnIdx} className="space-y-10">
                            {column.map((section) => (
                              <div key={section.name}>
                                <p
                                  id={`${category.id}-${section.id}-heading-mobile`}
                                  className="font-medium text-gray-900"
                                >
                                  {section.name}
                                </p>
                                <ul
                                  role="list"
                                  aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                                  className="mt-6 flex flex-col space-y-6"
                                >
                                  {section.items.map((item) => (
                                    <li key={item.name} className="flow-root">
                                      <a href={item.href} className="-m-2 block p-2 text-gray-500">
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <a href={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                        {page.name}
                      </a>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="https://tailwindui.com/img/flags/flag-canada.svg"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <main
        className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8 border-2 border-slate-800 rounded-3xl"
        aria-labelledby="order-history-heading  " 
      >        
        <div className="max-w-xl">
       
          <h1 id="order-history-heading" className="text-3xl font-bold tracking-tight text-gray-900">
            Productos segun su CAtegoria
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Se muestran todos los productos relacionados a su categoria.
          </p>         
        </div>

          <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10 border-2 border-cyan-500" onClose={closeModal}>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black/25" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-7xl transform overflow-hidden border-slate-900 rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="bg-white">
                      <div className="mx-auto max-w-6xl   sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 border-2  rounded-3xl ">
                        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                          {/* Image gallery */}
                              <Tab.Group as="div" className="flex flex-col-reverse">
                                {/* Image selector */}
                                <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                                  <Tab.List className="grid grid-cols-4 gap-6">
                                    {product.images.map((image) => (
                                      <Tab
                                        key={image.id}
                                        className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                                      >
                                        {({ selected }) => (
                                          <>
                                            <span className="sr-only">{image.name}</span>
                                            <span className="absolute inset-0 overflow-hidden rounded-md">
                                              <img src={image.src} alt="" className="h-full w-full object-cover object-center" />
                                            </span>
                                            <span
                                              className={classNames(
                                                selected ? 'ring-indigo-500' : 'ring-transparent',
                                                'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2'
                                              )}
                                              aria-hidden="true"
                                            />
                                          </>
                                        )}
                                      </Tab>
                                    ))}
                                  </Tab.List>
                                </div>

                                <Tab.Panels className="aspect-h-1 aspect-w-1 w-full">
                                  {product.images.map((image) => (
                                    <Tab.Panel key={image.id}>
                                      <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="h-full w-full object-cover object-center sm:rounded-lg"
                                      />
                                    </Tab.Panel>
                                  ))}
                                </Tab.Panels>
                              </Tab.Group>
                              {/* Product info */}
                              <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">                          
                                <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
                                <div className="mt-3">
                                  <h2 className="sr-only">Product information</h2>
                                  <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
                                </div>
                                  {/* Reviews */}
                                <div className="mt-3">
                                  <h3 className="sr-only">Reviews</h3>
                                  <div className="flex items-center"> 
                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                  </div>
                                </div>
                                <div className="mt-6">
                                <h3 className="sr-only">Description</h3>

                                <div
                                  className="space-y-6 text-base text-gray-700"
                                  dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                              </div>
                              <form className="mt-6">
                                {/* Colors */}
                                <div>
                                  <h3 className="text-sm text-gray-600"></h3>

                                  <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-2">
                                    <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                                    <span className="flex items-center space-x-3">
                                    
                                                    
                                    </span>
                                  </RadioGroup>
                                </div>
                                <div className="mt-10 flex">
                                  <button
                                    type="submit"
                                    className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
                                  >
                                    Cotizar
                                  </button>

                                  <button
                                    type="button"
                                    className="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
                                  >
                                    
                                    <span className="sr-only">Add to favorites</span>
                                  </button>
                                </div>

                              </form>
                              <section aria-labelledby="details-heading" className="mt-12">
                                <h2 id="details-heading" className="sr-only">
                                  Additional details
                                </h2>

                                <div className="divide-y divide-gray-200 border-t">
                                  {product.details.map((detail) => (
                                    <Disclosure as="div" key={detail.name}>
                                      {({ open }) => (
                                        <>
                                          <h3>
                                            <Disclosure.Button className="group relative flex w-full items-center justify-between py-6 text-left">
                                              <span 
                                                className={classNames(open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium')}
                                              >
                                                {detail.name}
                                              </span>
                                              <span className="ml-6 flex items-center">
                                                {open ? (
                                                  <MinusIcon
                                                    className="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                                    aria-hidden="true"
                                                  />
                                                ) : (
                                                  <PlusIcon
                                                    className="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                                    aria-hidden="true"
                                                  />
                                                )}
                                              </span>
                                            </Disclosure.Button>
                                          </h3>
                                          <Disclosure.Panel as="div" className="prose prose-sm pb-6">
                                            <ul role="list">
                                              {detail.items.map((item) => (
                                                <li key={item}>{item}</li>
                                              ))}
                                            </ul>
                                          </Disclosure.Panel>
                                        </>
                                      )}
                                    </Disclosure>
                                  ))}
                                </div>
                              </section>



                              </div>
                        </div>
                      </div>
                    </div>                    
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>


        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
          {ordersA.map((order) => (
            <div key={order.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-3xl bg-gray-200 group-hover:opacity-75 ">
                <button
                        type="button"
                        onClick={openModal}
                        className="rounded-md bg-black/20 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                      >
                  <img src={order.imageSrc} alt={order.imageAlt} className="object-cover object-center" /> 
                </button>              
              </div>
              
              <h3 className="mt-4 text-sm text-gray-500">
                <a href={order.href}>
                  <span className="absolute " />
                  {order.productName}
                </a> 
              </h3>
              <p className="mt-1 text-lg font-medium">
                {order.status === 'delivery' ? (
                  <span className="text-gray-900">
                    Delivered on <time dateTime={order.datetime}>{order.date}</time>
                  </span>
                ) : order.status === 'delivery' ? (
                  <span className="text-indigo-600">Out for delivery</span>
                ) : order.status === 'delivery' ? (
                  <span className="text-gray-500">Cancelled</span>
                ) : null}
              </p>
            </div>
          ))}

          
        </div>
        
      </main>
    

    </div>
  )
}
