import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
  {
    id: 1,
    description: 'I was particularly impressed by the regular addition of new courses and updates, ensuring that the content remains current and relevant. The websites commitment to staying at the forefront of education is evident.',
  },
  {
    id: 2,
    description: 'The support team is  top-notch. I had a question about a course, and their prompt and helpful response reaffirmed my confidence in the platform.',
  },
  {
    id: 3,
    description: 'This platform apart is the quality of the content. The courses are not only informative but also engaging.',
  }
]

function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client Experience With Us</h2>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

export default AppTestimonials;