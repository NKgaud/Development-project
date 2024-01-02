import React from 'react'


function Blog() {
   

    return (
        <div>
            <section id="blog" className="w3l-blog section-bg">
                <div className="container">
                    <div className="section-title">
                         {/* {data.title} */}
                        <h6 className="title-subw3hny two mb-2"><span>Latest News</span></h6>
                        <h3 className="title-w3l two">Blog Posts</h3>
                    </div>
                    <div className="row pb-5 w3l-courses">
                        <div className="col-md-12 mx-auto pb-lg-5 pb-3">
                            <div className="owl-two owl-carousel owl-theme row">
                                <div className="item col-lg-4 col-md-6 mt-lg-5 mt-4">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#cardblog" className="zoom d-block">
                                                <img className="card-img-bottom d-block" src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Card image cap" /> 
                                            </a>
                                        </div>
                                        <div className="card-body course-details">
                                            {/* {data.description} */}
                                            <a href="#cardblog" className="course-desc">Lorem ipsum dolor sit
                                            </a>
                                            <p className="mt-3">Lorem ipsum dolor sit, amet consectetur elit consectetur . </p>
                                            <div className="blog-bottom-info">
                                                <div className="course-meta">
                                                    <div className="meta-item course-lesson">
                                                        <span className="fas fa-heart" />
                                                        <span className="meta-value"> 24 </span>
                                                    </div>
                                                    <div className="meta-item course-students">
                                                        <span className="fas fa-eye" />
                                                        <span className="meta-value"> 125 </span>
                                                    </div>
                                                    <div className="meta-item course-students">
                                                        <span className="fas fa-calendar-week" />
                                                        <span className="meta-value"> 13.07.2021 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-lg-4 col-md-6 mt-lg-5 mt-4">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#cardblog" className="zoom d-block">
                                                <img className="card-img-bottom d-block" src="assets/images/g2.jpg" alt="Card image cap" />
                                            </a>
                                        </div>
                                        <div className="card-body course-details">
                                            <a href="#cardblog" className="course-desc">Lorem ipsum dolor sit
                                            </a>
                                            <p className="mt-3">Lorem ipsum dolor sit, amet consectetur elit consectetur . </p>
                                            <div className="blog-bottom-info">
                                                <div className="course-meta">
                                                    <div className="meta-item course-lesson">
                                                        <span className="fas fa-heart" />
                                                        <span className="meta-value"> 24 </span>
                                                    </div>
                                                    <div className="meta-item course-students">
                                                        <span className="fas fa-eye" />
                                                        <span className="meta-value"> 125 </span>
                                                    </div>
                                                    <div className="meta-item course-students">
                                                        <span className="fas fa-calendar-week" />
                                                        <span className="meta-value"> 23.07.2021 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item col-lg-4 col-md-6 mt-lg-5 mt-4">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#cardblog" className="zoom d-block">
                                                <img className="card-img-bottom d-block" src="assets/images/g3.jpg" alt="Card image cap" />
                                            </a>
                                        </div>
                                        <div className="card-body course-details">
                                            <a href="#cardblog" className="course-desc">Lorem ipsum dolor sit
                                            </a>
                                            <p className="mt-3">Lorem ipsum dolor sit, amet consectetur elit consectetur . </p>
                                            <div className="blog-bottom-info">
                                                <div className="course-meta">
                                                    <div className="meta-item course-lesson">
                                                        <span className="fas fa-heart" />
                                                        <span className="meta-value"> 24 </span>
                                                    </div>
                                                    <div className="meta-item course-students">
                                                        <span className="fas fa-eye" />
                                                        <span className="meta-value"> 125 </span>
                                                    </div>
                                                    <div className="meta-item course-students">
                                                        <span className="fas fa-calendar-week" />
                                                        <span className="meta-value"> 25.07.2021 </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            /
        </div>

    )
}

export default Blog