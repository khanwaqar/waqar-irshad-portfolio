/* eslint-disable */
import { BsCodeSlash, BsClipboardData } from "react-icons/bs";
import { FaServer, FaRobot, FaDatabase, FaProjectDiagram, FaCloud, FaTools, FaNetworkWired } from "react-icons/fa";

export const servicesData = [
    {
        id: 1,
        title: 'Full Stack Web Development',
        icon: <BsCodeSlash />
    },
    {
        id: 2,
        title: 'Backend Architecture & API Design',
        icon: <FaNetworkWired />
    },
    {
        id: 3,
        title: 'Web Scraping & Data Automation',
        icon: <BsClipboardData />
    },
    {
        id: 4,
        title: 'Database Design & Optimization',
        icon: <FaDatabase />
    },
    {
        id: 5,
        title: 'System Integration & Automation Scripts',
        icon: <FaRobot />
    },
    {
        id: 6,
        title: 'Cloud & Server Deployment',
        icon: <FaCloud />
    },
    {
        id: 7,
        title: 'Project Architecture & Code Review',
        icon: <FaProjectDiagram />
    },
    {
        id: 8,
        title: 'Technical Consulting & Mentorship',
        icon: <FaTools />
    }
];
