import React from 'react';

function Images(props){
	let imageGallery = props.atlImages.map((image, i)=> {
		return(
			<img className="atl-pic"src={image} key={i} alt=""/>
		)
	})
	console.log(imageGallery)
	return(
		<div>{imageGallery}</div>
	)
}

export default Images;