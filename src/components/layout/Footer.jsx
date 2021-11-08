import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const Footer = () => {
    return (
        <div>
            <MDBFooter className='text-white text-center text-lg-left' style={{backgroundColor: "#B4AC9D"}}>
            <MDBContainer className='p-4'>
                <MDBRow>
                <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase'>Links</h5>

                    <ul className='list-unstyled mb-0'>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 1
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 2
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 3
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 4
                        </a>
                    </li>
                    </ul>
                </MDBCol>

                <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase'>Links</h5>

                    <ul className='list-unstyled mb-0'>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 1
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 2
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 3
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 4
                        </a>
                    </li>
                    </ul>
                </MDBCol>

                <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase'>Links</h5>

                    <ul className='list-unstyled mb-0'>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 1
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 2
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 3
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 4
                        </a>
                    </li>
                    </ul>
                </MDBCol>

                

                <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase mb-0'>Links</h5>

                    <ul className='list-unstyled'>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 1
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 2
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 3
                        </a>
                    </li>
                    <li>
                        <a href='#!' className='text-white'>
                        Link 4
                        </a>
                    </li>
                    </ul>
                </MDBCol>
                <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase'>Footer Content</h5>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                    Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
                    atque cumque eum delectus sint!
                    </p>
                </MDBCol>
                <MDBCol lg='2' md='6' className='mb-4 mb-md-0'>
                    <h5 className='text-uppercase'>Footer Content</h5>

                    <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
                    Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
                    atque cumque eum delectus sint!
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
