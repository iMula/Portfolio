import React from 'react'
import "./intro.css"
// import Me from "../../../public/images/Me.png";

const intro = () => {
  return (
    <div className='i'  id="intro">
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro'>Hello World, My name is</h2>
                <h1 className='i-name'>Seth Mulia</h1>
                <div className='i-title'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Web Developer</div>
                        <div className='i-title-item'>HTML</div>
                        <div className='i-title-item'>CSS</div>
                        <div className='i-title-item'>Javascript</div>
                        <div className='i-title-item'>Nodejs</div>
                        <div className='i-title-item'>React</div>
                    </div>
                </div>
                <p className='i-desc'>
                    I have a passion to let my creativity speak through what I create. I'm motivated to produce and maintain customer satisfaction, by committed loyalty to my ethics, and my representation of the company I serve. 
                </p>
            </div>
        </div>
        <div className='i-right'>
            <div className='i-bg'></div>
            <img src="images/me.png" alt='headshot' className='i-img' />
        </div>
    </div>
  )
}

export default intro