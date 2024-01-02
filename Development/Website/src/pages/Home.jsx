import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



function Home() {
    const redirect=useNavigate();
    useEffect(() => {
        fetch();
    }, []);

    // const { id } = useParams();
    const [data, setdata] = useState([]);

    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/blog`);
        setdata(res.data);
    }
    return (
        <div>
            <div className="w3l-main-slider position-relative" id="home">
                <div className="w3l-bannerhny-content">
                    <div className="container">
                        <div className="w3l-bannerhny-info">
                            <h3 className="mb-md-5 mb-4">
                                Now
                                It's
                                Easy for you
                                Rent a Car</h3>
                            <div className="banner-form-w3">
                            {/* {
                            data.map((value, index, entarr) => {
                                return (
                                    <div classname="col-lg-4 col-news-top ">
                                        <a href="javascript:void(0)" onClick={() => { return redirect('/Single_blog/' + value.id) }}>
                                            <img src={value.img} width="50%" alt="img" classname="img-fluid w-20"  />
                                        </a>
                                        <div className="info">
                                            <h3 className="text-capitalize text-black ">{value.title}</h3>
                                            <p>Description goes here</p>
                                        </div>
                                        <h6 className="small-heading text-capitalize  mt-4">
                                            <a href="javascript:void(0)" onClick={() => { return redirect('/Single_blog/' + value.id) }} className="text-dark">{value.title}
                                                <i className="fas fa-long-arrow-alt-right ml-1" />
                                            </a>
                                        </h6>
                                    </div>
                                )
                            })
                        } */}
                                {/*/Request-a-call-form */}
                                <form action method="post">
                                    <div className="form-style-w3ls">
                                        <div className="form-gd">
                                            <label htmlFor="input_from">Shipping From</label>
                                            <input type="text" name="Name" placeholder="Enter city" required="required" />
                                        </div>
                                        <div className="form-gd">
                                            <label htmlFor="input_from">Shipping to</label>
                                            <input type="text" name="Name" placeholder="Enter city" required="required" />
                                        </div>
                                        <div className="form-gd">
                                            <label htmlFor="input_from">Submit</label>
                                            <button className="btn btn-style btn-primary"> Send request</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="form-footer mt-3">
                                    <span className="info">
                                        <b>
                                            Get your <i>Free quote</i>
                                        </b>
                                        by completing our quick form - or -
                                        <a href="tel:+(21) 255 999 8888">+(21) 255 999 8888</a>
                                    </span>
                                </div>

                                {/* //Request-a-call-form */}
                             {
                            data.map((value, index, entarr) => {
                                return (
                                    <div classname="col-lg-4 col-news-top ">
                                        <a href="javascript:void(0)" onClick={() => { return redirect('/single_blog/' + value.id) }}>
                                            <img src={value.img} width="50%" alt="img" classname="img-fluid w-20"  />
                                        </a>
                                        <div className="info">
                                            <h3 className="text-capitalize text-black ">{value.title}</h3>
                                            <p>Description goes hesre</p>
                                        </div>
                                        <h6 className="small-heading text-capitalize  mt-4">
                                            <a href="javascript:void(0)" onClick={() => { return redirect('/single_blog/' + value.id) }} className="text-dark">{value.title}
                                                <i className="fas fa-long-arrow-alt-right ml-1" />
                                            </a>
                                        </h6>
                                    </div>
                                )
                            })
                        } 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home