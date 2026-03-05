import React from "react";


const IdCard = ({image, name, role, idNumber, department}) => {

    return(
        <>
        <div className="bg-white shadow-lg rounded-lg p-6 w-80 mx-auto">
            <img src={image} alt="Profile" className="w-32 h-32 rounded-full mx-auto"/>
            <h2 className="text-3xl text-center font-bold mt-4">{name}</h2>
            <p className="text-gray-600 text-center">{role}</p>
            <p className="text-gray-600 text-center">{idNumber}</p>
            <p className="text-gray-600 text-center">{department}</p>
            <button className="mt-4 w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-800">View Profile</button>
        </div>
        
        </>
    )
}

export default IdCard;