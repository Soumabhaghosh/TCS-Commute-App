

import React from 'react'

import { Link } from 'react-router-dom'
export default function NotFound() {
  return (
    <>
     <h2>Whoops,we cannot find that page</h2>
     <p className="lead text-muted">You can always visit to <Link to="/">homepage</Link> </p>
    </>
   


  )
}