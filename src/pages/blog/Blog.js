import React from "react";
import "./Blog.scss";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/Footer";

const Blog = () => {
  let { loading, data, error } = useFetch(
    `${process.env.React_App_REACT_APP_URL_API}?populate=*`
  );

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error... </p>;

  return (
    <div className="bcard">
      <Helmet>
        <meta
          name="description"
          content="Get expert insights and valuable information to make informed decisions about your cooking gas needs. Follow us now!"
          data-rh="true"
        />
        <title>Gasport Newsfeed</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
      </Helmet>

      <div className="hea">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1 style={{ cursor: "pointer" }}>Gasport</h1>
        </Link>
      </div>
      <section id="blog" className="section-100">
        <div className="container">
          <p className="text-center primary-color">
            Get the latest updates on cooking gas safety practices and much more
          </p>
          <h1 className="text-center">
            <b>Gasport Newsfeed</b>
          </h1>
          <br />
          <br />
          <div className="row">
            {data.map((blog) => (
              <div className="col-md-4" key={blog.id}>
                <div className="blog-card">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to={`/newsfeed/${blog.id}`}
                  >
                    <img
                      src={`${blog.attributes.image.data.attributes.url}`}
                      alt=""
                      className="blog-thumbnail"
                    />
                  </Link>
                  <div className="blog-container">
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/newsfeed/${blog.id}`}
                    >
                      <h4>
                        <b>{blog.attributes.title}</b>
                      </h4>
                      <p className="text-muted">
                        {blog.attributes.desc.substring(0, 150)}...
                      </p>
                    </Link>                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;
