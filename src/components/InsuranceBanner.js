import {Link} from 'react-router-dom';

function InsuranceBanner() {
    return (
        <div className = "insuranceBanner">
            <div className = "insuranceBannerCard">
                <h2>Why choose Turners for your car insurance?</h2>
                <p>We’ve won the Reader’s Digest Trusted Brand award three years in a row! Which is better than winning it two years in a row.</p>
                <Link to='/insurance/details'>
                    <button type="button" className="quoteButton">Get a free quote</button>
                </Link><br></br>
                <a href="/" className="existingQuote">Already have a quote? View it online {">"}</a>
            </div>
        </div>
    );
}

export default InsuranceBanner;