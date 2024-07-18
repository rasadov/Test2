import React from "react";

function Card({FullName, Rank, Link}) {
    return (
        <>
        <div class="participant">
            <img src="src/assets/user.png" alt="Александр Алехин"/>
            <div class="name">{FullName}</div>
            <div class="title">{Rank}</div>
            <a href={Link} class="button">Подробнее</a>
        </div>
        </>
    )
}

export default Card;