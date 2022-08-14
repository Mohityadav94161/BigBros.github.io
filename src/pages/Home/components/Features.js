import { Row, Col } from "reactstrap";

const Feature = () => {
  return (
    <div className=" " id="feature">
      <div>
        <Row className="justify-content-center">
          <Col xs={6} className="place-items-stretch">
            <img
              className="object-contain w-full "
              src="https://static.wixstatic.com/media/dc3a90_5481b60ee86a45b79f901f5b9b61d867~mv2.jpg/v1/fill/w_512,h_800,al_c,q_85,enc_auto/dc3a90_5481b60ee86a45b79f901f5b9b61d867~mv2.jpg"
              alt="img"
            ></img>
          </Col>
          <Col className="-ml-3 bg-yellow-400">
            <div className="text-3xl text-bold mt-20 text-right">
              Creativity is sparked by curiosity and imagination. Creativity
              develops through playing and experimenting with ideas and things.
              Creativity is a driver for change and for adaptability
            </div>
            <div className="mt-10 tracking-wide leading-loose ">
              Creativity Matters. It matters for countries, economies,
              employers, parents and learners. Six years on from our Cultures of
              Creativity report, which considered how creative mindsets could be
              nurtured across cultures, we at the Bigbros Creative Corner
              believe that creativity now matters even more. We are not alone.
              Organisations such as the World Economic Forum, the OECD, and
              Education Ministries across the globe are increasingly recognising
              that concerted reform is needed to address the skills gap, with
              creativity now seen as one of the most important skills needed for
              today’s, and tomorrow’s learners. In the WEF’s 2016 Future of Jobs
              survey, large employers placed creativity as the tenth most
              in-demand skill. Only last year, they placed it in fifth position,
              well on track to achieve their forecast of third most in-demand
              skill by 2020. The trajectory for creativity skills demand is
              clear and education leaders and policymakers are already convinced
              of the need to reimagine learning. But how can we address this
              creativity crisis – the gap between the desire for creativity and
              the ability of education systems to develop this skill?
            </div>
          </Col>
        </Row>


      </div>
    </div>
  );
};
export default Feature;
