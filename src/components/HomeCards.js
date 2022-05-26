import cardImg from '../images/Screen Shot 2022-05-22 at 10.03.47 PM.jpg';
import customersImg from '../images/Screen Shot 2022-05-22 at 10.50.48 PM.jpg';


function HomeCards() {
    return (
        <>
        <div className = "contents">
            <div className = "servicesCard">
                <h2>Our Services</h2>
                <img src={cardImg} width="900" alt=""></img>
            </div>
        </div>
        <div className = "contents2">
            <div className = "customersCard">
                <h2>What our customers say</h2>
                <img src={customersImg} width="350" alt=""></img>
            </div>
        </div>
        </>
    );
}

export default HomeCards;