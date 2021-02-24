import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PetsContainer from './components/PetsContainer'
import BackToTopContainer from './components/BackToTopContainer'

function App() {
  const [imageDownloadArr, setImageDownloadArr] = useState([])
  const [noSearchResults, setNoSearchResults] = useState(false)

  function handleAddToImageArr(item) {
    setImageDownloadArr(imageDownloadArr.concat(item))
  }
  function handleRemoveFromImageArr(item) {
    setImageDownloadArr(imageDownloadArr.filter((downloadObj) => downloadObj.url !== item.url))
  }
  function handleClearImageArr() {
    setImageDownloadArr([])
  }
  return (
    <div className="App">
      <Header
        imageDownloadArr={imageDownloadArr}
        handleClearImageArr={handleClearImageArr}
        setNoSearchResults={setNoSearchResults}
      />
      <PetsContainer
        noSearchResults={noSearchResults}
        imageDownloadArr={imageDownloadArr}
        handleAddToImageArr={handleAddToImageArr}
        handleRemoveFromImageArr={handleRemoveFromImageArr}
      />
      <BackToTopContainer />
    </div>
  )
}

export default App
