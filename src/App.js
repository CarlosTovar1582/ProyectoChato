import React from "react"
function App(){
    const slides=[
        { url:'https://i.ibb.co/ncrXc2V/1.png'},
        { url:'https://i.ibb.co/B3s7v4h/2.png'},
        { url:'https://i.ibb.co/XXR8KzF/3.png'},
        { url:'https://i.ibb.co/yg7BSdM/4.png'},
    ]
    return(
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
            <div style={{backgroundImage: 'url(${slides[1].url})'}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">

            </div>

        </div>
    )
}
export default App