import React, { useEffect, useState } from "react";
import LeftGameNavigation from "./LeftGameNavigation/LeftGameNavigation";

const Home = () => {

  const [loaded,setLoaded] = useState(false)
  useEffect(()=>{
    setLoaded(true);
  })

  return <div  className='grid grid-cols-6 mt-5'>
    <LeftGameNavigation/>
    <div className="col-start-2 col-end-8 bg-slate-400">Right</div>
  </div>;
};

export default Home;
