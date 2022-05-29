import rectangle from '../images/greyBar.jpg';

function DetailsBanner() {
    return (
        <>
        <div className = "detailsBannerContents">
            <div className = "detailsBannerCards">
                <div className = "detailsBannerCard">
                    <h1 id = "yourDetails">1. Your Details</h1>
                </div>
                <div className = "dash">
                    <img src={rectangle} width="100" alt=""></img>
                </div>
                <div className = "detailsBannerCard">
                    <h2>2. Choose your policy</h2>
                </div>
                <div className = "dash">
                    <img src={rectangle} width="100" alt=""></img>
                </div>
                <div className = "detailsBannerCard">
                    <h2>3. Review</h2>
                </div>
            </div>
        </div>
        </>
    );
}

export default DetailsBanner;