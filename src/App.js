import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState } from 'react';
import { Mail, ExternalLink, Moon, Sun } from 'lucide-react';
const SocialLink = ({ href, icon: Icon, label, isDark }) => (_jsx("a", { href: href, "aria-label": label, className: `p-3 rounded-full transition-colors ${isDark
        ? 'bg-blue-600 hover:bg-blue-700'
        : 'bg-blue-600 hover:bg-blue-700'}`, children: _jsx(Icon, { className: "w-6 h-6 text-white" }) }));
const ProfileSection = ({ name, title, bio, imageUrl, socialLinks, isDark }) => (_jsxs("div", { className: "flex flex-col md:flex-row items-center gap-12 mb-20", children: [_jsx("div", { className: `w-64 h-64 rounded-full overflow-hidden border-4 shadow-2xl ${isDark
                ? 'border-blue-400 shadow-blue-500/50'
                : 'border-blue-500 shadow-blue-500/30'}`, children: _jsx("img", { src: imageUrl, alt: `${name} profile`, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "flex-1 text-center md:text-left", children: [_jsx("h1", { className: `text-5xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`, children: name }), _jsx("p", { className: `text-2xl mb-4 ${isDark ? 'text-blue-300' : 'text-blue-600'}`, children: title }), _jsx("p", { className: `text-lg mb-6 max-w-2xl ${isDark ? 'text-gray-300' : 'text-gray-700'}`, children: bio }), _jsx("div", { className: "flex gap-4 justify-center md:justify-start", children: socialLinks.map(link => (_jsx(SocialLink, { href: link.href, icon: link.icon, label: link.label, isDark: isDark }, link.label))) })] })] }));
const Tag = ({ children, isDark }) => (_jsx("span", { className: `px-3 py-1 rounded-full text-sm ${isDark
        ? 'bg-blue-600/30 text-blue-200'
        : 'bg-blue-100 text-blue-700'}`, children: children }));
const ProjectCard = ({ project, isDark }) => (_jsxs("div", { className: `rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 shadow-lg ${isDark
        ? 'bg-slate-800/50 backdrop-blur-sm border-blue-500/30 hover:border-blue-400 hover:shadow-blue-500/50'
        : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-blue-500/30'}`, children: [_jsx("div", { className: "h-60 overflow-hidden", children: _jsx("img", { src: project.image, alt: project.title, className: "w-full h-full object-cover" }) }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: `text-2xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`, children: project.title }), _jsx("p", { className: `mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`, children: project.description }), _jsx("div", { className: "flex flex-wrap gap-2 mb-4", children: project.tags.map(tag => (_jsx(Tag, { isDark: isDark, children: tag }, tag))) }), _jsxs("div", { className: "flex gap-3", children: [_jsxs("a", { href: project.liveLink, className: `flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors ${isDark
                                ? 'bg-blue-600 hover:bg-blue-700'
                                : 'bg-blue-600 hover:bg-blue-700'}`, children: [_jsx(ExternalLink, { className: "w-4 h-4" }), "View"] }), _jsxs("a", { href: project.githubLink, className: `flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors ${isDark
                                ? 'bg-slate-700 hover:bg-slate-600'
                                : 'bg-gray-700 hover:bg-gray-800'}`, children: [_jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) }), "Code"] })] })] })] }));
