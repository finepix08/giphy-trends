import React from 'react';

const Gif = ({url, title}) => {
  return (
    <div className="block">
      <img src={url} alt={title}/>
    </div>
  )
}

export default Gif;