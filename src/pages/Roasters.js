import React, {  useState, useEffect } from 'react';
import FetchUtilityMethod from "../utility/Fetchutilitymethod";

import Teaser from '../components/teaser';
import Allcard from './Allcard';
function Roasters ()
{
    const [data , setData]=useState(null);
   const getData=()=>{
    FetchUtilityMethod(
        process.env.REACT_APP_HOST_URL,
        process.env.REACT_APP_PORT,
        process.env.REACT_APP_OUR_ROASTERS_URL 

    )
    .then(function(myJson) {
      
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

//  return (<Allcard/>);
  return data !== null ? (
    <div>


    <Teaser value={data.linkimage}/>,
     <Allcard/>


    </div>
  
 

    

  ): (
    <h1>no data found</h1>
  );
}
 
export default Roasters;

