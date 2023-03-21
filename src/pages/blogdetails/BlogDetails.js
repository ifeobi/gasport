import React from "react";
import useFetch from "../../hooks/useFetch";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Socials from "../../components/Socials";
import "./BlogDetails.scss";

const BlogDetails = () => {
  const { id } = useParams();
  let { loading, data, error } = useFetch(
    `${process.env.React_App_REACT_APP_URL_API}/${id}?populate=*`
  );

  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( </p>;

  return (
    <div className="bd">
      <Helmet>
        <title>{data?.attributes?.title}</title>
        <meta
          name="description"
          content={data?.attributes?.title}
          data-rh="true"
        />

        {/* Facebook tags */}
        <meta property="og:url" content={window.location.href} data-rh="true" />
        <meta property="og:type" content="article" data-rh="true" />
        <meta
          property="og:title"
          content={data?.attributes?.title}
          data-rh="true"
        />
        <meta
          property="og:description"
          content={data?.attributes?.title}
          data-rh="true"
        />
        <meta
          property="og:image"
          content={`${data?.attributes.image.data.attributes.url}`}
          data-rh="true"
        />
        {/* End Facebook tags */}

        {/* Twitter tags */}
        <meta
          name="twitter:url"
          content={window.location.href}
          data-rh="true"
        />
        <meta name="twitter:card" content="article" data-rh="true" />
        <meta
          name="twitter:title"
          content={data?.attributes?.title}
          data-rh="true"
        />
        <meta
          name="twitter:description"
          content={data?.attributes?.title}
          data-rh="true"
        />
        <meta
          name="twitter:image"
          content={`${data.attributes.image.data.attributes.url}`}
          data-rh="true"
        />
        {/* End Twitter tags */}
      </Helmet>
      <article className="article">
        <div className="post-header">
          <div className="header-content post-container">
            <Link to={".."} className="back-home">
              Previous page
            </Link>

            <h1 className="header-title">{data?.attributes?.title}</h1>

            <img
              style={{ objectFit: "cover" }}
              src={`${data.attributes.image.data.attributes.url}`}
              alt=""
              className="header-img"
            />
          </div>
        </div>

        <div className="post-content post-container">
          <ReactMarkdown>{data.attributes.content}</ReactMarkdown>
        </div>

        {/* Share */}
        <footer className="footerf">
          <div className="social-links2">
            <Socials />
          </div>
          <span>Share this article</span>
        </footer>
      </article>
    </div>
  );
};

export default BlogDetails;
