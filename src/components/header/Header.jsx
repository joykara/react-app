import React from 'react'
import {RiArrowRightLine} from 'react-icons/ri'
import './header.css'

const Header = () => {
return (
    <div className='header section__padding' id='home'>

      <div className="header-content">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <div className="header-content__button">
                {/* TODO: Make this a p tag to test transformation */}
                <button type='button'>Learn More <span className='arrow'><RiArrowRightLine size={27}/></span></button>
        </div>
      </div>

      <div className="header-image">

      </div>
    </div>
  )
}

export default Header