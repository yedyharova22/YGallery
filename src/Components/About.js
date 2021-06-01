import { React, useState } from 'react';
import './Style/About.css';
import useWindowSize from './useWindowSize';
import img from './photos/Kitty.jpg';
import star from './photos/star.png';

const About = () => {
	const [speed, setSpeed] = useState(15);

	return (
		<div className="about">
			<img style={{ maxWidth: '90vh' }} src={img} alt="Kitty on the stairs" />

			
			<div className="description">
				<div className="text">
					<h6>Автор</h6>
					<p>Єдигарова Анастасія</p>
					<p>студентка групи КН-210</p>
					<p>НУ "Львівська Політехніка"</p>
					<p>18 років</p>
				</div>
				<img className="animation" style={{ animation: `spin ${speed}s linear infinite` }} src={star} />
			</div>
			<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2573.356206040062!2d24.012099815228293!3d49.83576417939523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473add7a31f0dccd%3A0x9869cc7025bc8e3f!2z0J3QsNGG0LjQvtC90LDQu9GM0L3Ri9C5INGD0L3QuNCy0LXRgNGB0LjRgtC10YIgwqvQm9GM0LLQvtCy0YHQutCw0Y8g0L_QvtC70LjRgtC10YXQvdC40LrQsMK7!5e0!3m2!1sru!2sua!4v1617826004895!5m2!1sru!2sua" width="100%" height="100%" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
			
		</div>
	);
}

export default About;