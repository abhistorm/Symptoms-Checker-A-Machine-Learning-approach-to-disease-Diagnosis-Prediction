import React from 'react'
import DiseaseCard from '../components/DiseaseCard'
import { diseases } from '../diseases/diseases'

const HomeScreen = () => {
  return (
    <div className="flex justify-center py-10 bg-[#ebebeb]">
    <div className="space-x-4 md:w-2/3 flex">
      {diseases.map((disease) => (
        <DiseaseCard key={disease.id} id={disease.id} name={disease.name} imgSrc={disease.imageSrc} desc={disease.desc} />
      ))}
    </div>
  </div>
  )
}

export default HomeScreen