import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


import img1 from '../assets/images/img1.jpg';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">Go through the page to know more about yourself! </div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>We are committed to fostering a vibrant and innovative learning environment. Our mission is to empower individuals to reach their full potential through education, equipping them with the knowledge and skills needed to thrive in an ever-changing world.</p>
            <br/>
            <p>Experienced Faculty: Our dedicated and experienced faculty members are passionate about teaching and mentoring. They bring real-world expertise to the classroom, ensuring that our students receive the best education.

             Innovative Learning: We embrace cutting-edge teaching methods and technologies to make learning engaging and effective. Our curriculum is designed to prepare students for the challenges of the 21st century.</p>
            <br/>
            <p>We envision a world where education knows no boundaries, where every student has the opportunity to explore, learn, and grow. Our vision is to be a leader in shaping the future of education, providing accessible and high-quality learning experiences to learners of all backgrounds.</p>
            
           
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;