import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBIcon } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="grey" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="3">
            <h5 className="title">Whiteline Social</h5>
            <hr className="hr-light my-4" />
              <ul className="list-inline list-unstyled">
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="linkedin-in" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="p-2 fa-lg w-ic">
                    <MDBIcon fab icon="instagram" />
                  </a>
                </li>
              </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Our Products</h5>
            <hr className="hr-light my-4" />
            <ul>
              <li className="list-unstyled">
                <a href="#!">Pen/Pen sets</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Pencils</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Customized stationery prducts</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Corporate Gifts</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Exercise Notebooks</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Cobra files</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Canvas</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Index File</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Our Brands</h5>
            <hr className="hr-light my-4" />
            <marquee behavior="scroll" direction="up" scrollamount="6">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Apsara</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Bindal</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Camlin</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Casio</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Century</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">FaberCastle</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Fevicryl</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Flair</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">NATRAJ</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">MONTEX</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">PILOT</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">WORLDONE</a>
              </li>
            </ul>
            </marquee>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Valued customers</h5>
            <hr className="hr-light my-4" />
            <ul>
              <li className="list-unstyled">
                <a href="#!">Whitehouse Consultancy</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Poorva Industries Pvt. Ltd</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Ladder Automation Solutions Pvt. Ltd</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Aircon Automation India Pvt. Ltd</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.whiteline.com"> Whiteline.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;