"use client";
import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const TerminalBlock = () => {
  const el = useRef(null);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const codeStrings = [
   
    {
      text: `const <span class='text-purple-400'>asyncFunction</span> = <span class='text-yellow-400'>async</span> () => {
  try {
    const data = <span class='text-yellow-400'>await</span> fetch('/api');
    return data.json();
  } catch (err) {
    console.error(err);
  }
}`,
    
    },
    {
      text: `const <span class='text-purple-400'>reducer</span> = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    default:
      return state;
  }
}`, 
    }
  ];

  useEffect(() => {
    const options = {
      strings: codeStrings.map(({ text }) => 
        `${text}`
      ),
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true,
      cursorChar: '▋',
      autoInsertCss: true,
    };

    const typed = new Typed(el.current, options);

    return () => typed.destroy();
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(el.current.textContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text:', err);
    }
  };

  return (
    <div className={`
      transition-all duration-300 ease-in-out 
      ${isMaximized ? 'fixed inset-4 z-50' : 'relative'}
    `}>
      <div className={`
        bg-slate-900/20 text-gray-200 
        rounded-md shadow-2xl
        border border-purple-500/30
        backdrop-blur-xl
        transition-all duration-300
        ${isMaximized ? 'h-full' : 'h-80'}
      `}>
        {/* Terminal Header */}
        <div className="border-b border-purple-500/30 p-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button 
            aria-label="Close"
              className="h-4 w-4 bg-red-500 rounded-full hover:bg-red-600 transition-colors"
              onClick={() => !isMaximized && window.history.back()}
            />
            <button 
            aria-label="Close"
              className="h-4  w-4 bg-yellow-500 rounded-full hover:bg-yellow-600 transition-colors"
              onClick={() => setIsMaximized(!isMaximized)}
            />
            <button 
            aria-label="Close"
              className="h-4 w-4 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
              onClick={handleCopy}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-xs text-yellow-300">JS</span>
            {isCopied && (
              <span className="text-xs text-green-400 animate-fade-in-out">
                Copied!
              </span>
            )}
          </div>
        </div>

        {/* Terminal Content */}
        <div className="p-4 h-[calc(100%-68px)]">
          <div className="flex items-center text-green-400 mb-2">
            <span className="mr-2">➜</span>
            <span className="text-blue-400">~/dev</span>
          </div>
          <p
            ref={el}
            className="whitespace-pre-wrap text-sm md:text-base font-mono leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalBlock;