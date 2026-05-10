import React, { useEffect, useState } from 'react';
import { Mail, ExternalLink, Moon, Sun, Github, Linkedin } from 'lucide-react';


const bucketUrl = 'https://zaid-abuisba-portfolio-images.s3.us-east-2.amazonaws.com/';

interface SocialLinkData {
    href: string;
    icon: any;
    label: string;
}

interface ProfileData {
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
    socialLinks: SocialLinkData[];
}

interface Project {
    id: number;
    title: string;
    description: string;
    type: 'Web' | 'Game' | 'Other';
    image: string;
    tags: string[];
    liveLink: string;
    githubLink: string;
}

// Reusable Components

interface SocialLinkProps {
    href: string;
    icon: any;
    label: string;
    isDark: boolean;
}

const SocialLink = ({ href, icon: Icon, label, isDark }: SocialLinkProps) => (
    <a
        href={href}
        aria-label={label}
        className={`p-3 rounded-full transition-colors ${
            isDark
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-blue-600 hover:bg-blue-700'
        }`}
    >
        <Icon className="w-6 h-6 text-white" />
    </a>
);

interface ProfileSectionProps {
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
    socialLinks: SocialLinkData[];
    isDark: boolean;
}

const ProfileSection = ({
                            name,
                            title,
                            bio,
                            imageUrl,
                            socialLinks,
                            isDark
                        }: ProfileSectionProps) => (
    <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
        <div className={`w-64 h-64 rounded-full overflow-hidden border-4 shadow-2xl ${
            isDark
                ? 'border-blue-400 shadow-blue-500/50'
                : 'border-blue-500 shadow-blue-500/30'
        }`}>
            <img
                src={imageUrl}
                alt={`${name} profile`}
                className="w-full h-full object-cover"
            />
        </div>

        <div className="flex-1 text-center md:text-left">
            <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
            }`}>
                {name}
            </h1>
            <p className={`text-2xl mb-4 ${
                isDark ? 'text-blue-300' : 'text-blue-600'
            }`}>
                {title}
            </p>
            <p className={`text-lg mb-6 max-w-2xl ${
                isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
                {bio}
            </p>

            <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map(link => (
                    <SocialLink
                        key={link.label}
                        href={link.href}
                        icon={link.icon}
                        label={link.label}
                        isDark={isDark}
                    />
                ))}
            </div>
        </div>
    </div>
);

interface TagProps {
    children: React.ReactNode;
    isDark: boolean;
}

const Tag = ({ children, isDark }: TagProps) => (
    <span className={`px-3 py-1 rounded-full text-sm ${
        isDark
            ? 'bg-blue-600/30 text-blue-200'
            : 'bg-blue-100 text-blue-700'
    }`}>
    {children}
  </span>
);

interface ProjectCardProps {
    project: Project;
    isDark: boolean;
}

