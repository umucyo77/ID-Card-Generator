import React from "react";


const IdCard = ({image, name, role, idNumber, department}) => {

    return(
        <>
        <div className="bg-white shadow-lg rounded-lg p-4 md:p-6 w-full max-w-xs md:max-w-sm mx-auto ">
            <img src={image} alt="Profile" className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto"/>
            <h2 className="text-xl md:text-3xl text-center font-bold mt-4">{name}</h2>
            <p className="text-gray-600 text-center text-sm md:text-base">{role}</p>
            <p className="text-gray-600 text-center text-sm md:text-base">{idNumber}</p>
            <p className="text-gray-600 text-center text-sm md:text-base">{department}</p>
            <button className="mt-4 w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-800 text-sm md:text-base">View Profile</button>
        </div>
        
        </>
    )
}

export default IdCard;