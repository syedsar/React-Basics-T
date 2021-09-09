// import React, { useState } from 'react'

// function ComplexReactForm() {
//     const [name, setName] = useState({fName :'',lName:''})

//     const nameHandler =(event)=>{
//         const name = event.target.name;
//         const value = event.target.value;

//         setName((prevValue)=>{
//             if(name==='fName'){
//                 return {
//                     fName:value,
//                     lName:prevValue.lName
//                 }
//             }else{
//                 return{
//                     fName:prevValue.fName,
//                     lName:value
//                 }
//             }
//         })
//     }

//     const submitHandler=(e)=>{
//         e.preventDefault();
//         alert(`Entered Name is : ${name.fName} ${name.lName}`)
//     }

//     return (
//         <div>
//         <form onSubmit={submitHandler}>
//             <h1>Hi {name.fName} {name.lName}</h1>
//             <input type='text' name='fName' value={name.fName} onChange={nameHandler} placeholder='Enter Your First Name' /><br/>
//             <input type='text' name='lName' value={name.lName} onChange={nameHandler} placeholder='Enter Your First Name' /><br/>
//             <button type='submit'>Submit</button>
//         </form>
//         </div>
//     )
// }

// export default ComplexReactForm

import React, { useEffect, useState } from "react";

const ComplexReactForm = () => {
  const [details, setDetails] = useState({ fName: "", lName: "", email:"", phone:"" });

  useEffect(()=>{
    document.title = 'React!!!'
  })

  const nameHandler = (e) => {
    const { value, name } = e.target;
    console.log(name)
    console.log(details)

    // setDetails({...details, [name]:value})

    setDetails((prevValue)=>{
        return{
            ...prevValue,
            [name]  :value
        }
    })

    // setName((prevValue) => {
    //   if (name === "fName") {
    //     return {
    //       fName: value,
    //       lName: prevValue.lName,
    //       email: prevValue.email,
    //       phone: prevValue.phone
    //     };
    //   } else if(name === "lName") {
    //     return {
    //       fName: prevValue.fName,
    //       lName: value,
    //       email: prevValue.email,
    //       phone: prevValue.phone
    //     };
    //   }else if(name === "email"){
    //     return {
    //         fName: prevValue.fName,
    //         lName: prevValue.lName,
    //         email: value,
    //         phone: prevValue.phone
    //       };
    //   }else{
    //     return {
    //         fName: prevValue.fName,
    //         lName: prevValue.lName,
    //         email : prevValue.email,
    //         phone : value
    //       };
    //   }
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Entered Name is : ${fName} ${lName}\nEntered Email is : ${email}\nEntered Phone Number is : ${phone}`);
  };

//note : destructing of state so we can use state object value as it is
  const {fName,lName,email,phone} = details
  return (
    <div style={{display:"flex", flexDirection: "column", justifyContent:"center", alignItems:'center'}}>
      <h1>
        Hi {fName} {lName}
      </h1>
      <p>your Email is : {email}</p>
      <p>Your Phone Number is : {phone}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={fName}
          onChange={nameHandler}
          name="fName"
          placeholder="Enter First Name"
        />
        <br />
        <input
          type="text"
          value={lName}
          onChange={nameHandler}
          name="lName"
          placeholder="Enter Last Name"
        />
        <br />
        <input
          type="email"
          value={email}
          onChange={nameHandler}
          name="email"
          placeholder="Enter Email"
        />
        <br />
        <input
          type="tel"
          value={phone}
          onChange={nameHandler}
          name="phone"
          placeholder="Enter Phone Number"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ComplexReactForm;
