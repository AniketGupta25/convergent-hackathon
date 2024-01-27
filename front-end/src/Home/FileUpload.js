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
        axios.post('http://httpbin.org/post', fd, {
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
            <input onChange={ (e) => { setFile(e.target.files[0]) } } type="file" className="inputFile"/>
            <button className='button' onClick={ handleUpload }>Upload</button>
            { msg && <div className='budget'>
                <div className="bruh">
                <div className="first">
 'Alcohol & Bars': 33.66586296654688<br></br>
 'Auto Insurance': 75.0<br></br>
 'Coffee Shops': 4.641419545898046<br></br>
 'Credit Card Payment': 1847.741952275202<br></br>
 'Electronics & Software': 136.4638531065055<br></br>
 'Entertainment': 3.576245161103093e-30<br></br>
 'Fast Food': 42.40691587409889<br></br>
 'Food & Dining': 12.251215535761677<br></br>
 'Gas & Fuel': 70.00951176886291<br></br>
 'Groceries': 159.59463621595447<br></br>
 'Haircut': 19.318248742286254<br></br>
                </div>
                <div className="second">
 'Home Improvement': 35.57106664550227<br></br>
 'Internet': 75.00559193380653<br></br>
 'Mobile Phone': 65.44530937577115<br></br>
 'Mortgage & Rent': 1100.0125927489012<br></br>
 'Movies & DVDs': 0.06211259073025282<br></br>
 'Music': 10.69<br></br>
 'Paycheck': 4491.402700693033<br></br>
 'Restaurants': 41.902507208981994<br></br>
 'Shopping': 72.98056004644613<br></br>
 'Television': 11.760132470520304<br></br>
 'Utilities': 132.6356600792659<br></br>
                </div>
                </div>
                <div className="streak">
                    Streak: 🔥🔥🔥🔥🔥
                </div>
                    </div>}
        </div>
    )
}

export default FileUpload
