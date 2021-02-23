import React, { useState, useEffect } from 'react'
import ErrorContainer from './ErrorContainer'
import PetItem from './PetItem'

const PetsContainer = (props) => {
  const [pets, setPets] = useState([])
  const [fetchError, showFetchError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      let data = null
      try {
        data = await fetch('https://eulerity-hackathon.appspot.com/pets')
      } catch (err) {
        console.error('There was an error fetching the API.')
        console.error(err)
        showFetchError(true)
        return
      }
      setPets(await data.json())
    }
    fetchData()
  }, [])

  return (
    <div id="petsContainer">
      {pets.length > 0 ? (
        pets.map((pet, index) => {
          return (
            <PetItem
              key={index}
              pet={pet}
              handleAddToImageArr={props.handleAddToImageArr}
              imageDownloadArr={props.imageDownloadArr}
              handleRemoveFromImageArr={props.handleRemoveFromImageArr}
            />
          )
        })
      ) : fetchError ? (
        <ErrorContainer />
      ) : (
        ''
      )}
    </div>
  )
}

export default PetsContainer
