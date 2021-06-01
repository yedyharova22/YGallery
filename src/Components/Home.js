import React from 'react';
import "./Style/Home.css";
import img1 from "./photos/img1.jpg";
import img2 from "./photos/img2.jpg";
import img3 from "./photos/img3.jpg";

const Home = () => {
	return (
		<div className="Home">
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item active" data-interval="1000">
						<div className="d-block w-100" style={{ backgroundImage: `url(${img1})` }}></div>
					</div>
					<div className="carousel-item" data-interval="1000">
						<div className="d-block w-100" style={{ backgroundImage: `url(${img2})` }}></div>
					</div>
					<div className="carousel-item" data-interval="1000">
						<div className="d-block w-100" style={{ backgroundImage: `url(${img3})` }}></div>
					</div>

					<div className="carousel-caption d-md-block">
						<h5>YGALLERY</h5>
						<p style={{ color: "lightgray" }}>Шукайте українською тільки нові та стильні фотографії на будь-яку тему!</p>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
}

export default Home;