
import React from 'react'


//import DropdownItem from "../components/Dropdown/DropdownItem"
//import { CSSTransition } from "react-transition-group"
//import "./Dropdown/DropdownMenu.css"

import { FaWhatsapp } from "react-icons/fa";
import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'

const products = [
{
  name: "Conmutadores",
  grupo:1,
  submenu: [{
              items: "Interruptor de Limite Vertical en miniatura TZ-8",
            },
            {
              items: "Interruptor de límite sellado",             
            },
            {
              items: "Interruptor de límite pequeño",
            },
            {
              items: "Interruptor de límite sellado de aluminio de alta resistencia",
            },
            {
              items: "Interruptor de límite de servicio pesado",
            },
            {
              items: "Interruptor de límite sellado de aleacion",
            },
            {
              items: "Interruptor de límite a prueba de agua",
            },
          ],
  href: '#'          
},
{
  name: "Variadores",
  grupo:2,
  submenu: [{
              items: "Interruptor de límite de seguridad",
            },
            {
              items: "Interruptor de límite de reinicio Manual",             
            },
            {
              items: "Interruptor de límite de puerta de seguridad",
            },
           ],
  href: '#'          
},
{
  name: "Interruptores",
  grupo:3,
  submenu: [{
              items: "Microinterruptor básico",
            },
            {
              items: "Microinterruptor de uso general TM-1",             
            },
            {
              items: "Microinterruptor Compacto Precableado",
            },
            {
              items: "Microinterruptor de Limite Horizontal",
            },
           ],
  href: '#'          
},
{
  name: "Sensores",
  grupo:4,
  submenu:  ""             ,
  href: '#'          
},
{
  name: "Conectores",
  grupo:5,
  submenu:  ""             ,
  href: '#'          
},
{
  name: "Pulsadores",
  grupo:6,
  submenu:  ""             ,
  href: '#'          
},
{
  name: "Selectores",
  grupo:7,
  submenu:  ""             ,
  href: '#'          
},
{
  name: "Sirenas",
  grupo:8,
  submenu:  ""             ,
  href: '#'          
},
{
  name: "Tableros",
  grupo:9,
  submenu:  ""             ,
  href: '#'          
},
{
  name: "Fuente de Alimentacion",
  grupo:10,
  submenu:  ""             ,
  href: '#'          
},
{
  name: "Temporizador",
  grupo:11,
  submenu:  ""             ,
  href: '#'          
},
{
  name: "Switch",
  grupo:12,
  submenu:  ""             ,
  href: '#'          
},
{
  name: "PLC",
  grupo:13,
  submenu:  ""             ,
  href: '#'          
},
{
  name: "Accesorios",
  grupo:14,
  submenu:  ""             ,
  href: '#'          
},

];


{/*  const products = [
  { name: 'Limite de Cambio',href: '#'},
  { name: 'Interruptor de Limite de Seguridad', href: '#'},
  { name: 'Micro Interruptor',  href: '#'},
  { name: 'Interruptor de Boton de Encendido', href: '#'},
  { name: 'Interruptor de Palanca',  href: '#'},
  { name: 'Interruptor de Pie',  href: '#' },
] */}


