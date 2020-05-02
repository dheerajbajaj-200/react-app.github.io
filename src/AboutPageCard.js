import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdbreact';

const AboutPageCard = () => {
  return (
    <div id="about-us">
    <MDBRow>
      <MDBCol>
        <MDBCard
          className='card-image'
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
          }}
        >
          <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
            <div>
              <h5 className='pink-text'>
                <MDBIcon icon='pencil-ruler' /> About Whiteline
              </h5>
              <MDBCardTitle tag='h3' className='pt-2'>
                <strong>Moving forward with Patience</strong>
              </MDBCardTitle>
              <p>
              Whiteline is an Indian brand of student stationery products. Whiteline was launched in 2019 with the standard stationery category. Subsequently, Whiteline added manufacturing of its own product of Notebooks, long books, drawing books, Spiral Notebooks, Customised stationery and corporate gifting items. We offers Wide range of stationery products in multiple brands
              </p>
              {/* <MDBBtn color='pink'>
                <MDBIcon icon='clone left' /> View project
              </MDBBtn> */}
            </div>
          </div>
        </MDBCard>
      </MDBCol>

    </MDBRow>
    </div>
  )
}

export default AboutPageCard;