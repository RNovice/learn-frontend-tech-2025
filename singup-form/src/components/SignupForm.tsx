import countries from "../data/countries";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "../schemas/signupSchemas";
import type { SignupType } from "../schemas/signupSchemas";
import type { CountryType } from "../data/countries";

const SignupForm = () => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<SignupType>({
    resolver: zodResolver(signupSchema)
  });

  const onSubmit = (data: SignupType) => {
    console.log(data);
    reset();
  };

  return <form className="mx-auto d-flex flex-column gap-2 mb-2" onSubmit={handleSubmit(onSubmit)}>
    <div className="row">
      <div className="form-group col">
        <label className="mb-1 required" htmlFor="username">Username</label>
        <input {...register("username")} className="form-control" id="username" type="text" />
        {errors.username && <span className="text-danger">{errors.username.message}</span>}
      </div>
      <div className="form-group col">
        <label className="mb-1 required" htmlFor="email">Email</label>
        <input {...register("email")} className="form-control" id="email" type="email" />
        {errors.email && <span className="text-danger">{errors.email.message}</span>}
      </div>
    </div>
    <div className="row">
      <div className="form-group col">
        <label className="mb-1 required" htmlFor="password">Password</label>
        <input {...register("password")} className="form-control" id="password" type="password" />
        {errors.password && <span className="text-danger">{errors.password.message}</span>}
      </div>
      <div className="form-group col">
        <label className="mb-1 required" htmlFor="confirm-password">Confirm Password</label>
        <input {...register("confirmPassword")} className="form-control" id="confirm-password" type="password" />
        {errors.confirmPassword && <span className="text-danger">{errors.confirmPassword.message}</span>}
      </div>
    </div>
    <div className="row">
      <div className="form-group col">
        <label className="mb-1 required" htmlFor="full-name">Full Name</label>
        <input {...register("fullName")} className="form-control" id="full-name" type="text" />
        {errors.fullName && <span className="text-danger">{errors.fullName.message}</span>}
      </div>
      <div className="form-group col">
        <label className="mb-1" htmlFor="phone-number">Phone Number</label>
        <input {...register("phoneNumber")} className="form-control" id="phone-number" type="tel" />
        {errors.phoneNumber && <span className="text-danger">{errors.phoneNumber.message}</span>}
      </div>
    </div>
    <div className="form-group">
      <label className="mb-1 required" htmlFor="birthdate">Date of Birth</label>
      <input {...register("dateOfBirth")} className="form-control" id="birthdate" type="date" />
      {errors.dateOfBirth && <span className="text-danger">{errors.dateOfBirth.message}</span>}
    </div>
    <div className="form-group">
      <label className="mb-1" htmlFor="gender">Gender</label>
      <select {...register("gender")} className="form-control" id="gender">
        <option></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
      {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
    </div>
    <div className="form-group">
      <label className="mb-1 required" htmlFor="country">Country</label>
      <select {...register("country")} className="form-control" id="country">
        <option></option>
        <option value={"Not exist country"}>Not exist country</option>
        {(countries as readonly CountryType[]).map((c, i) => <option key={'country-' + i} value={c}>{c}</option>)}
      </select>
      {errors.country && <span className="text-danger">{errors.country.message}</span>}
    </div>
    <div className="form-group">
      <label className="mb-1" htmlFor="profile-url">Profile Picture URL</label>
      <input {...register("profileUrl")} className="form-control" id="profile-url" type="url" />
      {errors.profileUrl && <span className="text-danger">{errors.profileUrl.message}</span>}
    </div>
    <div className="form-group">
      <label className="mb-1" htmlFor="bio">Bio</label>
      <textarea {...register("bio")} className="form-control" id="bio" rows={3}></textarea>
      {errors.bio && <span className="text-danger">{errors.bio.message}</span>}
    </div>
    <div className="form-check">
      <input {...register("newsletter")} className="form-check-input" type="checkbox" id="newsletter" />
      <label className="form-check-label" htmlFor="newsletter">
        Agree receive newsletter
      </label>
    </div>
    <div className="form-check">
      <input {...register("terms")} className="form-check-input" type="checkbox" id="terms" />
      <label className="form-check-label" htmlFor="terms">
        I've read and agree with <span className="text-decoration-underline">Terms of Service</span> and <span className="text-decoration-underline">Privacy Policy</span>
      </label>
      {errors.terms && <p className="text-danger">{errors.terms.message}</p>}
    </div>
    <button type="submit" className="btn btn-success">Submit</button>
  </form>
}

export default SignupForm;