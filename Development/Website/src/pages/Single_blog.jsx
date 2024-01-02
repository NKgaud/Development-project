import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

 function Single_blog() {
    useEffect(() => {
        fetch();
    }, []);

    const { id } = useParams();
    const [data, setdata] = useState({});

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog/${id}`);
        setdata(res.data);
    }

    return (
        <>
            <div>
                {/* about section */}
                <section className="w3l-about py-5" id="about">
                    <div className="container py-lg-5 py-md-4 py-2">
                        <div className="row align-items-center">
                            <div className="col-lg-6 section-width pe-xl-5 pt-lg-4">
                                <h3 className="title-style">Welcome to <span>Musical {data.title} </span></h3>
                                <p className="mt-4"> {data.description} </p>
                                <p className="mt-4 pb-dm-3">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, corrupti
                                    odit? At iure facere,
                                    porro repellat officia quas, dolores magnam assumenda soluta odit
                                    harum.</p>
                                {/* <Link to="/" className="btn btn-style mt-5"> Go to Home Page</Link> */}
                            </div>
                            <div className="col-lg-6 history-info mt-lg-0 mt-5 pt-md-4 pt-2">
                                <div className="position-relative img-border">
                                    <img src={data.img} className="img-fluid radius-image" alt="video-popup" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* //about section */}


            </div>
        </>
    )
}
export default Single_blog
