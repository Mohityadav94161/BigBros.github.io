
const Service = () => {
  const services = [
    {
      title: "Writing Script",
      img: "https://static.wixstatic.com/media/a38016_fd00a530c28c4050be549656fc31fae3.png/v1/fill/w_64,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_fd00a530c28c4050be549656fc31fae3.png",
    },
    {
      title: "Art Crew",
      desc: "https://static.wixstatic.com/media/a38016_fd00a530c28c4050be549656fc31fae3.png/v1/fill/w_64,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_fd00a530c28c4050be549656fc31fae3.png",
      img: "https://static.wixstatic.com/media/a38016_fd00a530c28c4050be549656fc31fae3.png/v1/fill/w_64,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_fd00a530c28c4050be549656fc31fae3.png",
    },
    {
      title: "Pre Production",
      desc: "23% Carbon emission comes from motorized transport, such as cars and trucks. Try to use carpooling. For nearby distance, prefer walking or ride a bicycle",
      img: "https://static.wixstatic.com/media/a38016_82beaebca0b6424db16e3c0537bdc20e.png/v1/fill/w_61,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_82beaebca0b6424db16e3c0537bdc20e.png",
    },
    {
      title: "Director",
      desc: "https://static.wixstatic.com/media/a38016_fd00a530c28c4050be549656fc31fae3.png/v1/fill/w_64,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_fd00a530c28c4050be549656fc31fae3.png",
      img: "https://static.wixstatic.com/media/a38016_fd00a530c28c4050be549656fc31fae3.png/v1/fill/w_64,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_fd00a530c28c4050be549656fc31fae3.png",
    },
    {
      title: "Cinematography",
      desc: "Solar energy is a cost-effective, eco-friendly source that does not release harmful gases such as CO2, which pollute the air and have a negative influence on the climate.",
      img: "https://static.wixstatic.com/media/a38016_82beaebca0b6424db16e3c0537bdc20e.png/v1/fill/w_61,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_82beaebca0b6424db16e3c0537bdc20e.png",
    },
    {
      title: "Post Production",
      desc: "Having your own vegetable garden is like planting your own money and ensures that the food is fresh and nutritious. It also helps to cut down on your carbon footprint.",
      img: "https://static.wixstatic.com/media/a38016_fd00a530c28c4050be549656fc31fae3.png/v1/fill/w_64,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_fd00a530c28c4050be549656fc31fae3.png",
    },
    {
      title: "Designer",
      desc: "Solar energy is a cost-effective, eco-friendly source that does not release harmful gases such as CO2, which pollute the air and have a negative influence on the climate.",
      img: "https://static.wixstatic.com/media/a38016_82beaebca0b6424db16e3c0537bdc20e.png/v1/fill/w_61,h_64,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_82beaebca0b6424db16e3c0537bdc20e.png",
    },
    {
      title: "Audience",
      desc: "Having your own vegetable garden is like planting your own money and ensures that the food is fresh and nutritious. It also helps to cut down on your carbon footprint.",
      img: "https://static.wixstatic.com/media/a38016_fd00a530c28c4050be549656fc31fae3.png/v1/fill/w_64,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/a38016_fd00a530c28c4050be549656fc31fae3.png",
    },
  ];

  return (
    <section className="section bg-yellow-500 " id="service" style={{marginTop:-262}}>
      <div className="container  mx-6 pl-10 flex flex-row gap-5">
        
          {services.map((service, key) => (
            <div >
              <div className="w-28 ">
                <div className=" bg-white rounded-full flex-1 h-24 w-24 ">
                  <img src={service.img} className="h-18 w-auto  ml-3 pt-3" alt="img" />
                  
                </div>
                <div className="">
                  <p className="text-center font-semibold pb-2">
                    {service.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      
      </div>
    </section>
  );
};
export default Service;
