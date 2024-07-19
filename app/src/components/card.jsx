import React from "react";

function Card({FullName, Rank, Link}) {
    return (
        <>
        <div className="participant">
            <img src="assets/user.png" alt="Александр Алехин"/>
            <div className="name">{FullName}</div>
            <div className="title">{Rank}</div>
            <a href={Link} className="button">Подробнее</a>
        </div>
        </>
    )
}

export default Card;