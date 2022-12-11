import { useState } from "react";
export default function RFooter() {
  const [view, setView] = useState(false)

  const goto = () => {
    const getFlow = document.documentElement.scrollTop
    if(getFlow > 300){
        setView(true)
    } else if(getFlow <= 300){
        setView(false)
    };
  }

  const scroller = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }

  window.addEventListener('scroll', goto)

  return (
    <>
      <footer className="container mx-auto relative top-5 mt-[16rem] sm:top-[19rem] sm:mt-0 inline-block justify-center">
        <div className="text-center">
            <button className={`m-auto h-10 bg-white shadow-2xl rounded-full w-10 p-2 cursor-pointer`}>
            <i class="fa-solid fa-arrow-up" onClick={scroller}></i>
            </button>
     
          <p>Back to top</p>
        </div>
        <div className="mt-10 text-center">
          <p>All rights reserved. Resela.ng &copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </>
  );
}
