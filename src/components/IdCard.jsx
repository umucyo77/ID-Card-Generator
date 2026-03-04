import React from "react";


const IdCard = ({image, name, role, idNumber, department}) => {

    return(
        <>
        <div className="bg-white w-80 p-6 shadow-lg mx-auto rounded-lg ">
            <img src={image} alt="Profile" className="w-32 h-32 rounded-full mx-auto"/>
            <h2 className="text-3xl text-center font-bold mt-4">{name}</h2>
            <p className="text-gray-600 text-center">{role}</p>
            <p className="text-gray-600 text-center">{idNumber}</p>
            <p className="text-gray-600 text-center">{department}</p>
        </div>
        
        </>
    )
}

export default IdCard;