const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const productsLink = [
  {
    id: 1,
    name: 'Limite de Cambio',
    href: '#',
    price: '',
    description: '',
    imageSrc: 'https://i.postimg.cc/yxqTHk4C/Categoria-Limite-1.png',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
  {
    id: 2,
    name: 'Interruptor de Limite de Seguridad',
    href: '#',
    price: '',
    description: '',
    imageSrc: 'https://i.postimg.cc/R0kt3yPc/Categoria-Limite-Seguridad-2.png',
    imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
  },
  {
    id: 3,
    name: 'Micro Interruptor',
    href: '#',
    price: '',
    description: '',
    imageSrc: 'https://i.postimg.cc/wMf4d9VX/Categoria-Micro-Interruptor-3.png',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
  },
  {
    id: 4,
    name: 'Interruptor de Boton de Encendido',
    href: '#',
    price: '',
    description: '',
    imageSrc: 'https://i.postimg.cc/52xSbXy8/Categoria-Boton-Encendido-4.png',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
    id: 5,
    name: 'Interruptor de Palanca',
    href: '#',
    price: '',
    description: '',
    imageSrc: 'https://i.postimg.cc/t4jpTjG3/Categoria-Interruptor-Palanca-5.png',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
    {
    id: 6,
    name: 'Interruptor de Pie',
    href: '#',
    price: '',
    description: '',
    imageSrc: 'https://i.postimg.cc/C5gm8mhQ/Categoria-Interruptor-Pie-6.png',
    imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },   
  // More products...
]

export default function Header() {
 //const params =useParams()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [active, setActive] = useState("main")
  const [menuHeight, setMenuHeight] = useState(null)


  function calcHeight(el) {
    // el.offsetHeight is height in pixels of that component. we use this in dropdown menu style height to set height
    const height = el.offsetHeight;
    console.log(height);
    setMenuHeight(height);

    
  }

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-20xl items-center justify-between p-6 lg:px-8  dark:bg-slate-700" >
        <div className="flex lg:flex-1 .">  
            <Link to="/Carousel" className="font-semibold leading-6  text-gray-200 text-2xl">
              <img src="https://i.postimg.cc/NFTGvLyk/Logo.jpg" className="h-36 w-36 rounded-3xl" alt="Flowbite Logo" />          
            </Link>         
        </div>   
        <div className="flex lg:hidden">
          <div>
              <a href="https://api.whatsapp.com/send?phone=970531712" target='_blank' className="font-normal leading-6 text-gray-200  text-2xl hover:scale-110 hover:text-sky-500">
                <FaWhatsapp   className='Index: 2  position: relative right-0 .. h-14 w-14 text-slate-800 duration-300 cursor-pointer hover:scale-110 hover:text-blue-300 bg-green-600 rounded-full' />
              </a>
          </div>
          <div className='dark:bg-slate-700 text-slate-700'>01</div>         
          <div className='dark:bg-slate-700 text-slate-700'>02</div>
          <div>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(true)}
              >
              <span className="sr-only">Open main menu</span>
              
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        
        </div>
        
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link to="/Carousel" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
            Inicio
          </Link>
          <Link to="/About" className="font-bold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
            Nosotros
          </Link>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1  font-semibold leading-6 text-gray-200 text-2xl " >              
              <Link to="/CategoryProducts" className="font-bold font-mono text-2xl leading-6  text-gray-200  hover:scale-110 hover:text-sky-500">
                  Productos  
              </Link>                       
              <ChevronDownIcon className="h-6 w-6 text-gray-200 text-2xl font-semibold" aria-hidden="true" />                                                                 
            </Popover.Button> 
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-max max-w-3xl overflow-hidden 
              rounded-3xl bg-slate-900 opacity-90 ... shadow-lg ring-1">
                <div className="p-4">
                  

                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-full p-4  text-sm leading-6 hover:bg-slate-500 opacity-100"
                    >
                      <div className="flex-auto"> 
                      {//productsLink.map((pro) => (
                          <Link to={"/Products/" + item.grupo}  className="text-gray-200 text-sm font-normal  group-hover:text-slate-200 ">
                            {item.name}
                          </Link>
                      //))
                      }  
                       {/* aqui codigo transition   */}                                              
                      </div>
                    </div>
                  ))}
                  
                </div>               
              </Popover.Panel>
            </Transition>
          </Popover>          
          <Link to="/News" className="font-semibold leading-6  text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
            Proyectos
          </Link>
          <Link to="/SectionsContact" className="font-semibold leading-6 text-gray-200 font-mono text-2xl hover:scale-110 hover:text-sky-500">
            Contactos
          </Link>
          <a href="https://api.whatsapp.com/send?phone=970531712" target='_blank' className="font-normal leading-6 text-gray-200  text-2xl hover:scale-110 hover:text-sky-500">
                <FaWhatsapp   className='Index: 2  position: relative right-0 .. h-14 w-14 text-slate-800 duration-300 cursor-pointer hover:scale-110 hover:text-blue-300 bg-green-600 rounded-full' />
              </a>
             
          {/* <FaWhatsapp className='h-14 w-14 text-green-100 bg-green-500 rounded-full absolute  right-0 ...' /> */}
          
          {/* <img src='../../public/images/whatssap.png' className='rounded-full h-12 w-12'></img>  */}
          
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">   
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            -
          </a>
        </div>
      </nav>
      { /* mobileMenuOpen */}                  
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a href="/Carousel"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="/About"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Nosotros
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      <a
                        href="/CategoryProducts"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Productos
                        </a>
                        <ChevronDownIcon
                          className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {products.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={"/Products/" + item.grupo}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>

                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>            
                <a
                  href="/News"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Proyectos
                </a>
                <a
                  href="/SectionsContact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contactos
                </a>
                
                
              </div>           
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>      
    </header>
  )
}
