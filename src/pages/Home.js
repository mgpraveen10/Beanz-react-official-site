import Title from "../components/title";
 import StarBean from "../components/starbean";
import Teaser from "../components/teaser";
import Ltd from "../components/ltd";
import Titd from "../components/titd";
import Card1 from "../components/card1";
import FetchUtilityMethod from "../utility/Fetchutilitymethod";
import Titlelink from "../components/titlelink";
import Card from '../components/cardcomponent';
import Titledescriptionbutton from "../components/titledescriptionbutton";


import React, { useState, useEffect } from "react";

function Homez() {
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
    <Teaser value={data.linkimage}/>,
    <Title value={data.alltitle} />,
      <Ltd value={data.logotitledes} />,
      <StarBean value={data.bean} />,
      <Title value={data.alltitle_1} />,
      <Card1 value={data.cardcomponent} />,
      <Titlelink value={data.tittlelink}/>
      <Titd value={data.titd} />,
      <Titledescriptionbutton value={data.titledescriptionbutton}/>
      
      
      
    </div>
  ) : (
    <h1>no data found</h1>
  );
  
}

        
 
export default Homez ;