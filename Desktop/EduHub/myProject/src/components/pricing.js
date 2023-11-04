import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const pricingData = [
  {
    id: 1,
    plan: 'Basics',
    price: 'Rs.5000',
    features: ['C/C++', 'Soft Skills Training', 'Maths','Basic Python'],
    link: 'https://pay.google.com/about/'
  },
  {
    id: 2,
    plan: 'Premium',
    price: 'Rs.8000',
    features: ['C/C++','Graphic Designing','Soft Skills Training', 'Maths'],
    link: 'https://pay.google.com/about/'
  },
  {
    id: 3,
    plan: 'Ultimate',
    price: 'Rs.10000',
    features: ['Java/C/C++','Graphic Designing','IT Training','Project Building'],
    link: 'https://pay.google.com/about/'
  }
]

function AppPricing() {
  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Pricing &amp; plans</h2>
          <div className="subtitle">check our pricing &amp; plans</div>
        </div>
        <Row>
          {
            pricingData.map(pricing => {
              return (
                <Col sm={4} key={pricing.id}>
                  <div className='heading'>
                    <h3>{pricing.plan}</h3>
                    <span className='price'>{pricing.price}</span>
                  </div>
                  <div className='content'>
                    <ListGroup>
                      {
                        pricing.features.map((feature, index) => {
                          return (
                            <ListGroup.Item key={index}>{feature}</ListGroup.Item>    
                          );
                        })
                      }
                    </ListGroup>
                  </div>
                  <div className='btn-holder'>
                    <a href={pricing.link} className='btn btn-primary'>Buy Now</a>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

export default AppPricing;