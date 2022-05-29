import facebook from '../images/facebook.jpg';
import twitter from '../images/twitter.jpg';
import instagram from '../images/instagram.jpg';

function Footer() {
    return (
        <>
        <div className = "footerContents">
            <div className = "footerCards">
                <div className = "footerCard">
                    <h2>Buy</h2><br></br><br></br><br></br><br></br>
                    <a href="/" className="footerLink">Auctions</a><br></br>
                    <a href="/" className="footerLink">Buy Now</a><br></br>
                    <a href="/" className="footerLink">Subscriptions</a>
                </div>
                <div className = "footerCard">
                    <h2>Sell</h2><br></br><br></br><br></br><br></br>
                    <a href="/" className="footerLink">Auctions</a><br></br>
                    <a href="/" className="footerLink">Cash Now</a><br></br>
                    <a href="/" className="footerLink">Trade In</a>
                </div>
                <div className = "footerCard">
                    <h2>Insurance</h2><br></br><br></br><br></br><br></br>
                    <a href="/" className="footerLink">Company Insurance</a><br></br>
                    <a href="/" className="footerLink">Get a Quote</a><br></br>
                    <a href="/" className="footerLink">Mechanical Breakdown Insurance</a>
                </div>
                <div className = "footerCard">
                    <h2>Finance</h2><br></br><br></br><br></br><br></br>
                    <a href="/" className="footerLink">Personal Finance</a><br></br>
                    <a href="/" className="footerLink">Business Finance</a>
                </div>
                <div className = "footerCard">
                    <h2>Help</h2><br></br><br></br><br></br><br></br>
                    <a href="/" className="footerLink">Buying FAQs</a><br></br>
                    <a href="/" className="footerLink">Selling FAQs</a><br></br>
                    <a href="/" className="footerLink">Insurance FAQs</a><br></br>
                    <a href="/" className="footerLink">Finance FAQs</a>
                </div>
                <div className = "footerCard">
                    <h2>About</h2><br></br><br></br><br></br><br></br>
                    <a href="/" className="footerLink">About Turners</a><br></br>
                    <a href="/" className="footerLink">Careers</a><br></br>
                    <a href="/" className="footerLink">The Good Oil Blog</a><br></br>
                    <a href="/" className="footerLink">Sponsorship</a><br></br><br></br><br></br><br></br>
                    <a href="https://www.facebook.com/turnersNZ/" className="facebookLink" target="_blank" rel="noreferrer"><img src={facebook} width="33" alt=""></img></a>
                    <a href="https://twitter.com/turnersgroupnz/" className="twitterInstagramLinks" target="_blank" rel="noreferrer"><img src={twitter} width="33" alt=""></img></a>
                    <a href="https://www.instagram.com/turners_cars/" className="twitterInstagramLinks" target="_blank" rel="noreferrer"><img src={instagram} width="33" alt=""></img></a>
                </div>
            </div>
        </div>
        </>
    );
}

export default Footer;