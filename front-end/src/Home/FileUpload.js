import React from 'react'
import './Home.css'
import { useState } from 'react'

function FileUpload() {
    const [file, setFile] = useState()

    function handleFile(event) {
        setFile(event.target.files[0])
        console.log(event.target.files[0])
    }
    function handleUpload() {
        const formData = new FormData()
        formData.append('file', file)
        fetch(
            'url',
            {
                method: "POST",
                body: formData
            }
        ).then((response) => response.json()).then(
            (result) => {
                console.log('success', result)
            }
        ).catch(error => {
            console.error("Error:", error)
        })

    }

  return (
    <div className="demoItem">
        <form onSubmit={handleUpload}>
            <input type="file" className='fileInput' onChange={handleFile}/>
            <button type="submit" className='submit'>Upload</button>
        </form>
    </div>
  )
}

export default FileUpload
