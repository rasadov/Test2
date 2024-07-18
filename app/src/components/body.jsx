import React from "react";

function About() {
    return (
        <>
            <div className="about">
                <p className="about-p">Чтобы поддержать Международный васюкинский турнир посетите лекцию на тему: <span style={{color: "red"}}>«Плодотворная дебютная идея»</span></p>
                <img src="./src/assets/group_photo.png" alt="" />
            </div>
            <div className="schedule">
                <img src="./src/assets/player.png" alt="" />
                <div>
                <p className="schedule-p">и Сеанс <span style={{color: "red"}}>одновременной игры в шахматы на 160 досках</span> гроссмейстера О. Бендера</p>
                <table>
                    <tr className="table-tr">
                        <th className="table-th-1">
                            <p>Место проведения:</p>
                        </th>
                        <th className="table-th-2">
                            <p>Клуб «Картонажник»</p>
                        </th>
                    </tr>
                    <tr className="table-tr">
                        <th className="table-th-1">
                            <p>Дата и время мероприятия:</p>
                        </th>
                        <th className="table-th-2">
                            <p>22 июня 1927 г. в 18:00</p>
                        </th>
                    </tr>
                    <tr className="table-tr">
                        <th className="table-th-1">
                            <p>Стоимость входных билетов:</p>
                        </th>
                        <th className="table-th-2">
                            <p>20 коп.</p>
                        </th>
                    </tr>
                    <tr className="table-tr">
                        <th className="table-th-1">
                            <p>Плата за игру:</p>
                        </th>
                        <th className="table-th-2">
                            <p>50 куп</p>
                        </th>
                    </tr>
                    <tr className="table-tr">
                        <th className="table-th-1" style={{borderBottom: "0"}}>
                            <p>Взнос на телеграммы:</p>
                        </th>
                        <th className="table-th-2" style={{borderBottom: "0"}}>
                            <p><span style={{textDecoration: 'line-through', textDecorationColor: 'red', textDecorationThickness: "1.6px"}} >100 руб.</span> 21 руб. 16 коп</p>
                        </th>
                    </tr>
                </table>
                <div style={{textAlign: "left", fontSize: "15px", margin: "4% auto"}}>
                    <p style={{color: "#3057A2"}}>По всем запросам обращаться в администрацию к К. Михельсону</p>
                </div>
                </div>
            </div>
        </>
    );
}

function Steps() {
    return (
        <>
        <div style={{width: "90%", margin: "2.5% auto"}}>
            <div className="steps-head">
                <h1>
                    Этапы преображения Васюков 
                    <span style={{position: 'relative', display: 'inline-block'}}>
                        Будущие источники обогащения васюкинцев
                    </span>
                </h1>
            </div>
        </div>
        <div className="step-div-main" style={{display: "flex", margin: "auto"}}>
            <div style={{width: "33%" }}>
                <div className="step" style={{height: "20.3%", marginBottom: "2%"}}>
                    <p><span className="step-span" style={{width: "30px"}}>1</span><br/> Строительство железнодорожной магистрали Москва-Васюки</p>
                </div>
                <div className="step" style={{height: "20.3%", marginBottom: "5.5%"}}>
                    <p><span className="step-span" style={{width: "20px"}}>4</span><br/> Строительство дворца для турнира</p>
                </div>
                <div className="step" style={{height: "20.3%"}}>
                    <p><span className="step-span" style={{width: "50px"}}>6</span><br/> Постройка сверхмощной радиостанции для передачи всему миру сенсационных результатов</p>
                </div>
            </div>
            <div style={{width: "66%"}}>
                <div style={{display: "flex", height: "49.2%"}}>
                    <div>
                        <div className="step" style={{height: "41.5%"}}>
                            <p style={{paddingTop: "8px"}}><span className="step-span" style={{width: "50px"}}>2</span><br/><br/><br/> Открытие фешенебельной гостиницы «Проходная пешка» и других небоскрёбов</p>
                        </div>
                        <div className="step" style={{height: "41.5%"}}>
                            <p><span className="step-span" style={{width: "35px"}}>5</span><br/> Размещение гаражей для гостевого автотранспорта</p>
                        </div>
                    </div>
                    <div>
                        <div className="step" style={{height: "88%"}}>
                            <div style={{position: "absolute", height: "500px"}}>
                                <img src="src/assets/plane.png" alt="" style={{paddingLeft: "40px", paddingTop: "25%"}} />
                            </div>
                            <p><span className="step-span" style={{width: "50px"}}>3</span><br/>Поднятие сельского хозяйства в радиусе на тысячу километров: производство овощей, фруктов, икры, шоколадных конфет</p>
                            </div>
                    </div>
                </div>
                <div>
                    <div className="step" style={{width: "97%", marginLeft: "1.1%", height: "70%"}}>
                        <p style={{paddingTop: "1%", width: "50%", paddingBottom: "3%", marginBottom: "23%", marginTop: "0%", paddingLeft: "2.5%"}}>
                            <span  className="step-span" style={{width:"75px"}}>7</span><br/> Создание аэропорта «Большие Васюки» с регулярным отправлением почтовых самолётов и дирижаблей во все концы света, включая Лос-Анжелос и Мельбурн</p>
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export { About, Steps };