
function DetailsCards() {
    return (
        <>
        <div className = "detailsContents">
            <div className = "detailsCards">
                <div className = "detailsCard">
                    <h2>Your Car</h2>
                    <form>
                        <span>
                            <label htmlFor="registrationNum">Car registration number</label>
                            <input type="text" className="registrationNum" name="registrationNum" placeholder="e.g. ABC123"></input><br></br>
                        </span>
                        
                        <span>
                            <label htmlFor="business_yes_no_radio">Do you use your car for business?</label>
                            <input type="button" id="business_no" name="business_no" value="No"></input>
                            <input type="button" id="business_yes" name="business_yes" value="Yes"></input><br></br>
                        </span>
                        
                        <span>
                        <label htmlFor="address">What address is your car usualy parked?</label>
                        <input type="text" className="address" name="address" placeholder="Start typing..."></input><br></br>
                        </span>
                        
                        <span>
                            <label htmlFor="date">When do you want your policy to start?</label>
                            <input type="date" className="date" name="date"></input>
                        </span>
                    </form>
                </div>
                <div className = "detailsCard2">
                    <h2>Your Details</h2>
                    <form>
                        <span>
                            <label htmlFor="DOB">Date of birth</label>
                            <input type="date" className="DOB" name="DOB" placeholder="Select date"></input><br></br>
                        </span>
                        
                        <span>
                            <label htmlFor="gender">Gender</label>
                            <select className="gender" name="gender">
                                <option value="" disabled selected hidden>Select gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select><br></br>
                        </span>

                        <span>
                            <label htmlFor="breakdown_yes_no_radio">Do you use your car for business?</label>
                            <input type="button" id="breakdown_no" name="breakdown_no" value="No"></input>
                            <input type="button" id="breakdown_yes" name="breakdown_yes" value="Yes"></input><br></br>
                        </span>

                        <span>
                            <label htmlFor="licence">What licence do you hold?</label>
                            <select className="licence" name="licence">
                                <option value="" disabled selected hidden>Select licence</option>
                                <option value="Learners">Learners</option>
                                <option value="Restricted">Restricted</option>
                                <option value="Full">Full</option>
                            </select><br></br>
                        </span>
                        
                        <span>
                            <label htmlFor="age">How old were you when you got your first drivers licence?<br></br>(e.g. learners licence)?</label>
                            <input type="text" className="age" name="age" placeholder="Select age"></input><br></br>
                        </span>

                        <span>
                            <label htmlFor="accients_yes_no_radio">In the last 5 years have you had any accidents or losses<br></br>(whether or not you were at fault) where a car was damaged<br></br>or stolen?</label>
                            <input type="button" id="accients_no" name="accients_no" value="No"></input>
                            <input type="button" id="accients_yes" name="accients_yes" value="Yes"></input><br></br>
                        </span>
                    </form>

                    <button type="button" className="addDriverButton">Add another driver</button>
                </div>
            </div>
            <button type="button" className="saveDraftButton">Save Draft</button>
            <button type="button" className="continueQuoteButton">Continue to Quote</button>
        </div>
        </>
    );
}

export default DetailsCards;