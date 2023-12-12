import './App.css';
import logo from './images/logo.png'
import header_img from '../src/images/img2.png'
import about_img from '../src/images/about_img.jpg'
import admin_img from '../src/images/admin.png'
import how_img from '../src/images/work_img.jpg'

const Navbar = () => {

  return (
    <div>
      <nav className='container-fluid py-4 px-lg-5'>
        <div className='row'>
          <div className='nav_img pb-sm-2 col-lg-3 col-md-3 col-sm-12 col-xs-12'>
            <img src={logo} alt='logo' className='' />
          </div>

          <ul className='nav_items col-lg-9 col-md-9 col-sm-12 col-xs-12 m-0 d-flex justify-content-end align-items-center gap-5 list-unstyled '>
            <li><a href='#' className='download_btn d-inline-block rounded-3'>Download</a></li>
            <li><a href='#'>Sign up</a></li>
            <li><a href='#'><i className='fa fa-search'></i></a></li>

          </ul>
        </div>
      </nav>
    </div>

  );
}

const Header = () => {
  let sliderIndex = 0;

  const imageSlider = () => {
    let i;
    let slides = document.getElementsByClassName("header_background");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    sliderIndex++;

    if (sliderIndex > slides.length) {
      sliderIndex = 1;
    }

    slides[sliderIndex - 1].style.display = "block";

    setTimeout(imageSlider, 2000);
  }

  // imageSlider();

  return (
    <header className='container-fluid'>
      <div className='row pt-lg-4 align-items-center header_background'>
        <div className='d-flex header_content justify-content-end col-lg-5 col-md-5 col-sm-12 col-xs-12'>
          <div className='header_text p-1 text-white'>
            <h1 className='text-white pb-4 fw-bold'>
              Get Thinking A long time
            </h1>
            <p className='pb-4' >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            </p>

            <a href='#' className='d-inline-block mt-3 text-center py-3 border-5 border-white'>Read More</a>
          </div>
        </div>

        <div className='col-lg-7 col-md-7 col-sm-12 col-xs-12'>
          <div className='header_img'>
            <img src={header_img} className='img-fluid' />
          </div>
        </div>
      </div>

    </header>

  );
}

const About = () => {
  return (
    <div className='container-fluid'>
      <div className='row about_section'>
        <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12'>
          <div className='about_img p-2'>
            <img src={about_img} className='img-fluid' />
          </div>
        </div>

        <div className='col-lg-7 col-md-6 col-sm-12 col-xs-12 about_content sm_col-space'>
          <h2 className='general_heading head_text'>About <span className='blue_text'>Software</span></h2>

          <p className='fw-normal lh-lg about_text pb-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>

          <div className='read_btn-box d-flex justify-content-end me-lg-5 pe-lg-5'>
            <a href='#' className='read_btn d-inline-block mt-3 text-center text-black py-3 border-5 me-0'>Read More</a>
          </div>
        </div>
      </div>
    </div>

  );
}

