import React from "react";

function Footer() {
    return (
        <>
        <footer>
            <div className="running-line-container">
                <img src="/src/assets/running line.png" className="running-line" alt="Running Line" />
            </div>
                <div class="footer-text">
                    <p style={{margin: "0", padding: "30px"}}>Все персонажи, события и цитаты являются вымышленными и не принадлежат создателям сайта. С подробностями можно познакомиться в главе XXXIV романа Ильи Ильфа и Евгения Петрова «Двенадцать стульев».</p>
                </div>
        </footer>
        </>
    )
}

export default Footer;