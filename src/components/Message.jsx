import React from 'react'
import {picture} from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Message() {
  const navigate = useNavigate();

  // customize your own picture, title and subtext. You can also add more picture.
  const pictures = [
    { Image: picture, title: 'January 18, 2025', description: "Happy 1 year and 2 months, my Snow Mahal! 💛 This milestone feels even more special because it’s the first celebration we’re having together this yearrr, and Sarip couldn’t ask for a better way to start it than by celebrating us." },
    { Image: picture, title: '', description: " Looking back at these months, through every laugh, every moment of growth, and even the times we stumbled, my heart keeps choosing you, over and over again. Snow Mahal have made Sarip's days brighter and Sarip's nights warmer, and alsoo made Sarip's world infinitely better just by being in ittt."},
    { Image: picture, title: '', description: "Snow Mahal, you are my safe place, my greatest joy, and the reason behind so many smiles on Sarip's face. As we continue writing our story, Sarip hope Sarip can make you feel as cherished, treasured, and special as you’ve always made me feel." },
    { Image: picture, title: '', description: "Here’s to the memories we’ve shared and the many more we’ll create together. I treasure you endlessly Snow Mahal!!! 🌻" },

  ]
  return (
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
             Messages For Snow Mahal
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>
  )
}

export default Message
