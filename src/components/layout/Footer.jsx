import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div>
            <MDBFooter className='text-white text-center text-lg-left' style={{backgroundColor: "#B4AC9D"}}>
            <MDBContainer className='p-4 footer-main-body'>
                <MDBRow>
                <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase text-black'>About</h5>

                    <ul className='list-unstyled mb-0'>
                    <li>
                        <a href='#!' className='text-white'>
                        Contact Us
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        About Us
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Careers
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Press
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Corporate Information
                        </a>
                    </li>
                    </ul>
                </MDBCol>

                <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase text-black'>Help</h5>

                    <ul className='list-unstyled mb-0'>
                    <li>
                        <a href='#!' className='text-white'>
                        Payments
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Shipping
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Cancellation and Returns
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        FAQ
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Report infringement
                        </a>
                    </li>
                    </ul>
                </MDBCol>

                <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase text-black'>Policy</h5>

                    <ul className='list-unstyled mb-0'>
                    <li>
                        <a href='#!' className='text-white'>
                        Return Policy
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Terms of use
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Security
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Privacy
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        ERP Compliance
                        </a>
                    </li>
                    </ul>
                </MDBCol>

                

                
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase text-black'>Registered Office Address</h5>

                    <p>
                    E-Baazar <br/>
                    Internet Private Limited,
                    Buildings Alyssa, Begonia &
                    Clove Embassy Tech Village,
                    Outer Ring Road, Devarabeesanahalli Village,
                    Bengaluru, 560103,
                    Karnataka, India
                    </p>
                </MDBCol>
                <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase text-black'>Mail us:</h5>

                    <p>
                    E-Baazar
                    Internet Private Limited,
                    Buildings Alyssa, Begonia &
                    Clove Embassy Tech Village,
                    Outer Ring Road, Devarabeesanahalli Village,
                    Bengaluru, 560103,
                    Karnataka, India
                    CIN : U51109KA2012PTC066107
                    Telephone: 1800 202 9898
                    </p>
                </MDBCol>

                
                </MDBRow>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-white' href='https://mdbootstrap.com/'>
                MDBootstrap.com
                </a>
            </div>
            </MDBFooter>
        </div>
  );
    }
export default Footer
