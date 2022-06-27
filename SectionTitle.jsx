import React from 'react';



export default function Section ({size, title}){
    return (
        <div style={{width: '100%'}} className="">
            <p style={{
                width:"100%", textAlign: "center", fontSize: size+"px", margin: "40px 0", fontWeight: "bold"
            }}>
            {title}
            </p>
        </div>           
    )
}
