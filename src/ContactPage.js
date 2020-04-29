import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
  return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      <p className="text-center w-responsive mx-auto pb-5">
      Getting a criteria of good customers rather than making numbers of customers.
      Write to us for any enquiries.
      </p>
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard color="black">
            <MDBCardBody>
              <div className="form-header accent-1">
                <h3 className="mt-2 dark-grey-text">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="mobile"
                  label="We'll call you"
                  iconClass="grey-text"
                  type="text"
                  id="form-phone"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  label="Requirement description"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="grey">Submit</MDBBtn>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
              
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.6585816585075!2d77.01532231425497!3d28.45970669863443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d182ebe0a39b9%3A0x6cd98f336634e324!2s588%2C%209%2C%20Madanpuri%20Rd%2C%20Madanpuri%2C%20Sector%207%2C%20Gurugram%2C%20Haryana%20122006!5e0!3m2!1sen!2sin!4v1587829901887!5m2!1sen!2sin"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">

            <MDBCol md="4">
            <MDBIcon icon="map-marker-alt" size="2x" className="blue-text" />
              <p>588/9, Madan Puri, Gurgaon-122001</p>
              <p className="mb-md-0">India</p>
            </MDBCol>
            <MDBCol md="4">

                <MDBIcon icon="phone" size="2x" className="blue-text mt-4" />
              <p>+ 91 97 111 29 118</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
                <MDBIcon icon="envelope" size="2x" className="blue-text mt-4" />
              <p>Whiteline.customercare@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default ContactPage;