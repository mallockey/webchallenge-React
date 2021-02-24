import React from 'react'

const Header = (props) => {
  function handleSearch(event) {
    let petItems = document.querySelectorAll('.petSubItem, .petSubItemSelected')
    let petItemsArr = Array.from(petItems)

    let searchResults = petItemsArr.filter((item) =>
      item.getAttribute('searchterm').toLowerCase().includes(event.target.value.toLowerCase()),
    )

    for (let i = 0; i < petItemsArr.length; i++) {
      if (searchResults.includes(petItemsArr[i])) {
        petItemsArr[i].style.display = 'flex'
      } else {
        petItemsArr[i].style.display = 'none'
      }
    }

    if (searchResults.length === 0) {
      props.setNoSearchResults(true)
    } else {
      props.setNoSearchResults(false)
    }

    if (searchResults.length < 3) {
      document.getElementById('backToTopContainerID').style.display = 'none'
    } else {
      document.getElementById('backToTopContainerID').style.display = 'flex'
    }
  }

  function get_url_extension(url) {
    //Get the file extension of the URL
    return url.split(/[#?]/)[0].split('.').pop().trim()
  }
  async function convertImageToBlob(url) {
    //Helper function to turn the image from the URL into a blob
    const imageData = await fetch(url)
    return await imageData.blob()
  }

  async function handleDownload() {
    props.imageDownloadArr.map(async (item) => {
      const anchor = document.createElement('a')
      const url = window.URL.createObjectURL(await convertImageToBlob(item.url))
      anchor.href = url
      anchor.download = `${item.title}.${get_url_extension(item.url)}`
      anchor.click()
    })
    let petSubItems = document.getElementsByClassName('petSubItemSelected') //Remove the selections after download
    let tmpArr = Array.from(petSubItems)
    for (let i = 0; i < tmpArr.length; i++) {
      tmpArr[i].className = 'petSubItem'
    }
    props.handleClearImageArr()
  }
  return (
    <div className="header">
      <img src="logo.png" id="headerLogo" alt="not found" />
      <div id="subHeader">
        <input type="text" onInput={handleSearch} placeholder="Search by pet name" />
        <button
          id="downloadButton"
          className={
            props.imageDownloadArr.length > 0 ? 'downloadButtonStyle' : 'downloadButtonDisabled'
          }
          type="button"
          onClick={handleDownload}
        >
          {props.imageDownloadArr.length > 0
            ? `Download ${props.imageDownloadArr.length} images`
            : 'Select images to download'}
        </button>
      </div>
    </div>
  )
}

export default Header
