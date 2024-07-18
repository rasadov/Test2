import React, { useState } from "react";
import Card from "./card";

function Players() {
    const playersPerPage = 3;
    const [currentPage, setCurrentPage] = useState(0);

    const players = [
        { "FullName": "Хозе-Рауль Капабланка", "Rank": "Чемпион мира по шахматам", "Link": "#" },
        { "FullName": "Эммануил Ласкер", "Rank": "Чемпион мира по шахматам", "Link": "#" },
        { "FullName": "Александр Алехин", "Rank": "Чемпион мира по шахматам", "Link": "#" },
        { "FullName": "Рауф Асадов", "Rank": "Чемпион мира по шахматам", "Link": "#" },
        { "FullName": "Эммануил Ласкер", "Rank": "Чемпион мира по шахматам", "Link": "#" },
        { "FullName": "Александр Алехин", "Rank": "Чемпион мира по шахматам", "Link": "#" }
    ];

    const totalPages = Math.ceil(players.length / playersPerPage);

    const goToNextPage = () => {
        setCurrentPage((currentPage) => Math.min(currentPage + 1, totalPages - 1));
    };

    const goToPreviousPage = () => {
        setCurrentPage((currentPage) => Math.max(currentPage - 1, 0));
    };

    const currentPlayers = players.slice(currentPage * playersPerPage, (currentPage + 1) * playersPerPage);

    return (
        <>  
        <div style={{marginBottom: "10%"}}>
        <div className="players-head">
            <div className="players-head-div1" style={{paddingLeft: "4%", width: "90%"}}>
                <div>
                    <h2 className="nav-h2">Участники Турнира</h2>
                </div>
            </div>
            <div className="navigation" style={{paddingLeft: "25%"}}>
                <button class="nav-button" onClick={goToPreviousPage} disabled={currentPage === 0}>&lt;</button>
                <span class="nav-page">{currentPage + 1} из {totalPages}</span>
                <button class="nav-button" onClick={goToNextPage} disabled={currentPage >= totalPages - 1}>&gt;</button>
            </div>
        </div>
        <div className="participants">
            {currentPlayers.map((player) => (
                <Card key={player.FullName + player.Rank} FullName={player.FullName} Rank={player.Rank} Link={player.Link} />
            ))}
        </div>
        </div>
        </>
    );
}

export default Players;