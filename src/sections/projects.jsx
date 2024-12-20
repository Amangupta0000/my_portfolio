import {myProjects} from "../constants/constants.js";
import {Suspense, useState} from "react";
import {Canvas} from "@react-three/fiber";
import CanvasLoader from "../components/canvasLoader.jsx";
import {Center, OrbitControls} from "@react-three/drei";
import DemoComputer from "../components/demoComputer.jsx";


const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];
    const handleProjectNavigation = (direction) => {
      setSelectedProjectIndex((prevIndex) => {
          if(direction === "next"){
              return prevIndex === myProjects.length - 1 ? 0 : prevIndex + 1;
          }else{
              return prevIndex === 0 ? myProjects.length - 1 : prevIndex - 1;
          }
      } )

    };
    return (
       <section className="c-space my-20">
           <p className="head-text"> My Projects</p>
           <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full">
               <div className="flex flex-col relative gap-5 sm:p-10 py-10 px-5 shadow-2xl shadow-black-200">
                   <div className="absolute top-0 right-0">
                       <img src={currentProject.spotlight} alt="spotlight"
                            className="w-full h-96 object-cover rounded-xl"/>
                   </div>
                   <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg"
                        style={currentProject.logoStyle}>
                       <img src={currentProject.logo} alt="logo" className="w-10 h-10 shadow-sm"/>
                   </div>
                   <div className="flex flex-col text-white-600 gap-5 my-5">
                       <p className="text-white text-2xl font-semibold animatedText">{currentProject.title}</p><p
                       className="animatedText">{currentProject.desc}</p>
                       <p className="animatedText">{currentProject.subdesc}</p>

                   </div>
                   <div className="flex items-center justify-between gap-5">
                       <div className="flex items-center gap-3">
                           {currentProject.tags.map((tag, index) => (
                               <div key={index} className="tech-logo">
                                   <img src={tag.path} alt="tag"/>
                               </div>
                           ))}
                       </div>
                       <a className="flex items-center gap-2 cursor-pointer" href={currentProject.href} target="_blank"
                          rel="noreferrer">
                           <p className="text-white-600 ">Check live code</p>
                           <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3"></img>
                       </a>
                   </div>
                   <div className="flex items-center justify-between mt-7">
                       <button className="arrow-btn" onClick={() => handleProjectNavigation('prev')}>
                           <img src="/assets/left-arrow.png" alt="arrow-left" className="w-5 h-5"/>
                       </button>
                       <button className="arrow-btn" onClick={() => handleProjectNavigation('next')}>
                           <img src="/assets/right-arrow.png" alt="arrow-right" className="w-5 h-5"/>
                       </button>
                   </div>

               </div>
               <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
                   <Canvas>
                       <ambientLight intensity={Math.PI}/>
                       <directionalLight position={[10, 10, 5]}/>
                       <Center>
                           <Suspense fallback={<CanvasLoader/>}>
                               <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                                   <DemoComputer texture={currentProject.texture}/>
                               </group>
                           </Suspense>
                       </Center>
                       <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                   </Canvas>
               </div>
           </div>
       </section>
    )
}
export default Projects
