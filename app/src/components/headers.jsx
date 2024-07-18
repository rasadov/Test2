function HeaderBackground() {

    var headerImageBackgroundHeight = document.getElementById("header-image-background").clientHeight;
    headerImageBackgroundHeight = headerImageBackgroundHeight + "px";

    return (
        <>
        <img src="/src/assets/main.png" id="header-image-background"/>
        <div style={{height: headerImageBackgroundHeight}}>
            <div>
                <img className="logo" src="src/assets/logo.png" alt="" />
            </div>
            <div className="header-h1-div">
                <h1 className="header-h1">ПРЕВРАТИТЕ УЕЗДНЫЙ ГОРОД</h1>
                <h1 className="header-h1" style={{ paddingLeft: "15%"}}>В СТОЛИЦУ</h1>
                <h1 className="header-h1" style={{ paddingLeft: "7%"}}>ЗЕМНОГО ШАРА</h1>
            </div>
            <div className="header-p-div">
                <p className="header-p">Оплатите взнос на телеграммы для организации Международного васюкинского турнира по шахматам</p>
            </div>
            <div className="header-button-div">
                <button className="header-button header-button-1">Поддержать шахматную идею</button>
                <button className="header-button header-button-2">Подробнее<br></br> о турнире</button>
            </div>

        </div>
        <div className="running-line-container">
            <img src="/src/assets/running line.png" className="running-line" alt="Running Line" />
        </div>
        </>
    );
}

export default HeaderBackground;