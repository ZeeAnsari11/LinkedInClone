import React from 'react'
import { Info } from '@mui/icons-material'
import { FiberManualRecord } from '@mui/icons-material'

const Widgets = () => {

  const newArticle = (heading, subtitle) => {
    return (
      // widgets article
      <div className='flex p-[10px] cursor-pointer hover:bg-neutral-100 hover:rounded-xl hover:cursor-pointer '>
        {/* widgetArticleLeft */}
        <div className='text-[#0177b7] mr-1 text-sm'>
          <FiberManualRecord />
        </div>
        {/* widgetArticleRight */}
        <div className='flex-1'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    )

  }
  return (
    // widgets
    <div className='sticky flex-[0.2] top-2 bg-white rounded-xl border-l-indigo-50 h-fit'>
      {/* widgets header */}
      <div className='flex items-center justify-between p-[10px]'>
        <h2 className='text-sm font-normal	'>LinkedIn News</h2>
        <Info />
      </div>
      {newArticle(" Asli LinkedIn", "Top News, 9999 readers")}
      {newArticle(" CronaVirus", "Top News, 200000 Ded")}
      {newArticle(" CronaVirus", "Top News, 200000 Ded")}
      {newArticle(" CronaVirus", "Top News, 200000 Ded")}
      {newArticle(" CronaVirus", "Top News, 200000 Ded")}
      {newArticle(" CronaVirus", "Top News, 200000 Ded")}
 
    </div>
  )
}

export default Widgets
