import React, { Component } from 'react'
 
import BackgroundSlideshow from 'react-background-slideshow'
 
import image1 from './001.jpg'
import image2 from './002.jpg'
import image3 from './003.jpg'
import image4 from './004.jpg'
import image5 from './005.jpg'

export default class Image extends Component {
  render () {
    return (
      <div>
        <BackgroundSlideshow images={[ image1, image2, image3, image4, image5 ]} />
      </div>
    )
  }
}