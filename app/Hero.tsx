"use client"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto ">
      <div>
      <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-neutral-200">
        AI Content
        <span className="bg-clip-text bg-gradient-to-tl bg-green-500 text-transparent"> Generator</span>
      </h1>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
        Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.
        </p>
        <a className="inline-flex justify-center items-center 
      gap-x-3 text-center bg-gradient-to-tl bg-green-500 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 dark:focus:ring-offset-gray-800" 
       href="/dashboard">
        Get started
        <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
      </a>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: (typeof squareData)[0][]) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
  },
  {
    id: 2,
    src: "https://cdn-icons-png.flaticon.com/128/4905/4905454.png",
  },
  {
    id: 3,
    src: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
  },
  {
    id: 4,
    src: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
  },
  {
    id: 5,
    src: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
  },
  {
    id: 6,
    src: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
  },
  {
    id: 7,
    src: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
  },
  {
    id: 8,
    src: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
  },
  {
    id: 9,
    src: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
  },
  {
    id: 10,
    src: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
  },
  {
    id: 11,
    src: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
  },
  {
    id: 12,
    src: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
  },
  {
    id: 13,
    src: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
  },
  {
    id: 14,
    src: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
  },
  {
    id: 15,
    src: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
  },
  {
    id: 16,
    src: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-[70%] h-[70%]"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<any>(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;