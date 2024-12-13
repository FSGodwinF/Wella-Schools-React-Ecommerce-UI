import {useState} from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import jordansneakers from '../assets/slider/airjordan-dummy.jpg';
import yeezysneakers from '../assets/slider/yeezy-dummy.jpg';
import blackyellow from '../assets/slider/blackyellow-dummy.jpg';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [ jordansneakers, yeezysneakers, blackyellow,

  ];

  const prevSlide = ()=>{
    setCurrentSlide(currentSlide === 0 ? 2: (prev)=> prev - 1)
  }
  const nextSlide = ()=>{
    setCurrentSlide(currentSlide === 2 ? 0: (prev)=> prev + 1)
  }


  return (
    <div className="overflow-hidden position-relative" style={{width:"100vw"}}>
        <div className='d-flex flex-row' style={{height: '50vh', width:"300vw", transition: "all 1s ease", transform: `translateX(-${currentSlide * 100}vw)`}}>
            <img className='img-fluid' style={{width: "100vw", objectFit:"cover"}} src={data[0]} alt="" />
            <img className='img-fluid' style={{width: "100vw", objectFit:"cover"}} src={data[1]} alt="" />
            <img className='img-fluid' style={{width: "100vw", objectFit:"cover"}} src={data[2]} alt="" />
        </div>
        <div className='d-flex mx-auto left-0 right-0 gap-2 py-1' style={{width:'fit-content'}}>
            <div className='h-2 w-2 text-black d-flex align-items-center justify-content-center' onClick={prevSlide} style={{ border:"1px solid gray", cursor:"pointer"}}>
                <KeyboardArrowLeftIcon/>
            </div>
            <div className='h-2 w-2 text-black d-flex align-items-center justify-content-center' onClick={nextSlide} style={{ border:"1px solid gray", cursor:"pointer"}}>
                <KeyboardArrowRightIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider