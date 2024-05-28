import React from 'react'
import "../CatInAction/CatInAction.css"

const CatInAction = () => {
  return (
    <div>

<div className="section">
  <h1 className="title text-white">Cat In Action</h1>
  <p className="description  text-white">
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </p>
  <div className="image-grid">
  {/* <div className="image-container">
      <img src="src/assets/lftgrd.png" alt="Cat on motorbike"/>
    </div> */}

    <div className="image-container">
      <img src="../../assets/center.png" alt="Cat playing saxophone"/>
    </div>
    {/* <div className="image-container">
      <img src="src/assets/grd2.png" alt="Cat with sunglasses"/>
    </div> */}
{/* 
    <div className="image-container">
    
    <img src="src/assets/rightgrd.png" alt="Cat on motorbike"/>
  </div> */}
    
  </div>
</div>

      
    </div>
  )
}

export default CatInAction
