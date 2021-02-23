import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import PetsContainer from './components/PetsContainer'
import BackToTopButton from './components/BackToTopButton'

function App() {
  const [imageDownloadArr, setImageDownloadArr] = useState([])
  function handleAddToImageArr(item) {
    setImageDownloadArr(imageDownloadArr.concat(item))
  }
  function handleRemoveFromImageArr(item) {
    setImageDownloadArr(imageDownloadArr.filter((downloadObj) => downloadObj.url !== item.url))
  }
  return (
    <div className="App">
      <Header imageDownloadArr={imageDownloadArr} />
      <PetsContainer
        imageDownloadArr={imageDownloadArr}
        handleAddToImageArr={handleAddToImageArr}
        handleRemoveFromImageArr={handleRemoveFromImageArr}
      />
      <BackToTopButton />
    </div>
  )
}

export default App
