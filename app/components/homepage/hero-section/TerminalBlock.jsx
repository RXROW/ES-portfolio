"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const TerminalBlock = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "<span class='text-purple-400'>const</span> <span class='text-blue-400'>typed</span> = <span class='text-purple-500'>new</span> <span class='text-green-400'>Typed</span>(el.current, options);",
        "<span class='text-purple-400'>useEffect</span>(() => {}, []);",
        "<span class='text-purple-400'>return</span> () => { typed.<span class='text-blue-400'>destroy</span>(); };",
        "&lt;p className='<span class='text-yellow-300'>whitespace-pre-wrap text-lg</span>'&gt;",
        "<span class='text-blue-400'>console</span>.<span class='text-green-400'> <br> log</span>('Code block example');",
      ],
      typeSpeed: 70,
      backSpeed: 30,
      backDelay: 500,
      loop: true,
    };

    const typed = new Typed(el.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-72 bg-slate-900 text-gray-200 p-2 ring-1 ring-purple-500 rounded-sm shadow-lg max-w-xl mx-auto mt-10 font-mono">
      <div className="border-b border-cyan-400 w-full py-5 relative mb-10">
        <div className="absolute top-2 left-2 flex space-x-1">
          <div className="h-3 w-3 bg-red-500 rounded-full"></div>
          <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
          <div className="h-3 w-3 bg-green-500 rounded-full"></div>
        </div>
      </div>
      <p
        className="whitespace-pre-wrap text-lg leading-relaxed"
        ref={el}
      ></p>
    </div>
  );
};

export default TerminalBlock;
