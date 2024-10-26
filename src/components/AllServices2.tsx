import img1 from "@/assets/img/s-gallery/1.jpg";
import { data } from "@/constants/service";
const AllServices2 = () => {
  return (
    <div className="section-full p-t120 p-b90 site-bg-gray tw-service-gallery-style1-area tyre-mark-bg">
      <div className="services-gallery-block-outer2">
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
            <div className="services-gallery-style1">
              <div className="flex flex-wrap ">
                {data.map((item) => (
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-4 px-2">
                    <div className="service-box-style1">
                      <div className="service-content">
                        <div className="service-content-inner">
                          <div className="service-content-top">
                            <h3 className="service-title-large">
                              <div>{item.title}</div>
                            </h3>
                          </div>
                          <div className="service-content-bottom">
                            <span className="service-title-large-number">
                              {item.id}
                            </span>
                            <p>{item.desc}</p>
                            <div className="site-button-2">View Detail</div>
                          </div>
                        </div>
                      </div>
                      <div className="service-media">
                        <img src={img1} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-hilite-text-wrap">
        <div className="tw-hilite-text right">
          <span>Services</span>
        </div>
      </div>
    </div>
  );
};

export default AllServices2;
