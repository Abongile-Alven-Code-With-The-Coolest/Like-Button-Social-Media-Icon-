import React from 'React'

export default function Toggle ({children}){
    const[on,setOn]=React.useState(false)
    
    function toggle(){
        setOn(prevOn => !prevOn)
    }
    return children
}