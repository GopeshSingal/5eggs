import React, {useRef} from "react";
import {PNG} from "pngjs";

function upload_png(uri) {
    // format the image data
    const image = {
        uri: uri,
        type: 'image/png',
        name: 'daily_upload' + '-' + Date.now() + '.png'
    }

    // Instantiate a FormData() object
    const imgBody = new FormData();
    // append the image to the object with the title 'image'
    body.append('image', image);
    const url = "https://storage.googleapis.com/upload/storage/v1/b/canvas-5crambled/o"
    // Perform the request. Note the content type - very important
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
        },
        body: imgBody
    }).then(res => res.json()).then(results => {
        // Just me assigning the image url to be seen in the view
        const imageUrl = imageUrl
        const images = this.state.images;
        this.setState({source: imageUrl});
    }).catch(error => {
        console.error(error);
    });
}