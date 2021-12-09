import React from 'react'
import { Link } from 'react-router-dom'

export default function Contacts() {
    return (
        <div>
            <div className="container-fluid rounded">
                <div className="row px-5">
                    <div className="col-sm-6">
                        <div>
                            <h3 className="text-white">Get a quote</h3>
                            <p className="text-secondary">Fill up the form and our Team will get back to you within in 24 hours</p>
                        </div>
                        <div className="links" id="bordering"> <a href="/" className="btn rounded text-white p-3"><i className="fa fa-phone icon text-primary pr-3"></i>+0123 4567 8910</a> <a href="/" className="btn rounded text-white p-3"><i className="fa fa-envelope icon text-primary pr-3"></i>hello@gmail.com</a> <a href="/" className="btn rounded text-white p-3"><i className="fa fa-map-marker icon text-primary pr-3"></i>102 Lorem 2714 Don</a> </div>
                        <div className="pt-lg-4 d-flex flex-row justify-content-start">
                            <div className="pad-icon"> <Link className="fa fa-facebook text-white" to="/home"></Link> </div>
                            <div className="pad-icon"> <Link className="fa fa-twitter text-white" to="/home"></Link> </div>
                            <div className="pad-icon"> <Link className="fa fa-instagram text-white" to="/home"></Link> </div>
                        </div>
                    </div>
                    <div className="col-sm-6 pad">
                        <form className="rounded msg-form">
                            <div className="form-group"> <label htmlFor="name" className="h6">Your Name</label>
                                <div className="input-group border rounded">
                                    <div className="input-group-addon px-2 pt-1">
                                        <p className="fa fa-user-o text-primary"></p>
                                    </div> <input type="text" className="form-control border-0" />
                                </div>
                            </div>
                            <div className="form-group"> <label htmlFor="name" className="h6">Email</label>
                                <div className="input-group border rounded">
                                    <div className="input-group-addon px-2 pt-1"> <i className="fa fa-envelope text-primary"></i> </div> <input type="text" className="form-control border-0"/>
                                </div>
                            </div>
                            <div className="form-group"> <label htmlFor="msg" className="h6">Message</label> <textarea name="message" id="msgus" cols="10" rows="5" className="form-control bg-light" placeholder="Message"></textarea> </div>
                            <div className="form-group d-flex justify-content-end"> <input type="submit" className="btn btn-primary text-white" value="send message"/> </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
