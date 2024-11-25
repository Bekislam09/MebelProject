import react from '../../../img/Services/Banner.jpg'
import './Description.css'

export const Description = () => {
    return (
        <div>
            <img className='img' src={react} alt="" />
                <div className='service'>
                    <div className='cont1'>
                        <div className='block' >
                            <h1>Project Plan</h1>
                            <p>There are many variations of the passages of lorem Ipsum from 
                            available, majority.</p>
                            <button>Read More</button>
                        </div>
                        <div  className='block' >
                            <h1>Interior Work</h1>
                            <p>There are many variations of the passages of lorem Ipsum from 
                            available, majority.</p>
                            <button>Read More</button>
                        </div>
                        <div  className='block' >
                            <h1>Retail Design</h1>
                            <p>There are many variations of the passages of lorem Ipsum from 
                            available, majority.</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className='cont2'>
                        <div className='block' >
                            <h1>2d/3d Art Work</h1>
                            <p>There are many variations of the passages of lorem Ipsum from 
                            available, majority.</p>
                            <button>Read More</button>
                        </div>
                        <div className='block' >
                            <h1>Interior Work</h1>
                            <p>There are many variations of the passages of lorem Ipsum from 
                            available, majority.</p>
                            <button>Read More</button>
                        </div>
                        <div className='block' >
                            <h1>Decoration Work</h1>
                            <p>There are many variations of the passages of lorem Ipsum from 
                            available, majority.</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}
