import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import HackerRoom from "../components/hackerRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/canvasLoader.jsx";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/constants.js";
import Target from "../components/target.jsx";
import Cube from "../components/cube.jsx";
import Rings from "../components/ring.jsx";
import ReactLogo from "../components/reactLogo.jsx";
import Button from "../components/button.jsx";



const Hero = () => {
   const isSmall = useMediaQuery({maxWidth : 440});
   const isMobile = useMediaQuery({maxWidth : 768});
   const isTablet = useMediaQuery({minWidth : 768 , maxWidth : 1024});
   const sizes = calculateSizes(isSmall,isMobile,isTablet);
    return (
       <section className="min-h-screen w-full flex flex-col relative" id="Home">
           <div className="w-full mx-auto  flex flex-col  sm:mt-36 mt:20 c-space gap-1">
               <p className="text-white sm:text-3xl text-2xl font-medium text-center font-generalsans"> Hi, I am
                   Aman <span className="waving-hand">👋</span></p>
               <p className="hero_tag text-gray_gradient"> Building products & brands</p>
           </div>
           <div className="w-full h-full absolute inset-0">
               <Canvas className="w-full h-full">
                   <Suspense fallback={<CanvasLoader/>}>
                       <PerspectiveCamera makeDefault position={[0, 0, 30]}/>
                       <HackerRoom
                           scale={sizes.deskScale}
                           position={sizes.deskPosition}
                           rotation={[0, Math.PI, 0]}/>
                       <group>
                           <Target scale={isMobile?1.1 :1.5} position={sizes.targetPosition} />
                           <ReactLogo position={sizes.reactLogoPosition}/>
                           <Cube position={sizes.cubePosition}/>
                           <Rings position={sizes.ringPosition}/>
                       </group>
                       <ambientLight intensity={1}/>
                       <directionalLight position={[10, 10, 10]} intensity={0.5}/>

                   </Suspense>

               </Canvas>
           </div>
           <div className="w-full  absolute   bottom-7 right-0 left-0 z-10 c-space">
               <a href="#contact" className="w-fit" >
                  <Button name="Let's work together " isBeam containerClass="sm:w-fit w-full sm:min-w-9"/>
               </a>
               </div>

       </section>
    )
}
export default Hero;