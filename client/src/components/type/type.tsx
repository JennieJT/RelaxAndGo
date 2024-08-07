import React, { useContext } from 'react'
import { TypeColorsContext } from '../../context/ColorContext'

function TypeLine({item}) {
const COLORS = useContext(TypeColorsContext)
  return (
    <div className = "w-full flex flex-row items-center justify-between">
        <div>{item.title}</div>
        <div className = "flex flex-row items-center gap-1 pr-1">
            {
                item.type.map((t, index) => <div key = {index} className = {`rounded-md text-xs px-1 ${COLORS?COLORS[t as keyof typeof COLORS]:""}`}>
                        {t}
                    </div>
                )
            }
        </div>
    </div>
  )
}

export default TypeLine