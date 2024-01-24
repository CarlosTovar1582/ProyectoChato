import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {FaArrowAltCircleLeft} from 'react-icons/fa'


const CarrouselCard =({images}) => {
    const [indice,setIndice] = useState(0)
    let myInterval

    const next = () => {
        clearInterval(myInterval)
        if(indice<images.length - 1){
            setIndice(indice + 1)
        }else{
            setIndice(0)

        }
    }
    const back = () => {
        clearInterval(myInterval)
        if(indice > 0){
            setIndice(indice - 1)
        }else{
            setIndice(images.length - 1)

        }
    }

    const autoNext = () => {
        if(indice < images.length - 1){
            setIndice(indice + 1)
        }else{
            setIndice(0)

        }

    }

    useEffect(()=>{
        myInterval=setTimeout(autoNext,5000) 
            
        }, [indice]);
    

    return(
        <div>
            <div className='flex flex-row items-center gap-2'>
                <FaArrowAltCircleLeft  onClick={back} className='zIndex: 2  position: absolute h-20 w-20 text-slate-800 duration-300 cursor-pointer hover:scale-110 hover:text-blue-300' />
                <div className='flex flex-col items-center w-full'>
                    { /*<button className='bg-green-500 px-4 py-2 rounded-2xl w-fit relative top-5 text-white font-bold shadow-lg'>
                        {images[indice].price} ARS
                        </button> */}
                    <img src={images[indice].url} alt="Hola" className='  rounded-lg '/>
                    {/*  <p className='text-lg text-white self-start pt-2'>{images[indice].title}</p>  */}
                    
                </div>              
                <FaArrowAltCircleLeft onClick={next} className='absolute  right-0 ... h-20 w-20 text-slate-800 duration-300 cursor-pointer hover:scale-110 hover:text-blue-300 rotate-180' />          
                
            </div>
            <div className="flex flex-row gap-2">
                {images.map((el,index) => {
                        return (
                            <div key={index} className={`bg-sky-700 rounded-full h-4 w-full opacity-10 ${index === indice && "opacity-100"}  `}>
                            </div>
                           
                        )
                       
                        
                })}

            </div>
        </div> 
    )
}
export default CarrouselCard

