import img1 from "@/assets/img/blog/1.jpg";
import img2 from "@/assets/img/blog/2.jpg";
const OurBlogs = () => {
  const data = [
    {
      img: img1,
      date: (
        <>
          <span>02</span>Aug
        </>
      ),
      des1: "At the end of the day, going forward, a new normal that has evolved from. your only logistic partner.",
      des2: " New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting industry the  standard dummy text ever since the when an printer.",
    },
    {
      img: img1,
      date: (
        <>
          <span>02</span>Aug
        </>
      ),
      des1: "At the end of the day, going forward, a new normal that has evolved from. your only logistic partner.",
      des2: " New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting industry the  standard dummy text ever since the when an printer.",
    },
  ];
  return (
    <div className="section-full p-t120 p-b90 site-bg-white">
      <div className="container">
        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <div>Our Blogs</div>
          </div>
          <h2 className="wt-title">Recent news & events</h2>
          <p className="section-head-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry the standard dummy text ever since the when an printer
            took.
          </p>
        </div>

        <div className="section-content">
          <div className="flex flex-wrap  d-flex justify-content-center">
            {data.map((item, index) => (
              <div
                className="w-full sm:w-full md:w-1/2 lg:w-1/2 m-b30 px-10"
                key={index}
              >
                <div className="blog-post blog-post-4-outer">
                  <div className="wt-post-media wt-img-effect zoom-slow">
                    <div>
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                  <div className="wt-post-info">
                    <div className="wt-post-meta ">
                      <ul>
                        <li className="post-date">{item.date}</li>
                      </ul>
                    </div>

                    <div className="wt-post-title ">
                      <h3 className="post-title">
                        <div>{item.des1}</div>
                      </h3>
                    </div>
                    <div className="wt-post-text ">
                      <p>{item.des2}</p>
                    </div>
                    <div className="wt-post-readmore ">
                      <div className="site-button-link site-text-primary">
                        Read More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogs;
