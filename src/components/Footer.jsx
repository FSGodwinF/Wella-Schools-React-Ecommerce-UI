import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import paymentPhoto from '../assets/footer/payment.png'

const Footer = () => {
  return (
    <div className='pt-5 mt-auto'>
        <div className='p-3 bg-primary d-flex justify-content-center gap-4'>
                <h3 className='text-white'>GET IN TOUCH WITH US</h3>
            <div className='d-flex gap-2 align-self-center'>
                <a href="https://facebook.com" target='_blank' className='text-decoration-none text-white'>
                    <FacebookIcon/>
                </a>
                <a href="https://instagram.com" target='_blank' className='text-decoration-none text-white'>
                    <InstagramIcon/>
                </a>
                <a href="https://google.com" target='_blank' className='text-decoration-none text-white'>
                    <GoogleIcon/>
                </a>
            </div>
        </div>
        <div className='d-flex flex-column justify-content-center align-items-center pt-3'>
            <h3 style={{color:'gray'}}>About</h3>
            <p className='col-4' style={{color:'gray'}}>This is a Simple Ecommerce UI, developed with React by Godwin F. in fulfillment of the Wella Schools Software Engineering Cohort</p>
        </div>
        <div className='d-flex align-items-center justify-content-center gap-2'>
            <div className='d-flex align-items-center gap-2'>
                <h2 className='fw-bold text-primary'>TheFGEEshop</h2>
                <p className='text-gray' style={{fontSize: '12px', color: "gray"}}>&copy; 2024 All Rights Reserved</p>
            </div>
            <img src={paymentPhoto} className='img-fluid' alt="" style={{width: '40%'}} /> 
        </div>
    </div>
  )
}

export default Footer