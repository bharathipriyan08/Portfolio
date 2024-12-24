import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
// import { motion } from "framer-motion";
// import Background from './Background';
import Footer from './Footer';
import myImage from '../assets/myImage.png';
const Home = () => {

	const ref = useRef(0);
	const [text, setText] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			if (ref.current < name.length) {
				ref.current++;
				setText(() => text + name[ref.current - 1]);
			}
		}, 500);
		return () => clearInterval(interval);
	}, [text]);

	return (
		<div className='area relative z-0 bg-black w-screen h-screen'>
			<ul class="circles">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
				<div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
					<h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span></h1>
					<p className='mt-3 text-xl'>I love to learn and build scalable and optimized backend systems.</p>
				</div>  

				{/* Inserting the image */}
				<img
    src={myImage}
    alt='profile'
    className='absolute top-1/3 transform -translate-y-1/2 h-40 w-40 md:h-64 md:w-64 right-2 ' 
    style={{ zIndex: 10, opacity: 0.5 }}
/>


    
			</div>
			<Footer/>
		</div>	
	);
}

export default Home;