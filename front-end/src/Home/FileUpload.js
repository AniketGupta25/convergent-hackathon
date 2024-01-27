import React from 'react'
import './Home.css'
import { useState } from 'react'
import axios from 'axios'

function FileUpload() {

    const [file, setFile ] = useState(null);

    function handleUpload() {
        if (!file) {
            console.log("No file selected");
            return;
        }

        const fd = new FormData();
        fd.append('file', file);

        axios.post('http://localhost:5000/url_route', fd, {
            
        }).then(res => {
            console.log(res.data)
        })
        .catch(err => console.error(err));
    }

    return (
        <div className="demoItem">
            <input onChange={ (e) => { setFile(e.target.files[0]) } } type="file" className='file'/>
            <button>Upload</button>
        </div>
    )
}

export default FileUpload