const ProjectCard = ({ project, isDark }: ProjectCardProps) => (
    <div className={`rounded-xl overflow-hidden border transition-all duration-300 hover:transform hover:scale-105 shadow-lg ${
        isDark
            ? 'bg-slate-800/50 backdrop-blur-sm border-blue-500/30 hover:border-blue-400 hover:shadow-blue-500/50'
            : 'bg-white border-gray-200 hover:border-blue-500 hover:shadow-blue-500/30'
    }`}>
        <div className="h-60 overflow-hidden">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
            />
        </div>

        <div className="p-6">
            <h3 className={`text-2xl font-bold mb-3 ${
                isDark ? 'text-white' : 'text-gray-900'
            }`}>
                {project.title}
            </h3>

            <p className={`mb-4 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map(tag => (
                    <Tag key={tag} isDark={isDark}>{tag}</Tag>
                ))}
            </div>

            <div className="flex gap-3">
                <a
                    href={project.liveLink}
                    className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors ${
                        isDark
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                    }`}
                >
                    <ExternalLink className="w-4 h-4" />
                    View
                </a>
                <a
                    href={project.githubLink}
                    className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg transition-colors ${
                        isDark
                            ? 'bg-slate-700 hover:bg-slate-600'
                            : 'bg-gray-700 hover:bg-gray-800'
                    }`}
                >
                    <Github className="w-4 h-4" />
                    Code
                </a>
            </div>
        </div>
    </div>
);

interface ProjectsSectionProps {
    projects: Project[];
    isDark: boolean;
}

const ProjectsSection = ({ projects, isDark }: ProjectsSectionProps) => (
    <div className="mb-12">
        {["Game" , "Web" , "Other"].map(type => (
            <div key={type} className="mb-8">
                <h2 className={`text-3xl font-semibold mb-6 ${
                    isDark ? 'text-white' : 'text-gray-900'
                }`}>
                    {type} Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.filter(project => project.type === type).map(project => (
                        <ProjectCard key={project.id} project={project} isDark={isDark} />
                    ))}
                </div>
            </div>
        ))}

    </div>
);

interface FooterProps {
    name: string;
    isDark: boolean;
}

const Footer = ({ name, isDark }: FooterProps) => (
    <div className={`text-center pt-12 border-t ${
        isDark ? 'border-blue-500/30' : 'border-gray-300'
    }`}>
        <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>
            {name}
        </p>
    </div>
);

// Main Portfolio Component

export default function Portfolio() {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        document.documentElement.style.backgroundColor = isDark ? '#0f172a' : '#eff6ff';
    }, [isDark]);

    const profileData: ProfileData = {
        name: "Zaid Abuisba",
        title: "Game Developer & Software Engineering Student",
        bio: "Passionate about creating immersive gaming experiences through code. Currently studying software development with a focus on game design and interactive media.",
        imageUrl: bucketUrl + 'zaid-abuisba.jpg', // Changed
        socialLinks: [
            { href: "https://github.com/vgc12", icon: Github, label: "GitHub" },
            { href: "https://www.linkedin.com/in/zaid-abuisba-ab088826a/", icon: Linkedin, label: "LinkedIn" },
            { href: "mailto:zaidabuisba@gmail.com", icon: Mail, label: "Email" }
        ]
    };


    const [projects] = useState<Project[]>([
        {
            id: 1,
            title: "WebGPU 3D Renderer",
            type: "Web",
            description: "Developed a real-time 3D renderer in React and WebGPU, the successor to WebGL. this project implements deferred and physically based rendering " +
                "(PBR) techniques lighting to achieve realistic shading. Designed the project with modular architecture in TypeScript" +
                "for maintainability and scalability.",
            image: bucketUrl + 'webgpu-renderer.png', // Changed
            tags: ["WebGPU", "Graphics Programming", "WGSL", "TypeScript", "React", "Tailwind CSS"],
            liveLink: "https://webgpu-renderer.vercel.app/",
            githubLink: "https://github.com/vgc12/webgpu-renderer"
        },
        {
            id: 2,
            title: "WebGPU Fiddle",
            type:"Web",
            description: "A WGSL shader development playground that runs in the browser which enables fast testing " +
                "of vertex, fragment, and compute shaders developed using WebGPU",
            image: bucketUrl + 'webgpu-fiddle.png',
            tags: ["WebGPU", "Graphics Programming", "WGSL", "TypeScript", "React", "Tailwind CSS"],
            liveLink: "https://webgpu-fiddle.vercel.app/",
            githubLink: "https://github.com/vgc12/webgpu-renderer"
        },
        {
            id: 3,
            title: "VANDULL",
            type: "Game",
            description: "A first person stealth shooter game made in unity. Created using a custom shader and modular C# architecture.",

            image: bucketUrl + 'vandull.png',
            tags: ["Unity Engine", "C#", "3D", "HLSL"],
            liveLink: "https://vgc12.itch.io/vandull",
            githubLink: "https://github.com/vgc12/vandull"
        },
        {
            id: 4,
            title: "Sword Bound",
            type: "Game",
            description: "A 2D platformer made in Unity Engine. Using a mouse in a drag-and-release movement, players control the sword to aim and launch the sword upwards to scale platforms. " +
                "Players must precisely aim their jumps to avoid falling back down the tower or being knocked down by tower guards. \n",
            image: bucketUrl + 'sword-bound.png',
            tags: ["Unity Engine", "C#", "2D"],
            liveLink: "https://vgc12.itch.io/sword-bound",
            githubLink: "https://github.com/vgc12/SwordBound"
        },
        {
            id: 5,
            title: "Fours!",
            type: "Game",
            description: "A 2D puzzle game created in Unity Engine where players must rotate groups of 4 squares with a limited number of moves to make the board match a pattern.",
            image: bucketUrl + 'fours.png',
            tags: ["Unity Engine", "C#", "2D"],
            liveLink: "https://itch.io/vgc12/fours",
            githubLink: "https://github.com/vgc12/fours"
        },
        {
            id: 6,
            title: "Pan VST3 Plugin",
            type: "Other",
            description:  "A plugin for Digital Audio Workstations that enables panning of tracks. Created using the JUCE framework in conjunction with Open GL and written in C++.",
            image: bucketUrl + 'pan.png',
            tags: ["Graphics Programming", "Open GL", "GLSL", "C++", "Audio Programming"],
            liveLink: "https://github.com/vgc12/pan-plugin",
            githubLink: "https://github.com/vgc12/pan-plugin"
        },
        {
            id: 7,
            title: "Backup Scheduler",
            type: "Other",
            description: "A command line tool that schedules backups for files and folders and converts them into a zip folder at a given directory.",
            image: bucketUrl + 'backup-scheduler.png', // Changed
            tags: ["C#", "CLI", "File Management"],
            liveLink: "https://github.com/vgc12/backup-scheduler",
            githubLink: "https://github.com/vgc12/backup-scheduler"
        },
        {
            id: 9,
            title: "Student Attendance Tracker",
            type: "Web",
            description: "A web application for tracking student attendance in classes. Features include adding/removing students, marking attendance, and generating reports.",
            image: bucketUrl + 'attendance-tracker.png', // Changed
            tags: ["C#", "ASP.NET", "Entity Framework", "SQL", "HTML", "CSS", "JavaScript"],
            liveLink: "https://github.com/vgc12/StudentAttendanceTracker",
            githubLink: "https://github.com/vgc12/StudentAttendanceTracker"
        }
    ]);

    return (
        <div className={`min-h-screen font-['Inter',sans-serif] transition-colors duration-300 ${
            isDark
                ? 'bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900'
                : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
        }`}>
            {/* Dark Mode Toggle */}
            <div className="fixed top-6 right-6 z-50">
                <button
                    onClick={() => setIsDark(!isDark)}
                    className={`p-3 rounded-full shadow-lg transition-all ${
                        isDark
                            ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400'
                            : 'bg-white hover:bg-gray-100 text-indigo-600'
                    }`}
                    aria-label="Toggle dark mode"
                >
                    {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
            </div>

            <div className="container mx-auto px-4 py-16">
                <ProfileSection {...profileData} isDark={isDark} />
                <ProjectsSection projects={projects} isDark={isDark} />
                <Footer name={profileData.name} isDark={isDark} />
            </div>
        </div>
    );
}