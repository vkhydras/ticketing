import AddTicket from '@/components/addTicket'
import React from 'react'
import Ticket from '@/models/Ticket'

const getTicket = async id => {
  const res  = await fetch(`http://localhost:3000/api/tickets/${id}`,{cache:'no-store'})
  if(!res.ok){
    throw new Error ('failed to get ticket')
  }
  return res.json()
}

export default async function TicketPage({params}) {
  const EDITMODE = params.id === "new" ? false: true

  let updateTickeData = {}
  if(EDITMODE){
    updateTickeData = await getTicket(params.id)
    updateTickeData = updateTickeData.data
    console.log(updateTickeData)
  } else {
    updateTickeData = {
      _id: "new"
    }
  }
  return (
    <AddTicket ticket={updateTickeData} edit={EDITMODE}/>
  )
}
