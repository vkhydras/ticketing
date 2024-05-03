import React from 'react'

const getColor = (status) =>{
  let color = "bg-slate-700"
  switch(status?.toLowerCase()){
    case "done":
      color = "bg-green-200"
      return color
    case "in-progress":
      color = "bg-yellow-200"
      return color 
    case "to-do":
      color = "bg-red-200"
      return color
  }
  return color

  console.log(color)
}

export default function StatusDisplay({stat}) {
  return (
    <span className={`inline-block rounded-full px-2 py1 text-xs font-semibold text-gray-700 ${getColor(stat)}`}>
        {stat}
    </span>
  )
}
