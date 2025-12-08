// import React from 'react'
// import './DescriptionBox.css'

// const DescriptionBox = () => {
//   return (
//     <div className='descriptionbox' >
//         <div className="description-navigator">
//             <div className="description-nav-box">Description</div>
//             <div className="descriptionbox-nav-box">Reviews(122)</div>

//         </div>
//         <div className="descriptionbox-description">
//             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, dolorem deleniti ea fugit voluptatem illum nihil accusantium maxim</p>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit magnam officia, quis doloribus non dolorum asperiores iusto qunfnwoi wbbwbw wb bw</p>

//         </div>
      
//     </div>
//   )
// }

// export default DescriptionBox
import React, { useState } from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {

  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className='descriptionbox'>

    
        <div className="description-navigator">

            <div 
              className={activeTab === "description" ? "active-tab" : ""}
              onClick={() => setActiveTab("description")}
            >
              Description
            </div>

            <div 
              className={activeTab === "reviews" ? "active-tab" : ""}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (122)
            </div>

        </div>

        <div className="descriptionbox-description">

            {activeTab === "description" && (
              <>
                <p>This is product description here...</p>
                <p>You can write long details about the product.</p>
              </>
            )}

            {activeTab === "reviews" && (
              <>
                <p>⭐⭐⭐⭐⭐ Amazing product!</p>
                <p>⭐⭐⭐⭐ Good value!</p>
              </>
            )}

        </div>
    </div>
  )
}

export default DescriptionBox
