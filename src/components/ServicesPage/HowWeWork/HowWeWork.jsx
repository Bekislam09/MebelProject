import './HowWeWork.css'
import react2 from '../../../img/Services/Image.jpg'
import icon from '../../../img/Services/Icon.jpg'
import photo3 from '../../../img/Services/Photo (3).jpg'
import icon2 from '../../../img/Services/Group.jpg'
import photo4 from '../../../img/Services/Photo (4).jpg'
import icon3 from '../../../img/Services/Icon (1).jpg'
import image1 from '../../../img/Services/Image (1).png'
import icon4 from '../../../img/Services/Icon (2).jpg'

export const HowWeWork = () => {
    return (
        <div className="container2" >
            <div>
            <h1 className='mainTitle' >How We Work</h1>
            <p id='p' >It is a long established fact  will be distracted.Lorem  
               Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div> 
            <div>
                <div className='block1' >
                    <div>
                        <img className='img-block1' src={react2} alt="" />
                    </div>
                    <div>
                        <div className='block-img-1' >
                            <img className='icon' src={icon} alt="" />
                            <h2 className='number1'>01</h2>
                        </div>
                        <div className='description1' >
                            <h1 className='h1' >Concept & Details</h1>
                            <p className='desc1'>It is a long established fact  will be distracted.
                                Lorem Ipsum is simply dummy from text of the
                                and typesetting indufstry. </p>
                        </div>  
                    </div>
                </div>
                <div className='block2' >
                    <img className='img-block2' src={photo3} alt="" />
                    <div>
                        <div className='block-img-2' >
                            <img className='icon2' src={icon2} alt="" />
                            <h2 className='number2'>02</h2>
                        </div>
                        <div classsName='description2'>
                            <h1 className='h1' >Idea for Work</h1>
                            <p className='desc2'>It is a long established fact  will be distracted.
                            Lorem Ipsum is simply dummy from text of the
                            and typesetting indufstry. </p>
                        </div>
                        
                    </div>
                </div>
                <div className='block3' >
                    <img className='img-block3' src={photo4} alt="" />
                    <div>
                        <div className='block-img-3' >
                            <img className='icon3' src={icon3} alt="" />
                            <h2 className='number3' >03</h2>
                        </div>
                        <div className='description3'>
                            <h1 className='h1' >Design</h1>
                            <p className='desc3' >It is a long established fact  will be distracted.
                                Lorem Ipsum is simply dummy from text of the
                                and typesetting indufstry. </p>
                        </div>
                    </div>
                </div>
                <div className='block4' >
                    <img className='img-block4' src={image1} alt="" />
                    <div>
                        <div className='block-img-4' >
                            <img className='icon4' src={icon4} alt="" />
                            <h2 className='number4' >04</h2>
                        </div>
                        <div className='description4' >
                            <h1 className='h1' >Perfection</h1>
                            <p className='desc4' >It is a long established fact  will be distracted.
                                Lorem Ipsum is simply dummy from text of the
                                and typesetting indufstry. </p>
                        </div>
                    </div> 
                </div>     
            </div>         
        </div>
    );
}

