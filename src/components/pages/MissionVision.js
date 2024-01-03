import React from 'react';
import '../MissionVision.css'; 


function MissionVision() {
  return (
    <div className='mission-vision-container'  id='mission-vision-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted  />
      <h1>Mission & Vision</h1>
      <p className='mission-vision-container-p' id='mission-vision-container-p'>Lorem Ipsum</p>
      {/* Add more content as needed */}
    </div>
  );
}

export default MissionVision;
