import React from 'react'

const ProfileCard = ({name,age,city}) => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="bg-white shadow-lg rounded-xl overflow-hidden max-w-sm hover:scale-105 transition-transform duration-300">
    <img 
      className="w-full h-64 object-cover" 
      src="https://media.istockphoto.com/id/1316451950/photo/smiling-young-boy-of-indian-origin.jpg?s=612x612&w=0&k=20&c=F4YrF3s398T2nytXqqvnb_E7cV_YkCH_txNiNF5JK00=" 
      alt="Profile" 
    />
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1"><span className="font-medium">Age:</span> {age}</p>
      <p className="text-gray-600"><span className="font-medium">City:</span> {city}</p>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
        View Profile
      </button>
    </div>
  </div>
</div>

  )
}

export default ProfileCard
