import React from 'react';
import { useParams } from 'react-router-dom';
import { beritaData } from '../data/beritaData';
import Navbar from '../components/Navbar';
import Footer from '../components/FooterComponent';
import ButtonChatus from '../components/element/button/buttonChat';
import ScrollToTop from '../components/scrollTop';
import { FaUser, FaCalendar } from 'react-icons/fa';

const FullArticle = () => {
  const { id } = useParams();
  const article = beritaData.find((article) => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="container mx-auto px-7">
        <div className="text-center">
          <h1 className="mt-24 font-bold text-3xl">{article.title}</h1>
          <div className="flex justify-center items-center gap-16 mt-2">
            <div className="flex items-center gap-2">
              <FaUser />
              <span>{article.content.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendar />
              <span>{article.content.date}</span>
            </div>
          </div>
          <div className="flex justify-center pb-5 gap-4 m-6"></div>
        </div>
        <div className="flex justify-center">
          <img src={article.content.image} alt="Article" className="w-full" />
        </div>
        <div className="mb-24">
          {article.content.subheadings.map((subheading, index) => (
            <div key={index}>
              <h2 className="font-bold py-3">{subheading}</h2>
              <p className="mb-4">{article.content.paragraphs[index]}</p>
            </div>
          ))}
        </div>
      </div>
      <ButtonChatus />
      <Footer />
    </>
  );
};

export default FullArticle;
