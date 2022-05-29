import cardImg from '../images/ourServices.jpg';
import customersImg from '../images/reviews.jpg';


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