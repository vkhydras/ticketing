"use client"
import { useRouter } from 'next/navigation'; 
import { faTimes } from '@fortawesome/free-solid-svg-icons'; // Corrected icon import name
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function DeleteBlock({ id }) {
  const router = useRouter();

  const deleteTicket = async () => { 
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, { 
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh(); 
    }
  }

  return (
    <FontAwesomeIcon icon={faTimes} className='text-red-400 hover:cursor-pointer hover:text-red-200' onClick={deleteTicket} />
  );
}