const ProjectsSection = ({ projects, isDark }) => (_jsx("div", { className: "mb-12", children: ["Game", "Web", "Other"].map(type => (_jsxs("div", { className: "mb-8", children: [_jsxs("h2", { className: `text-3xl font-semibold mb-6 ${isDark ? 'text-white' : 'text-gray-900'}`, children: [type, " Projects"] }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: projects.filter(project => project.type === type).map(project => (_jsx(ProjectCard, { project: project, isDark: isDark }, project.id))) })] }, type))) }));
const Footer = ({ name, isDark }) => (_jsx("div", { className: `text-center pt-12 border-t ${isDark ? 'border-blue-500/30' : 'border-gray-300'}`, children: _jsx("p", { className: isDark ? 'text-gray-400' : 'text-gray-600', children: name }) }));
// GitHub Icon Component
const GithubIcon = ({ className }) => (_jsx("svg", { className: className, fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }) }));
// LinkedIn Icon Component
const LinkedinIcon = ({ className }) => (_jsx("svg", { className: className, fill: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) }));
// Main Portfolio Component
export default function Portfolio() {
    const [isDark, setIsDark] = useState(true);
    const profileData = {
        name: "Zaid Abuisba",
        title: "Game Developer & Software Engineering Student",
        bio: "Passionate about creating immersive gaming experiences through code. Currently studying software development with a focus on game design and interactive media.",
        imageUrl: "src/assets/zaid-abuisba.jpg",
        socialLinks: [
            { href: "https://github.com/vgc12", icon: GithubIcon, label: "GitHub" },
            { href: "https://www.linkedin.com/in/zaid-abuisba-ab088826a/", icon: LinkedinIcon, label: "LinkedIn" },
            { href: "mailto:zaidabuisba@gmail.com", icon: Mail, label: "Email" }
        ]
    };
    const [projects] = useState([
        {
            id: 1,
            title: "WebGPU 3D Renderer",
            type: "Web",
            description: "Developed a real-time 3D renderer in React and WebGPU, the successor to WebGL. this project implements deferred and physically based rendering " +
                "(PBR) techniques lighting to achieve realistic shading. Designed the project with modular architecture in TypeScript" +
                "for maintainability and scalability.",
            image: "src/assets/webgpu-renderer.png",
            tags: ["WebGPU", "Graphics Programming", "WGSL", "TypeScript", "React", "Tailwind CSS"],
            liveLink: "https://webgpu-renderer.vercel.app/",
            githubLink: "https://github.com/vgc12/webgpu-renderer"
        },
        {
            id: 2,
            title: "VANDULL",
            type: "Game",
            description: "A first person stealth shooter game made in unity. Created using a custom shader and modular C# architecture",
            image: "src/assets/vandull.png",
            tags: ["Unity Engine", "C#", "3D", "HLSL"],
            liveLink: "https://vgc12.itch.io/vandull",
            githubLink: "https://github.com/vgc12/vandull"
        },
        {
            id: 3,
            title: "Sword Bound",
            type: "Game",
            description: "A 2D platformer made in Unity Engine. Using a mouse in a drag-and-release movement, players control the sword to aim and launch the sword upwards to scale platforms. " +
                "Players must precisely aim their jumps to avoid falling back down the tower or being knocked down by tower guards. \n",
            image: "src/assets/sword-bound.png",
            tags: ["Unity Engine", "C#", "2D"],
            liveLink: "https://vgc12.itch.io/sword-bound",
            githubLink: "https://github.com/vgc12/SwordBound"
        },
        {
            id: 4,
            title: "Fours!",
            type: "Game",
            description: "A 2D puzzle game created in Unity Engine where players must rotate groups of 4 squares with a limited number of moves to make the board match a pattern",
            image: "src/assets/fours.png",
            tags: ["Unity Engine", "C#", "2D"],
            liveLink: "https://github.com/vgc12/fours",
            githubLink: "https://github.com/vgc12/fours"
        },
        {
            id: 5,
            title: "Pan VST3 Plugin",
            type: "Other",
            description: "A plugin for Digital Audio Workstations that enables panning of tracks. Created using the JUCE framework in conjunction with Open GL and written in C++",
            image: "src/assets/pan.png",
            tags: ["Graphics Programming", "Open GL", "GLSL", "C++", "Audio Programming"],
            liveLink: "https://github.com/vgc12/pan-plugin",
            githubLink: "https://github.com/vgc12/pan-plugin"
        },
        {
            id: 6,
            title: "Backup Scheduler",
            type: "Other",
            description: "A command line tool that schedules backups for files and folders and converts them into a zip folder at a given directory.",
            image: "src/assets/backup-scheduler.png",
            tags: ["C#", "CLI", "File Management"],
            liveLink: "https://github.com/vgc12/backup-scheduler",
            githubLink: "https://github.com/vgc12/backup-scheduler"
        },
        {
            id: 7,
            title: "C# tutorial site",
            type: "Web",
            description: "A tutorial website for learning C# programming concepts from basics to advanced topics. The site contains 3 Chapters and a Quiz for each chapter." +
                " As well as interactive coding blocks for users to practice coding directly on the site.",
            image: "src/assets/tutorial-site.png",
            tags: ["HTML", "CSS", "JavaScript", "C#"],
            liveLink: "https://vgc12.github.io/csharp-tutorial-site/chapter1.html",
            githubLink: "https://github.com/vgc12/csharp-tutorial-site"
        },
        {
            id: 8,
            title: "Student Attendance Tracker",
            type: "Web",
            description: "A web application for tracking student attendance in classes. Features include adding/removing students, marking attendance, and generating reports.",
            image: "src/assets/attendance-tracker.png",
            tags: ["C#", "ASP.NET", "Entity Framework", "SQL", "HTML", "CSS", "JavaScript"],
            liveLink: "https://github.com/vgc12/StudentAttendanceTracker",
            githubLink: "https://github.com/vgc12/StudentAttendanceTracker",
        }
    ]);
    return (_jsxs("div", { className: `min-h-screen font-['Inter',sans-serif] transition-colors duration-300 ${isDark
            ? 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900'
            : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'}`, children: [_jsx("div", { className: "fixed top-6 right-6 z-50", children: _jsx("button", { onClick: () => setIsDark(!isDark), className: `p-3 rounded-full shadow-lg transition-all ${isDark
                        ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                        : 'bg-white hover:bg-gray-100 text-indigo-600'}`, "aria-label": "Toggle dark mode", children: isDark ? _jsx(Sun, { className: "w-6 h-6" }) : _jsx(Moon, { className: "w-6 h-6" }) }) }), _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsx(ProfileSection, { ...profileData, isDark: isDark }), _jsx(ProjectsSection, { projects: projects, isDark: isDark }), _jsx(Footer, { name: profileData.name, isDark: isDark })] })] }));
}
