import React from "react";
import Stopwatch from '../assets/SampleImage2.png';
import weatherapp from '../assets/images/weatherapp.png';
import SampleImage1 from '../assets/images/SampleImage1.png';
import prj3 from'../assets/images/ecommerce.png';
import prj4 from '../assets/images/API.png';
import prj5 from '../assets/images/clg.png';
import prj6 from '../assets/images/loading.gif';
import Footer from './Footer';

export const project = [
    {
        title: 'Stop Watch',
        description: 'The Stopwatch App is a sleek and responsive application built with React and styled using Tailwind CSS...',
        image: Stopwatch,
        git: "https://github.com/bharathipriyan08/Stopwatch",
        technologies: ['React JS', 'tailwind CSS']
    },
    {
        title: 'React Weather App',
        description: 'The React Weather App is a sleek and responsive application built with React and styled using Tailwind CSS. It allows users to easily check the current weather and forecasts for any location around the globe.',
        image: weatherapp,
        git: "https://github.com/bharathipriyan08/react-weather-app",
        technologies: ['React JS', 'Tailwind CSS']
        
    },
    {
        title: 'ToDo List',
        description: 'The ToDo List App is a sleek and responsive application built with React and styled using Tailwind CSS...',
        image: SampleImage1,
        git: "https://github.com/bharathipriyan08/Todo-list-react",
        technologies: ['React JS', 'tailwind CSS']
    },
    {
        title: 'Ecommerce-website',
        description: 'The Ecommerce Page is a sleek and responsive application built with React and styled using Tailwind CSS...',
        image: prj3,
        git: "https://github.com/bharathipriyan08/react-ecommerce-app",
        technologies: ['React JS', 'tailwind CSS']
    },
    {
        title: 'Character API',
        description: 'The Ecommerce Page is a sleek and responsive application built with React and styled using Tailwind CSS...',
        image: prj4,
        git: "https://github.com/bharathipriyan08/rick-and-morty-api",
        technologies: ['React JS', 'tailwind CSS']
    },
    {
        title: 'College-WebSite',
        description: 'This College Website is a comprehensive platform designed with React and styled using Tailwind CSS.',
        image: prj5,
        git: "https://github.com/bharathipriyan08/react-router-dom",
        technologies: ['React JS', 'tailwind CSS']
    },
    {
        title: 'For More Project Visit My Gitup',
        description: 'To see more React related Project Kindly visit my gitup profile.',
        image: prj6,
        git: "https://github.com/bharathipriyan08",
        technologies: ['React JS', 'tailwind CSS']
    },
];

const ProjectCard = ({ image, title, description, git, technologies }) => {
    return (
        <div className="max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="w-full rounded-t-lg h-auto object-cover" src={image} alt={title} />
            </a>
            <div className="p-4">
                <a href="#">
                    <h5 className="text-2xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">
                        {title}
                    </h5>
                </a>
                <p className="font-normal text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 flex justify-between'>
                <div className='flex flex-wrap gap-2'>
                    {technologies.map((tag, index) => (
                        <p key={`${index}-${tag}`} className='text-[14px] text-blue-500'>#{tag}</p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
};

export default Projects;
