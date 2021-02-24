import React from 'react'

const BackToTopContainer = () => {
  return (
    <div id="backToTopContainerID" className="backToTopContainer">
      <button
        type="button"
        className="backToTopButton"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
      </button>
    </div>
  )
}

export default BackToTopContainer
