import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/router'
function cars() {
    const router=useRouter()
    const [CarName,SetCArName]=useState('')

    useEffect(()=>{
        const q=router.query.name as string
        console.log(q)
        if(q){
            SetCArName(q)
        }
    }),[router]
  return (
    <div>
      cars <h1>{CarName}</h1>
    </div>
  )
}

export default cars
