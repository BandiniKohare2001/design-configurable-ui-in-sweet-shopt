import React from 'react';
import Config from './data/cardconfig.json'
import "./App.css"
function App() {
  return (
    <>
      <div>
        <div className='top-header-on-dashboard' style={{ backgroundColor: Config.theme.accentColor }}>
          <div className='d-flex'>
            <div>
              <h3 className='text-center' style={{ color: Config.theme.danger }}>{Config.title}</h3>
              <p className='feture-text'>{Config.text}</p>
            </div>
          </div>
        </div>
        <div className='dash-body'>
          <div className='dash-container'>
            {
              Config.cards.map((cardsData, index) => {
                const { title, img, value, text } = cardsData
                return (
                  <div className='d-flex'>
                    <div className='card-container' key={index}>
                      <div className='card-1'>
                        <img className="card-img" src={img} />
                        <h3 className='card-title' style={{ color: Config.theme.danger }}>{title}</h3>
                        <h1 className='card-value'>{value}</h1>
                        <p>{text}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div></div>
      </div>
    </>
  )
}
export default App;