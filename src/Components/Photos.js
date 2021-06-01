import React, { useState } from 'react';
import useWindowSize from './useWindowSize';
import './Style/Gallery.css';

const Photo = ({ id, photographer, photographer_url, img, url, width, height }) => {
    const style = {
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        minWidth: '200px',
        minHeight: '200px',
        width: '100%',
        height: '100%',
        maxWidth: '100vh',
        gridColumn: `span ${useWindowSize.width < 500 ? '1' : ((width / height >= 1.5) ? '2' : '1')}`,
        gridRow: `span ${((height / width >= 1.5) ? '2' : '1')}`,
        cursor: "pointer"
    };
    return (
        <div id={id} className="photo" style={style}>
            <div className="overlay" onClick={()=> window.open(url, "_blank")}>
                <a href={photographer_url} target="_blank" className="url">{photographer}</a>
                <p className="url">Click to download</p>
            </div>
        </div>
    );
}

export default Photo;



