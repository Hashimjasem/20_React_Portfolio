import React from "react";
import html from '../Assets/Skills/icons8-html-5.svg'
import css from '../Assets/Skills/icons8-css3.svg'
import bootstrap from '../Assets/Skills/icons8-bootstrap.svg'
import express from '../Assets/Skills/icons8-express-js.svg'
import js from '../Assets/Skills/icons8-javascript.svg'
import mysql from '../Assets/Skills/icons8-sql-60.png'
import tailwind from '../Assets/Skills/icons8-tailwind-css.svg'
import rct from '../Assets/Skills/icons8-react.svg'
import graph from '../Assets/Skills/icons8-graphql.svg'
import node from '../Assets/Skills/icons8-nodejs.svg'
import jq from '../Assets/Skills/icons8-jquery.svg'
import mongo from '../Assets/Skills/icons8-mongodb.svg'
import seq from '../Assets/Skills/sequelize.svg'
import git from '../Assets/Skills/github.svg'

const Skills = () => {
    return (
        <div className="w-full bg-[#254f8d] text-black py-2 px-6">
            <h1 className="sm:text-2xl md:text-3xl text-xl font-bold ">My Skills</h1>
            <h2 className="py-2">Web Develompment</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-2 gap-8">

                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={html} alt="HTML" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>HTML</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={css} alt="CSS" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>CSS</h3></div>

                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={tailwind} alt="Tailwind" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>Tailwind</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={bootstrap} alt="BootstrapCSS" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>BootstrapCSS</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={rct} width='64px' height='64px' alt="React" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>React</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={node} alt="NodeJS" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>NodeJS</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={mongo} alt="MongoDB" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>MongoDB</h3></div>

                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={mysql} alt="MySQL" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>MySQL</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={express} alt="ExpressJs" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>ExpressJS</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={graph} width='64px' height='64px' alt="GraphQL" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>GraphQL</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={js} alt="JavaScript" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>JavaScript</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={seq} width='64px' height='64px' alt="Sequelize" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>Sequelize</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={jq} alt="JQuery" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>JQuery</h3></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4 justify-center items-center ">
                    <div className="p-6 shadow-xl rounded-xl justify-center items-center bg-white text-black hover:scale-105 ease-in duration-300">
                        <div className="m-auto">
                            <img src={git} alt="GitHub" />
                        </div>
                        <div className="flex flex-col items-center justify-center"><h3>GitHub</h3></div>
                    </div>
                </div>


            </div>

        </div>
    );
}

export default Skills;