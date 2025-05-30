import React, { useEffect, useState } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import login from '../../../assets/img/hostel/login.png';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const Register = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    role: '',
    name: '',
    gender: '',
    email: '',
    dob: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log(result);
      alert("Student registered successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <Header />
      <br /><br /><br /><br />
      <div className="booking_section pb-115">
        <div className="gi-register-wrapper container">
          <div className="bg_basic_details position-relative p-2">
            <div className="bg_transparent p-2">
              <div className="gi-login-box bg-transparent p-0">
                <div className="multisteps-form__form">
                  <div className="multisteps-form__paneldd">
                    <div className="row">
                      <div className="col-md-6 col-lg-5">
                        <img src={login} className="img-fluid" alt="" />
                      </div>
                      <div className="col-md-6 col-lg-7 my-auto">
                        <div className="multisteps-form__contents p-5">
                          <h2>Register</h2>
                          <h6>Sign up now to become a member</h6>
                          <div className="formgrid mt-5">
                            <div className="row">
                              <div className="col-md-12 mb-3">
                                <label>User Roles</label>
                                <Form.Select name="role" onChange={handleChange}>
                                  <option value="">-- Select --</option>
                                  <option>Admin</option>
                                  <option>Warden</option>
                                  <option>Transport</option>
                                  <option>Student</option>
                                  <option>Parent</option>
                                </Form.Select>
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Full Name</label>
                                <input name="name" type="text" className="form-control" placeholder="User Name" onChange={handleChange} />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Gender</label>
                                <Form.Select name="gender" onChange={handleChange}>
                                  <option value="">-- Select --</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                </Form.Select>
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Email ID</label>
                                <input name="email" type="email" className="form-control" placeholder="Email ID" onChange={handleChange} />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Date of Birth</label>
                                <input name="dob" type="date" className="form-control" onChange={handleChange} />
                              </div>
                              <div className="col-md-6 mb-3">
                                <label>Phone Number</label>
                                <input name="phone" type="text" className="form-control" placeholder="Phone Number" onChange={handleChange} />
                              </div>
                              <div className="col-md-12 mt-3">
                                <button className="btn btn-danger w-100 text-white" onClick={handleSubmit}>Register</button>
                              </div>
                            </div>
                          </div>
                          <p className="text-center text-secondary">Already a Member? <Link to="/login" className="fw-bold text-danger">Login Here</Link></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
