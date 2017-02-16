import React from 'react';

export default props => {
	const pup = props.selectedPup,
		voices = window.speechSynthesis.getVoices(),
		sayName = new SpeechSynthesisUtterance(`${pup.name}`);
	
	sayName.voice = voices[Math.floor(Math.random() * voices.length)];
	sayName.pitch = Math.random() * 2;
	sayName.rate = Math.random() * 10;
	
	return (
		<div className="container flexbox-container">
			<div className="jumbotron">
				{pup.name && window.speechSynthesis.speak(sayName)}
				<h2>{pup && pup.name}</h2>
				<div>
					<img src={pup && pup.image} />
				</div>
			</div>
		</div>
	);
};
