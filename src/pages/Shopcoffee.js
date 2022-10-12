import FetchUtilityMethod from "../utility/Fetchutilitymethod";
import React, { useState, useEffect } from "react";
import Titlelink from "../components/titlelink";
import Teaser from "../components/teaser";
function Shopcoffee ()
{
    const [data, setData] = useState(null);
  const getData = () => {
    FetchUtilityMethod(
      process.env.REACT_APP_HOST_URL,
       process.env.REACT_APP_PORT,
       process.env.REACT_APP_SHOP_COFFEE_URL 
      
    )
      .then(function(myJson) {
      
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return data !== null ? (
    <div>
   <Teaser value={data.linkimage}/>
    <Titlelink value={data.tittlelink}/>

    
</div>    

  ): (
    <h1>no data found</h1>
  );
}



 
export default Shopcoffee;