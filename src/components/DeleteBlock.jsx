import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function DeleteBlock() {
  return (
    <FontAwesomeIcon icon={faX} className='text-red-400 hover:cursor-pointer hover:text-red-200' />
  )
}
