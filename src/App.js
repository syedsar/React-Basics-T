import React, { useEffect } from 'react'



const App = ()=>{

  
  const mainStyle = {
    textAlign : 'center'
  }
  
  let greeting = {
    wish : '',
    qts:''
  };
  let time = new Date().getHours();
  console.log(time)
  
  let greetStyle = {}

  if(time >= 5 && time < 12){
    greeting.wish = 'Good Morning,';
    greeting.qts = ' had your Breakfast?'
    greetStyle.color = '#87CEEB';
  }else if(time >=12 && time< 15 ){
    greeting.wish = 'Good Afternoon,'
    greeting.qts = ' had your Lunch?'
    greetStyle.color = '#ffff00'
  }else if(time >= 15 && time < 20){
    greeting.wish = 'Good Evening,'
    greeting.qts = ' take some snacks'
    greetStyle.color = 'orange'
  }else{
    greeting.wish = 'Good Night,'
    greeting.qts = ' sleep well'
    greetStyle.color = 'green'
  }
  return(
    <>
      <div style = {mainStyle}>
        <h1>Greeting!</h1>
        <h2><span style = {greetStyle}>{greeting.wish}</span>{greeting.qts}</h2>
      </div>
    </>
  )

}

export default App;