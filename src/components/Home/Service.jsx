import React from 'react';
import ServiceCard from './ServiceCard';
import { FaBeer } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import { BiCustomize } from 'react-icons/bi';
import { GiHook } from 'react-icons/gi';
import { MdDeveloperMode } from 'react-icons/md';

import { AiFillApi } from 'react-icons/ai';
import { BiSupport } from 'react-icons/bi';
import { useScroll } from '../useScroll';
import { cardAnimation } from '../Animations';
import { motion } from "framer-motion";

const Service = (props) => {
  const [element, controls] = useScroll();

  const cardData = [
    {
      logo:<RiReactjsLine/>,
      title: 'Development From Scratch',
      description:
        'Leverage my React software development services to build a project from start to go. Share your project requirements for the perfect mix of talent and expertise.',
    },
    {
      logo: <BiCustomize/>,
      title: 'Customizable & Reusable Components',
      description:
        'Components are the basic building blocks of any  react application. I prefer to make components in such a manner that even a person with less coding knowledge would be able to modify changes',
    },
    {
      logo: <GiHook/>,
      title: 'Custom React Hooks',
      description:
        'Hooks plays an important role in any React application as it seperates the logic from the UI & if the same logic is used in different components, custom Hooks are there. ',
    },

    {
      logo: <MdDeveloperMode/>,
      title: 'UI/UX Development',
      description:
        'UI / UX is a most important part in any software product as this is responsible to make an impact on the users. I can develope clean and minimal UI / UX designs for any kind of requirements.',
    },
    {
      logo: <AiFillApi/>,
      title: 'Rest-Api Integration',
      description:
        "API integration is the one of the important part of any single page application, As most of the data fetched from API's. I can implement the REST-api's in the application in most effective and efficient manner.",
    },
    {
      logo: <BiSupport/>,
      title: 'Maintenance and Support',
      description:
        'Maintenance and support services for consistent and stable performance of applications. I can change , modify or even enhance the product quality & update your app functionality on demand.',
    },
  ];

  return (
    <section className="services" ref={element}>
      <motion.h1 
       variants={cardAnimation}
    
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: .3 }} className="heading">SERVICES</motion.h1>
      <div className="cards-container">
        {cardData.map((data, index) => {
          const { logo, title, description } = data;
          return (
            <ServiceCard
              key={index}
              logo={logo}
              title={title}
              description={description}
              // element ={element}
              // controls ={controls}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Service;
