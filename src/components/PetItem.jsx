import React, { useRef } from 'react'

const PetItem = (props) => {
  const petSubItemRef = useRef()
  const petImageDivRef = useRef()
  const petImageTextRef = useRef()

  function handleMouseOver() {
    petImageDivRef.current.style.opacity = '.6'
    petImageTextRef.current.style.display = 'block'
  }
  function handleMouseLeave() {
    petImageDivRef.current.style.opacity = '1'
    petImageTextRef.current.style.display = 'none'
  }
  function handleClick() {
    if (petSubItemRef.current.className === 'petSubItemSelected') {
      petSubItemRef.current.className = 'petSubItem'
      petImageTextRef.current.innerText = 'Click to select'
      props.handleRemoveFromImageArr({
        title: props.pet.title,
        url: props.pet.url,
      })
    } else {
      petSubItemRef.current.className = 'petSubItemSelected'
      petImageTextRef.current.innerText = 'Click to unselect'
      props.handleAddToImageArr({
        title: props.pet.title,
        url: props.pet.url,
      })
    }
  }
  return (
    <div
      className="petSubItem"
      ref={petSubItemRef}
      searchterm={props.pet.title}
      onClick={handleClick}
    >
      <div
        ref={petImageDivRef}
        className="petImageDiv"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        style={{ backgroundImage: `url(${props.pet.url})` }}
      >
        <span ref={petImageTextRef} className="petImageText">
          Click to select
        </span>
      </div>
      <span className="titleSpan">{props.pet.title}</span>
      <span>{props.pet.description}</span>
    </div>
  )
}

export default PetItem
