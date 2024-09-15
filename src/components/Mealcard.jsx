import React from 'react'

function Mealcard({idCategory,strCategory,strCategoryThumb,strCategoryDescription}) {
    console.log(idCategory)
  return (
    <>
     <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs mx-auto">
      <img className="w-full h-48 object-cover" src={strCategory}  />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{strCategoryThumb}</h2>
        <p className="text-gray-600 text-sm">{strCategoryDescription}</p>
      </div>
      <div className="flex justify-between p-4 border-t">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Buy Now
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
          Add to Cart
        </button>
      </div>
    </div>
    </>
  )
}


export default Mealcard