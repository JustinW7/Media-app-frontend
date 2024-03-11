import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigateByUrl=useNavigate()
  return (
    <>
      <Row className='mt-5  align-items-center justify-content-between w-100'>
      <Col></Col>
        <Col lg={5}>
          <h1 style={{textAlign:'justify'}} className='text-warning'>Welcome To <span> Media player</span></h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas ipsa voluptatem nihil, incidunt ducimus ullam, aliquid eos laudantium iusto esse exercitationem saepe. Eos sint aperiam dicta impedit asperiores voluptate nobis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor, necessitatibus! Nisi perspiciatis tenetur illo nostrum saepe? Id exercitationem quidem fugit, facere est delectus ipsa maiores aliquam porro tempore architecto veritatis.</p>
          <button onClick={()=>navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started</button>
          </Col>
        <Col lg={5}>
          <img src="https://img.freepik.com/free-photo/stylish-modern-woman-headphones-listening-music-dancing-enjoying-favorite-songs-earphones-standing-against-blue-background_1258-70436.jpg?t=st=1710131547~exp=1710135147~hmac=1379feb1f71403c54e9f08ffd01ae073f60b43b8d4515826eb95954c7d9ed0b1&w=740" width={'500px'} height={'500px'} alt="" 
            width={'500px'}
            height={'500px'}
            alt=""
            style={{ borderRadius: '15px' }}/>
        </Col>
       
        <Col></Col>
      </Row>
      <div className="container mb-5 mt-5 d-flex align-items-center justify-content-center">
     <h3>Features</h3>
     </div>
   <div className='cards mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>
   <Card className='p-5 bg-dark' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://img.freepik.com/free-photo/portrait-satisfied-girl-without-makeup-headphones-pink-wall-model-smiling-while-listening-pleasant-melody_197531-14244.jpg?t=st=1710132015~exp=1710135615~hmac=3268c34d1f013538f43b62f804be397a483a994f3a309b179abcdc63169156ce&w=740" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
     
      </Card.Body>
    </Card>
   
    <Card className='p-5 bg-dark' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://img.freepik.com/free-photo/technology-millennials-lifestyle-concept-carefree-cute-brunette-female-student-put-headphones-plug-smartphone-picking-song-smiling-standing-blue-background-make-playlist-study_1258-72987.jpg?t=st=1710132053~exp=1710135653~hmac=b76d1d78c484c84e9fb4529b093550bdca9d1923c9267d78ee3e27c289f11a46&w=740" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
     
      </Card.Body>
    </Card>

    <Card className='p-5 bg-dark' style={{ width: '22rem' }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://img.freepik.com/free-photo/young-guy-listening-rap-song_140725-36640.jpg?t=st=1710132505~exp=1710136105~hmac=ece2e058108934fe9477b0c362304236be5aa5f92ac1f682635bf357c78f8d18&w=1380" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
     
      </Card.Body>
    </Card>
      </div>
      <div className="container boader rounded p-5 boader-secondary b-5 mt-5 d-flex align-items-center justify-content-center justify-content-between w-100">
        <div className="col-lg-5">
         <h3 className='mb-5 text-warning'>Simple,powerful & fast</h3>
         <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>play Everthing</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor odio quas praesentium a, quasi repellat. At enim repudiandae blanditiis magnam saepe, dicta doloremque exercitationem ipsa? Recusandae facere cumque quis molestiae?</h6>

         <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Categorize Videos</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor odio quas praesentium a, quasi repellat. At enim repudiandae blanditiis magnam saepe, dicta doloremque exercitationem ipsa? Recusandae facere cumque quis molestiae?</h6>

         <h6 className='mb-5'><span className='fs-5 fw-bolder text-warning'>Managing History</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor odio quas praesentium a, quasi repellat. At enim repudiandae blanditiis magnam saepe, dicta doloremque exercitationem ipsa? Recusandae facere cumque quis molestiae?</h6>
        </div>
        <div className="video col-lg-5">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3hVc3M1IEe0?si=EXzyuayHwngp_4Gk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </>
  )
}

export default LandingPage