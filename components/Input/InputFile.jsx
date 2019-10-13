import React, { useState } from 'react'
import Files from 'react-files'

function InputFile(props) {
  const [image, setImage] = useState()
  const onFilesChange = files => {
    const image = files[0].preview.url
    setImage(image)
  }
  const onFilesError = (error, file) => {
    console.log('error code ' + error.code + ': ' + error.message)
  }
  const handleDelete = e => {
    setImage(null)
    e.stopPropagation()
  }

  return (
    <>
      <div className="files">
        <Files
          className="files-dropzone"
          onChange={onFilesChange}
          onError={onFilesError}
          accepts={['image/*']}
          multiple={false}
          maxFileSize={10000000}
          minFileSize={0}
          clickable
        >
          {image ? (
            <img src={image} />
          ) : (
            'Drop files here or click to upload'
          )}
          {image && (
            <button className="delete-image" onClick={handleDelete}>
              eliminar
            </button>
          )}
        </Files>
      </div>
      <style jsx>{`
        .files {
          padding: 1rem;
          border: 1px solid;
          position: relative;
        }
        .delete-image {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }
      `}</style>
      <style jsx global>{`
        .files-dropzone {
          font-size: 0.6rem;
        }
      `}</style>
    </>
  )
}

export default InputFile
