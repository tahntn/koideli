import { data } from "@/constants/service";

const AllServices = () => {
  return (
    <div className="section-full p-t120 p-b90 site-bg-gray tw-service-gallery-style3-area">
      <div className="services-gallery-block-outer3">
        <div className="container">
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div>All services</div>
            </div>
            <h2 className="wt-title">Trusted For Our Services</h2>
            <p className="section-head-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the standard dummy text ever since the when an printer
              took.
            </p>
          </div>

          <div className="section-content">
            <div className="services-gallery-style3">
              <div className="flex flex-wrap">
                {data.map((item) => (
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-4" key={item.id}>
                    <div className="service-box-style3">
                      <div className="service-media">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="service-content">
                        <h3 className="service-title-large">
                          <span className="service-title-large-number">
                            {item.id}
                          </span>
                          <button>{item.title}</button>
                        </h3>
                        <p>{item.desc}</p>
                        <button className="site-button-100">View Detail</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
