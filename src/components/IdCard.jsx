import React from "react";

const IdCard = (props) => {
	console.log(props);
	return (
		<div className="card">
			<div className="avatar">
				<img src={props.picture} alt={props.name} />
			</div>
			<div className="infos">
			<p><b>First Name:</b> {props.firstName}</p>
			<p><b>Last Name:</b> {props.lastName}</p>
            <p><b>Gender:</b> {props.gender}</p>
            <p><b>Height:</b> {props.height}</p>
            <p><b>Birth:</b> {props.birth.toDateString()}</p>
		</div>
		</div>
	);
};

export default IdCard;