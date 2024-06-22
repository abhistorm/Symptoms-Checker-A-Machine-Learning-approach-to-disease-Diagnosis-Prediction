import React from 'react'
import { Link } from 'react-router-dom'

const DiseaseCard = ({name,id,imgSrc,desc}) => {
  return (
    <Link to={`/detail/${id}`} className="w-full max-w-[250px]">
      <div className="flex flex-col items-center justify-center h-[360px] shadow-xl hover:shadow-2xl hover:scale-105 transition-all cursor-pointer bg-opacity-25 backdrop-filter backdrop-blur-md">
        <img src={imgSrc} alt="disease-pic" className="h-[90%] object-contain mt-[-10px]" />
        <p className="p-3 mb-0 font-semibold text-black">{name}</p>
        <p className="p-3 text-gray-700 text-xs">{desc}</p>
      </div>
    </Link>
  )
}

export default DiseaseCard