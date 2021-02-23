import React from 'react'

const Header = (props) => {
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
  }
  return (
    <div className="header">
      <img src="logo.png" id="headerLogo" alt="not found" />
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
  )
}

export default Header
