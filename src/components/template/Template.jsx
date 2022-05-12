import React from 'react'
import { useEffect,useState } from 'react';

const Template = () => {
  const [avenger,setAvenger] = useState([]);

  useEffect(() => {
    const fetchData = async()=>{
      const res = await fetch('http://localhost:9090/avenger');
      const data =await res.json()
      const avengers = data[0];
      setAvenger(avengers)
    }
    fetchData();
  },[])

  console.log(avenger);

  return (
    <>
      <h1 className='text-center'>{avenger.title}</h1>
      <h2>{avenger.summery}</h2>
    </>
  )
}

export default Template;