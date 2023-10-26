import React from 'react'
import { useParams } from 'react-router-dom'

const EventInfo = () => {
    const {id} = useParams();
  return (
    <div key={id}> info page {id}</div>
  )
}

export default EventInfo