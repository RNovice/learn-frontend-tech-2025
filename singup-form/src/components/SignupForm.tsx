import countries from "../data/countries";

const SignupForm = () => {
  return <form className="mx-auto d-flex flex-column gap-2 mb-2">
    <div className="row">
      <div className="form-group col">
        <label className="mb-1 required" htmlFor="username">Username</label>
        <input className="form-control" id="username" type="text" />
      </div>
      <div className="form-group col">
        <label className="mb-1 required" htmlFor="email">Email</label>
        <input className="form-control" id="email" type="email" />
      </div>
    </div>
    <div className="row align-items-end">
      <div className="form-group col">
        <label className="mb-1 required" htmlFor="password">Password</label>
        <input className="form-control" id="password" type="password" />
      </div>
      <div className="form-group col">
        <label className="mb-1 required" htmlFor="confirm-password">Confirm Password</label>
        <input className="form-control" id="confirm-password" type="password" />
      </div>
    </div>
    <div className="form-group">
      <label className="mb-1 required" htmlFor="full-name">Full Name</label>
      <input className="form-control" id="full-name" type="text" />
    </div>
    <div className="form-group">
      <label className="mb-1" htmlFor="phone-number">Phone Number</label>
      <input className="form-control" id="phone-number" type="tel" />
    </div>
    <div className="form-group">
      <label className="mb-1" htmlFor="gander">Gander</label>
      <select className="form-control" id="gander">
        <option></option>
        <option>male</option>
        <option>female</option>
        <option>other</option>
      </select>
    </div>
    <div className="form-group">
      <label className="mb-1 required" htmlFor="country">Country</label>
      <select className="form-control" id="country">
        <option></option>
        {countries.map((c, i) => <option key={'country-' + i}>{c}</option>)}
      </select>
    </div>
    <div className="form-group">
      <label className="mb-1" htmlFor="profile-url">Profile Picture URL</label>
      <input className="form-control" id="profile-url" type="url" />
    </div>
    <div className="form-group">
      <label className="mb-1" htmlFor="bio">Bio</label>
      <textarea className="form-control" id="bio" rows={3}></textarea>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="newsletter" />
      <label className="form-check-label" htmlFor="newsletter">
        Agree receive newsletter
      </label>
    </div>
    <div className="form-check">
      <input className="form-check-input" type="checkbox" value="" id="terms" />
      <label className="form-check-label" htmlFor="terms">
        I've read and agree with <span className="text-decoration-underline">Terms of Service</span> and <span className="text-decoration-underline">Privacy Policy</span>
      </label>
    </div>
    <button type="submit" className="btn btn-success" >Submit</button>
  </form>
}

export default SignupForm;