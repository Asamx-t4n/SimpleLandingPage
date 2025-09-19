import React, { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import Card from "./Components/Card";
import { Data } from "./Components/Data";
import { CiSearch } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import "./App.css";
const App = () => {
	const [show, setShow] = useState(true);
	const [showAns, setShowAns] = useState(true);
	const [IsOpen, setIsOpen] = useState(true);
	let ScrollTime;
	useEffect(() => {
		const HandleScroll = () => {
			setShow(false);
			if (ScrollTime) {
				clearTimeout(ScrollTime);
			}
			ScrollTime = setTimeout(() => {
				setShow(true);
			}, 500);
		};
		window.addEventListener("scroll", HandleScroll);
		return () => {
			window.removeEventListener("scroll", HandleScroll);
			clearTimeout(ScrollTime);
		};
	}, []);
	const HandleMenu = () => {
		setIsOpen(!IsOpen);
	};
	const handleAns = (id) => {
		setShowAns(showAns === id ? null : id);
	};
	return (
		<div className="container-fluid App">
			<div className="row ">
				<nav className={`Navbar  ${show ? "Show" : "Hide"}`}>
					<img className="Logo-Img" src="/Logo.jpg" alt="logo" />
					<ul className={`NavMenu ${IsOpen ? "Desktop" : "Mobile"}`}>
						<li>
							<a href="">Home</a>
						</li>
						<li>
							<a href="">About</a>
						</li>
						<li>
							<a href="">Why We</a>
						</li>
						<li>
							<a href="">Collection</a>
						</li>
						<li>
							<a href="">Contact</a>
						</li>
					</ul>
					<IoMenuOutline onClick={HandleMenu} className="Menu-Icon" />
				</nav>
			</div>
			<div className="container-fluid Home">
				<div className="container-fluid Img-Part1">
					<div className="row">
						<div className="col-md-6 col-sm-6 Part-One">
							<img className="Home-Img" src="./Home1.jpg" alt="IMG1" />
							<p className="Img-Text1">Who are we?</p>
							<button className="Img-Button1">View</button>
						</div>
						<div className="col-md-6 col-sm-6 Part-Two">
							<img className="Home-Img" src="./Home2.jpg" alt="IMG2" />
							<p className="Img-Text2">What we Do?</p>
							<button className="Img-Button2">View</button>
						</div>
					</div>
				</div>
				<div className="container-fluid Img-Part2">
					<div className="row">
						<div className="col-md-6 col-sm-6 Part-Three ">
							<img className="Home-Img" src="./Home3.jpg" alt="IMG3" />
							<p className="Img-Text3">Why We?</p>
							<button className="Img-Button3">View</button>
						</div>
						<div className="col-md-6 col-sm-6 Part-Four">
							<img className="Home-Img" src="./Home4.jpg" alt="IMG4" />
							<p className="Img-Text4">How We Are Different?</p>
							<button className="Img-Button4">View</button>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid About">
				<div className="row">
					<div className="col-6">
						<img className="About-Img" src="/About.webp" alt="AboutImg" m />
					</div>
					<div className="col-md-6">
						<div className="About-Text-Div">
							<p className="About-Text">
								Established in 2015, our real estate branch has been helping
								families find their dream homes for over a decade. With offices
								across major cities, we specialize in buying, selling, and
								renting properties tailored to every lifestyle. Our mission is
								to provide trusted service, expert guidance, and a smooth
								experience in every step of your real estate journey.”
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid Collection">
				<div className="row Collection-Col">
					<div className="col-md-3 mt-1">
						<Card
							src="./Home1.jpg"
							Location="Birtamode"
							Description="A modern 3-bedroom family home located in the heart of Birtamode. Spacious living area, large windows for natural light, and a private garden make it perfect for comfortable living"
							Price="650000"
							FixPrice="230000"
						/>
					</div>
					<div className="col-md-3 mt-1">
						<Card
							src="./Home2.jpg"
							Location="Damak"
							Description="A modern 3-bedroom family home located in the heart of Birtamode. Spacious living area, large windows for natural light, and a private garden make it perfect for comfortable living"
							Price="350000"
							FixPrice="220000"
						/>
					</div>
					<div className="col-md-3 mt-1">
						<Card
							src="./Home3.jpg"
							Location="Durgapur"
							Description="A modern 3-bedroom family home located in the heart of Birtamode. Spacious living area, large windows for natural light, and a private garden make it perfect for comfortable living"
							Price="280000"
							FixPrice="210000"
						/>
					</div>
				</div>
			</div>
			<div>
				<div className="conatiner-fluid Why-We">
					<div className="row">
						<div className="col-md-12 ">
							{Data.map((item) => (
								<div key={item.id}>
									<p className="Question">{item.question}</p>
									<CiSearch
										className="Ans-Icon"
										onClick={() => handleAns(item.id)}
									/>
									{showAns === item.id && (
										<p className="Answer">{item.answer}</p>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid Footer">
				<div className="row">
					<div className="col-md-4">
						<div className="FooterLogo-Cap">
							<div className="Footer-Logo-div">
								<img src="Logo.jpg" className="Footer-Logo" alt="Logo" />
								<p className="Footer-Caption">Find your dream home with us</p>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<p className="Conatct-Us">Contact Us</p>
						<div className="Contact-Group">
							<CiFacebook className="Footer-Icon" />
							<FaYoutube className="Footer-Icon" />
							<FaTwitter className="Footer-Icon" />
						</div>
						<p className="Gmail">
							<SiGmail /> SamratBhattarai@gmail.com
						</p>
					</div>
					<div className="col-md-4">
						<div className="UseFull-Link">
							<p>Usefull Link</p>
							<div className="UseFull-Link-button">
								<p className="">Rent Home</p>
								<p className="Links">For Sale</p>
								<p className="Links">For Buy</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default App;
