import everydayImg from '../images/everydayPlus.jpg';
import thirdPartyTheftImg from '../images/thirdPartyTheft.jpg';
import thirdPartyPropertyImg from '../images/thirdPartyProperty.jpg';

import {Link} from 'react-router-dom';


function InsuranceCards() {
    return (
        <>
        <div className = "insuranceContents">
            <div className = "insuranceCards">
                <div className = "insuranceCard">
                    <h2>Comprehensive Everyday Plus</h2>
                    <img src={everydayImg} width="300" alt=""></img><br></br>
                    <a className="documentLink" href="https://content.tgstatic.co.nz/webassets/globalassets/terms-and-conditions/turners-car-everyday-plus-vcpcep-policy-book-062018-used26032021-current.pdf" target="_blank" rel="noreferrer">View Policy Document</a><br></br>
                    <Link to='/insurance/details'>
                        <button type="button" className="selectQuoteButton">Select</button>
                    </Link>
                </div>
                <div className = "insuranceCard">
                    <h2>Third Party Fire {"&"} Theft</h2>
                    <img src={thirdPartyTheftImg} width="300" alt=""></img><br></br>
                    <a href="https://content.tgstatic.co.nz/webassets/globalassets/terms-and-conditions/turners-car-tpft-vcpctpft-policy-book-062018-used26032021-current.pdf" className="documentLink">View Policy Document</a><br></br>
                    <Link to='/insurance/details'>
                        <button type="button" className="selectQuoteButton">Select</button>
                    </Link>
                </div>
                <div className = "insuranceCard">
                    <h2>Third Party Property Damage</h2>
                    <img src={thirdPartyPropertyImg} width="300" alt=""></img><br></br>
                    <a href="https://content.tgstatic.co.nz/webassets/globalassets/terms-and-conditions/turners-car-tppd-vcpctp-policy-book-062018-used26032021-current.pdf" className="documentLink">View Policy Document</a><br></br>
                    <Link to='/insurance/details'>
                        <button type="button" className="selectQuoteButton">Select</button>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default InsuranceCards;