'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import image3 from '../../public/3.png'
export default function Component() {
  const [showBox, setShowBox] = useState(false)
  const [showHeart, setShowHeart] = useState(false)
  const [buttonsSwapped, setButtonsSwapped] = useState(false)

  const handleYesClick = () => {
    setShowBox(true)
    setTimeout(() => setShowHeart(true), 1000)
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
  }

  const handleNoHover = () => {
    setButtonsSwapped(!buttonsSwapped)
  }

  return (
    <div className="bg-cover bg-center flex flex-col items-center justify-center absolute px-4 sm:px-6 lg:px-8 h-full w-full"
      style={{ backgroundImage: `url(${image3})` }}>
      <div className="absolute inset-0 bg-black opacity-50 bg-opacity-30"></div>
      <div className="p-5 rounded-lg shadow-lg z-10 text-white text-center max-w-md w-full border border-white backdrop-blur-sm bg-white/30">
        <h1 className="text-2xl font-bold text-white mb-4">I love you</h1>
        <p className="text-lg text-white mb-6">Will you be my Bandi?</p>
        <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row justify-center">
          {/* Conditionally render buttons based on their swapped state */}
          {!buttonsSwapped ? (
            <>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
                onClick={handleYesClick}
              >
                Yes
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
                onMouseEnter={handleNoHover}
              >
                No
              </button>
            </>
          ) : (
            <>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
                onMouseEnter={handleNoHover}
              >
                No
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 transform hover:scale-105"
                onClick={handleYesClick}
              >
                Yes
              </button>
            </>
          )}
        </div>
      {showBox ?   <div className="mt-4 text-white text-xl font-bold">
            ❤️ Thank you! ❤️
          </div> : ""}
      </div>
      {showBox && (
        <motion.div
          className="z-20 w-64 h-64 bg-white bg-opacity-80 rounded-lg shadow-lg mt-8 flex items-center justify-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {showHeart && (
            <motion.div
              className="text-6xl sm:text-7xl md:text-8xl"
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
            >
              ❤️
            </motion.div>
          )}
        </motion.div>
      )}
    </div>
  )
}