const Choose = () => {
  return (
    <div className=''>
      <h2 className='general_heading p-0 m-0 text-center pb-5 head_text'>Why <span className='blue_text'>Choose Us</span></h2>

      <div className='choose_section'>
        <div className='container'>
          <div className='row'>
            <div className='d-flex flex-column gap-4 col-lg-3 col-md-3 col-sm-12 col-xs-12 px-0'>
              <a href='#' className='d-block w-100 choose_links active'>Easy to Customize</a>
              <a href='#' className='d-block w-100 choose_links'>More flexible</a>
              <a href='#' className='d-block w-100 choose_links'>Clean Mode</a>
              <a href='#' className='d-block w-100 choose_links'>Ratinaready</a>
            </div>

            <div className='col-lg-9 col-md-9 col-sm-12 col-xs-12 px-0'>
              <div className='choose_content bg-white text-center p-'>
                <div className=''>
                  <img src={admin_img} className='img-fluid' />
                </div>

                <h4 className='pe-3 mb-0 pt-3 pb-2 blue_text'>Ad Minim</h4>

                <p className='mb-0 fw-normal'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const How = () => {
  return (
    <div className='container-fluid'>
      <div className='row about_section bg-white'>
        <div className='col-lg-7 col-md-6 col-sm-12 col-xs-12 about_content how_content'>

          <h2 className='general_heading head_text'>How To <span className='blue_text'>Work It</span></h2>

          <p className='fw-normal lh-lg mb-0 pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>

          <div className='read_btn-box d-flex justify-content-start me-lg-5 pe-lg-5'>
            <a href='#' className='read_btn d-inline-block text-center text-black py-3 border-5 me-0'>Read More</a>
          </div>
        </div>

        <div className='col-lg-5 col-md-6 col-sm-12 col-xs-12 sm_col-space'>
          <div className='about_img'>
            <img src={how_img} className='img-fluid' />
          </div>
        </div>
      </div>
    </div>

  );
}

const Request = () => {

  return (
    <div className='bg-primary request_section'>
      <div className='container'>
        <h2 className='text-dark general_heading head_text'>Request <span className='text-white'>A Call Back</span></h2>

        <div className='row'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <input placeholder='Full Name' className='request_form border-0 w-100 rounded-pill' type='text' />
            <input placeholder='Email' className='request_form border-0 w-100 rounded-pill' type='text' />
            <input placeholder='Phone Number' className='request_form border-0 w-100 rounded-pill' type='text' />
            <textarea placeholder='Message' className='request_form-message  border-0 w-100 mb-5' type='text' ></textarea>

            <div className=' d-flex justify-content-center'>
              <a href='#' className='request_btn bg-white d-inline-block text-center text-black py-3 border-5 me-0'>Send</a>
            </div>
          </div>

          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12'>
            <div id='googleMap'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <div className='container-fluid bg_footer'>
      <div className='footer text-white'>
        <div className='container'>
          <div className='row '>
            <div className='footer_section col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12'>
              <h2 className='mb-0'>Address</h2>
              <p className='fw-normal'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
            </div>

            <div className='footer_section col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12'>
              <h2 className='mb-0'>Links</h2>
              <ul className='list-unstyled web_links position-relative'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Work</a></li>
                <li><a href='#'>Contact</a></li>
              </ul>
            </div>

            <div className='footer_section col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12'>
              <h2 className='mb-0'>Follow Us</h2>
              <div className='social_links'>
                <a href='#' className='d-flex align-items-center gap-4'><i class="fa-brands fa-facebook-f social_icon d-inline-flex justify-content-center align-items-center bg-white"></i>Facebook</a>

                <a href='#' className='d-flex align-items-center gap-4'><i class="fa-brands fa-twitter social_icon d-inline-flex justify-content-center align-items-center bg-white"></i>Twitter</a>

                <a href='#' className='d-flex align-items-center gap-4'><i class="fa-brands fa-linkedin social_icon d-inline-flex justify-content-center align-items-center bg-white"></i>Linked in</a>

                <a href='#' className='d-flex align-items-center gap-4'><i class="fa-brands fa-youtube social_icon d-inline-flex justify-content-center align-items-center bg-white"></i>Youtube</a>

                <a href='#' className='d-flex align-items-center gap-4'><i class="fa-brands fa-instagram social_icon d-inline-flex justify-content-center align-items-center bg-white"></i>Instagram</a>
              </div>
            </div>

            <div className='footer_section col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 ps-lg-5'>
              <h2 className='mb-0'>Newsletter</h2>
              <input placeholder='Full Name' className='news_form border-0 w-100' type='text' />
              <div className=' d-flex justify-content-start'>
                <a href='#' className='bg-primary request_btn news_btn d-inline-block text-center text-white py-3 me-0'>SUSCRIBE</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className=' col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-primary'>
          <p className='mb-0 text-center py-4 text-white fw-normal'>Copyright 2019 All Right Reserved By Free html Templates</p>
        </div>
      </div>
    </div>
  );
}

function App() {
  // let myMap = function () {
  //   var mapProp= {
  //     center:new google.maps.LatLng(51.508742,-0.120850),
  //     zoom:5,
  //   };
  //   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  // }
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Choose />
      <How />
      <Request />
      <Footer />
    </div>
  );
}

export default App;
