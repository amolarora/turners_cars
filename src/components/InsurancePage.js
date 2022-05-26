import InsuranceBanner from './InsuranceBanner.js';
import InsuranceCards from './InsuranceCards.js';

function InsurancePage() {
    return (
        <div className="webpage">      
            <InsuranceBanner />
            <InsuranceCards />
        </div>
    );
}

export default InsurancePage;