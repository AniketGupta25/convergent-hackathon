import React from 'react'
import './Home.css'
import { useState } from 'react'
import axios from 'axios'

function FileUpload() {
    uploadFile = async (e) => {
        const file = e.target.files[0];
    if (file != null) {
        const data = new FormData();
        data.append('file_from_react', file);

        let response = await fetch('/url_route',
        {
            method: 'post',
            body: data,
        }
        );
        let res = await response.json();
        if (res.status !== 1){
        alert('Error uploading file');
        }
    }
};

  return (
    <div className="demoItem">
        <input type="file" className='fileInput' onChange={this.uploadFile}/>
    </div>
  )
}

export default FileUpload
