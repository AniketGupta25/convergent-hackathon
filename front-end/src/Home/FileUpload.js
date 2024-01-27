import React from 'react'
import './Home.css'
import { useState } from 'react'
import axios from 'axios'

function FileUpload() {

    const [ file, setFile ] = useState(null);
    const [ progress, setProgress ] = useState({ started: false, pc: 0 });
    const [ msg, setMsg ] = useState(null);

    function handleUpload() {
        if (!file) {
            console.log("No file selected");
            return;
        }

        const fd = new FormData();
        fd.append('file', file);

        setMsg("Uploading...");
        setProgress(prevState => {
            return {...prevState, started: true}
        });
        axios.post('http://localhost:5000/data', fd, {
            onUploadProgress: (ProgressEvent) => { setProgress(prevState => {
                return { ...prevState, pc: ProgressEvent.progress*100}
            }) },
            headers: {
                "Custom-Header": "value",
            }
        }).then(res => {
            setMsg("Upload successful")
            console.log(res.data);

        })
        .catch(err => {
            setMsg("Upload failed");
            console.error(err);
        });
    }

    return (
        <div className="demoItem">
            <input onChange={ (e) => { setFile(e.target.files[0]) } } type="file" className='file'/>
            <button onClick={ handleUpload }>Upload</button>

            { progress.started && <progress max="100" value={progress.pc}></progress> }
            { msg && <span>{msg}</span> }
        </div>
    )
}

export default FileUpload
