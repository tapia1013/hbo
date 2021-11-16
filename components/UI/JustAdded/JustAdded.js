import React from 'react'

const JustAdded = (props) => {

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 0; i < digit; i++) {
      thumbnails.push(comp)
    }
    return thumbnails;
  }

  return (
    <div className="just-added">
      <h3 className='just-added__title'>Just Added</h3>
      <div className='just-added__thumbnails'>
        {
          loopComp((<div className="just-added__thumbnail">
            <img src="https://cdn-products.eneba.com/resized-products/JXFiX2Ysvxk7t4RcM2363CBtd6gVxwQ-61ekw3EKYMo_350x200_1x-0.jpeg" />
            <div className="just-added__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>), 10)
        }
      </div>
    </div>
  )
}

export default JustAdded;
