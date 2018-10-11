import React from "react"

const globaldata={
    number:0,
    authToken:'Adfd3999',
    sessionId:"",
    isAuthenticated:false
};

const NumberContext=React.createContext(globaldata.number);

export default NumberContext;