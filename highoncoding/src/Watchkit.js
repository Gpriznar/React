import React, { Component } from 'react';
import './Review.css'

export class Watchkit extends Component {
  render() {
    return (
      <div className="reviewbox">
      <h1 className="reviewtitle">Hello WatchKit</h1>
      <p className="reviewbody">Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 SDK release. The WatchKit framework enable the develoeprs to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and eveloping apps for the Apple Watch.</p>
      <p className="reviewmedia">12 Comments 124 Likes</p>
      </div>
    )
  }
}
