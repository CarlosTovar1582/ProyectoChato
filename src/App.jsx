
/*import Carousel from "./components/Carousel "

const slides =[
  
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8KzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",  
]*/
/*    <main className="App">
      <div className="max-w-lg">
        <Carousel autoSlide={true} autoSlideInterval={1000}>          
          {[            
            ...slides.map((s) => 
                <img src={s}/>           
            
                        )
          ]}        
        </Carousel>
      </div> </main>*/

//import "./App.css"
//----------------------------------------------------------------ORIGINAL
{/*
import Header from "./components/Header"
import Body from "./components/Body"
import About from './components/About'
import News from './components/News'
import Footer from "./components/Footer"
import CategoryProducts from './components/CategoryProducts'
import SectionsContact from './components/SectionsContact'
import { Carousel } from './components/Carousel '
import { slides } from './data/carouselData'
        import { BrowserRouter,Route,Routes } from 'react-router-dom' */}
//----------------------------------------------------------------UNA REFERECNACIA

{/*import { Routes, Route } from 'react-router-dom';
import Home from '../src/routes/Home'
import About from '../src/routes/About'
import WebDesign from '../src/routes/WebDesign'
import WebDev from '../src/routes/WebDev'
import SEO from '../src/routes/SEO'
import Services from '../src/routes/Services'
import Layout from '../src/components/Layout'
import Frontend from '../src/routes/Frontend'
import PHP from '../src/routes/PHP'
import Node from '../src/routes/Node'
import AboutWho from '../src/routes/AboutWho'
      import OurValues from '../src/routes/OurValues'*/}



//----------------------------------------------------------------


//import Header1 from "./components/Header1"
//import { BrowserRouter,Route,Routes } from 'react-router-dom'
//----------------------------------------------------------------------------
{ /* import Navbar from "./components/Navbar/Navbar"
import NavItem from "./components/NavIteam/NavItem"
import DropdownMenu from "./components/Dropdown/DropdownMenu"
import { BiBellMinus } from "react-icons/bi"
import { AiOutlinePlusCircle, AiOutlineCaretDown } from "react-icons/ai"
import { TbBrandMessenger } from "react-icons/tb"

import Header from "./components/Header"
import { BrowserRouter,Route,Routes } from 'react-router-dom'  */}
//----------------------------------------------------------------------------
import React from "react";



//import { local } from './App.js'
//import Header from '../src/js/Header.js'
//const messages = await import(`../src/js/${Header}.js`)

import Header from "./components/Header"
import Body from "./components/Body"
import About from './components/About'
import News from './components/News'
import Footer from "./components/Footer"
import Products from './components/Products'
import DetailsProducts from './components/DetailsProducts' 
import CategoryProducts from './components/CategoryProducts'
import SectionsContact from './components/SectionsContact'


//import { Carousel } from './components/Carousel '
//import { slides } from './data/carouselData'

//import { Carousel1 } from './components/Carousel1'
//import { slides } from './data/carouselData'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

import  Carousel  from './components/Carousel ' 
import { FaWhatsapp } from "react-icons/fa";





{/* <Route path="/Carousel1" element={<Carousel1/>}/>  */}

export default function App() {
  
  return (
    <>
    <BrowserRouter>
              <Header/>
           
                <Routes>  
                  
                                  
                  <Route path="/" element={<Carousel/>}/>
                  <Route path="/Carousel" element={<Carousel/>}/>
                  <Route path="/About" element={<About/>}/>
                  <Route path="/Products" element={<Products/>}/>
                  <Route path="/Products/:id" element={<Products/>}/>
                  <Route path="/DetailsProducts" element={<DetailsProducts/>}/>
                  <Route path="/CategoryProducts" element={<CategoryProducts/>}/>
                  <Route path="/CategoryProducts/:id" element={<Products/>}/>                             
                  <Route path="/News" element={<News/>}/>
                  <Route path="/SectionsContact" element={<SectionsContact/>}/>                               
                </Routes>
              <Footer/>
      </BrowserRouter>  
    


  

    { /*   ESTE CODIGO FUNCIONA EL DROPDPOWN ANIDADO
    <div className="App">
        <Navbar>
          <NavItem icon={<AiOutlinePlusCircle />} />
          <NavItem icon={<BiBellMinus />} />
          <NavItem icon={<TbBrandMessenger />} />
          <NavItem icon={<AiOutlineCaretDown />}>
            <DropdownMenu />
          </NavItem>
        </Navbar>
      </div>  */ }
     



    

     
    
  
       


    
          {/* -----ORIGINAL
          <BrowserRouter>
              <Header/>
                <Routes>
                <Route path="/Carousel" element={<Carousel data={slides} />}/>
                  <Route path="/About" element={<About/>}/>
                  <Route path="/CategoryProducts" element={<CategoryProducts/>}/>
                  <Route path="/News" element={<News/>}/>
                  <Route path="/SectionsContact" element={<SectionsContact/>}/>              
                </Routes>
              <Footer/>
      </BrowserRouter>     */}  
      
      {/*       
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="web-design" element={<WebDesign />} />
          <Route path="web-dev" element={<WebDev />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="node" element={<Node />} />
          <Route path="seo" element={<SEO />} />
          <Route path="php" element={<PHP />} />
          <Route path="who-we-are" element={<AboutWho />} />
          <Route path="our-values" element={<OurValues />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>  */}
 
    
       
        
        
    </>
        
       

 

    
        
    
    
    
    

   
  )
}


