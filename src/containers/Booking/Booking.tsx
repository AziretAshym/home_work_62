import "./Booking.css";
const Booking = () => {
  return (
    <>
      <div className="container">
        <h2>To make a reservation, fill out the form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required></input>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required></input>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Booking;