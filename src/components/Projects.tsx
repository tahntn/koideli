import { Search } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import img1 from "@/assets/img/project/1.jpg";
const Projects = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "Warehousing , Distrbution",
      desc: "Warehouse inventory",
    },
    {
      id: 2,
      img: img1,
      title: "Warehousing , Distrbution",
      desc: "Warehouse inventory",
    },
    {
      id: 3,
      img: img1,
      title: "Warehousing , Distrbution",
      desc: "Warehouse inventory",
    },
    {
      id: 4,
      img: img1,
      title: "Warehousing , Distrbution",
      desc: "Warehouse inventory",
    },
    {
      id: 5,
      img: img1,
      title: "Warehousing , Distrbution",
      desc: "Warehouse inventory",
    },
  ];
  return (
    <div className="section-full section-full p-t120 p-b90 tw-project-2-wrap site-bg-gray">
      <div className="section-content">
        <div className="container">
          <div className="section-head center wt-small-separator-outer">
            <div className="wt-small-separator site-text-primary">
              <div>Projects</div>
            </div>
            <h2 className="wt-title">Featured Projects</h2>
            <p className="section-head-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry the standard dummy text ever since the when an printer
              took.
            </p>
          </div>
        </div>

        <div className="tw-project-2-content m-b30">
          <div className="w-full px-20 bg-white py-10">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {data.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/4"
                  >
                    <div className="p-1">
                      <div className="item">
                        <div className="project-new-2">
                          <div className="wt-img-effect">
                            <img src={item.img} alt="" className="w-full" />
                            <div className="project-view">
                              <div
                                className="elem pic-long project-view-btn"
                                title="Nh-16 Highway Bridge"
                                data-lcl-txt=""
                                data-lcl-author=""
                                data-lcl-thumb="images/project/1.jpg"
                              >
                                <Search className="absolute z-10 top-[30%] left-[30%]" />
                                <i className="fa fa-search-plus flex items-center justify-center"></i>
                              </div>
                            </div>
                          </div>
                          <div className="project-new-content">
                            <span className="project-new-category">
                              {item.title}
                            </span>
                            <h4 className="wt-title">{item.desc}</h4>
                            <a
                              href="services-detail.html"
                              className="site-button-h-align"
                            >
                              Read More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
