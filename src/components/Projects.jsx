import React from "react";
import fill from '../Assets/Projects/JS_Quiz.png'

function Projects () {
    return ( 
        <div className="w-full">
            <div className="max-w-[1240px] mx-auto px-2 py-16 text-white">
                <p className="text-xl tracking-widest uppercase" >Projects</p>
                <h2 className="py-4">What Ive Built</h2>
                <div className="grid md:grid-cols-2 gap-8 ">
                    <div className="relative fex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
                        <img className="rounded-xl group-hover:opacity-20" src={fill} alt="Project" />
                        <div>
                            <h3>JavaScriptQuiz</h3>
                            <p>React</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
     );
}

export default Projects ;