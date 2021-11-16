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
            <img src="https://i2.wp.com/mhmanga.com/wp-content/uploads/2021/03/The_Great_Mage_Returns_After_4000_Years_1.jpg.990x990_q95.jpg?fit=467%2C630&ssl=1" />
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
