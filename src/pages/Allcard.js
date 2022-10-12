import React, { useState, useEffect } from "react";
import FetchUtilityMethod from "../utility/Fetchutilitymethod";
import Card from "../components/cardcomponent";


function Allcard() {
  const [data, setData] = useState(null);
  const getData = () => {
    FetchUtilityMethod(
      process.env.REACT_APP_HOST_URL,
       process.env.REACT_APP_PORT,
       process.env.REACT_APP_HOME_PATH_URL 
      
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
    
    <Card value={data.cardcomponent}/>,
    
      
    </div>
  ) : (
    <h1>no data found</h1>
  );
  
}

        
 
export default Allcard ;