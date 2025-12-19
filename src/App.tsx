import React, { useState } from 'react';
import { Mail, ExternalLink, Moon, Sun } from 'lucide-react';
import profileImage from '@/assets/zaid-abuisba.jpg';
import webgpuImage from '@/assets/webgpu-renderer.png';
import vandullImage from '@/assets/vandull.png';
import swordBoundImage from '@/assets/sword-bound.png';
import foursImage from '@/assets/fours.png';
import panImage from '@/assets/pan.png';
import backupImage from '@/assets/backup-scheduler.png';
import tutorialImage from '@/assets/tutorial-site.png';
import attendanceImage from '@/assets/attendance-tracker.png';

// Types

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
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
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

// GitHub Icon Component
const GithubIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
);

// LinkedIn Icon Component
const LinkedinIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

// Main Portfolio Component

export default function Portfolio() {
    const [isDark, setIsDark] = useState(true);

    const profileData: ProfileData = {
        name: "Zaid Abuisba",
        title: "Game Developer & Software Engineering Student",
        bio: "Passionate about creating immersive gaming experiences through code. Currently studying software development with a focus on game design and interactive media.",
        imageUrl: profileImage, // Changed
        socialLinks: [
            { href: "https://github.com/vgc12", icon: GithubIcon, label: "GitHub" },
            { href: "https://www.linkedin.com/in/zaid-abuisba-ab088826a/", icon: LinkedinIcon, label: "LinkedIn" },
            { href: "mailto:zaidabuisba@gmail.com", icon: Mail, label: "Email" }
        ]
    };


    const [projects] = useState<Project[]>([
        {
            id: 1,
            title: "WebGPU 3D Renderer",
            type: "Web",
            description: "Developed a real-time 3D renderer in React and WebGPU...",
            image: webgpuImage, // Changed
            tags: ["WebGPU", "Graphics Programming", "WGSL", "TypeScript", "React", "Tailwind CSS"],
            liveLink: "https://webgpu-renderer.vercel.app/",
            githubLink: "https://github.com/vgc12/webgpu-renderer"
        },
        {
            id: 2,
            title: "VANDULL",
            type: "Game",
            description: "A first person stealth shooter game made in unity...",
            image: vandullImage, // Changed
            tags: ["Unity Engine", "C#", "3D", "HLSL"],
            liveLink: "https://vgc12.itch.io/vandull",
            githubLink: "https://github.com/vgc12/vandull"
        },
        {
            id: 3,
            title: "Sword Bound",
            type: "Game",
            description: "A 2D platformer made in Unity Engine...",
            image: swordBoundImage, // Changed
            tags: ["Unity Engine", "C#", "2D"],
            liveLink: "https://vgc12.itch.io/sword-bound",
            githubLink: "https://github.com/vgc12/SwordBound"
        },
        {
            id: 4,
            title: "Fours!",
            type: "Game",
            description: "A 2D puzzle game created in Unity Engine...",
            image: foursImage, // Changed
            tags: ["Unity Engine", "C#", "2D"],
            liveLink: "https://github.com/vgc12/fours",
            githubLink: "https://github.com/vgc12/fours"
        },
        {
            id: 5,
            title: "Pan VST3 Plugin",
            type: "Other",
            description: "A plugin for Digital Audio Workstations...",
            image: panImage, // Changed
            tags: ["Graphics Programming", "Open GL", "GLSL", "C++", "Audio Programming"],
            liveLink: "https://github.com/vgc12/pan-plugin",
            githubLink: "https://github.com/vgc12/pan-plugin"
        },
        {
            id: 6,
            title: "Backup Scheduler",
            type: "Other",
            description: "A command line tool that schedules backups...",
            image: backupImage, // Changed
            tags: ["C#", "CLI", "File Management"],
            liveLink: "https://github.com/vgc12/backup-scheduler",
            githubLink: "https://github.com/vgc12/backup-scheduler"
        },
        {
            id: 7,
            title: "C# tutorial site",
            type: "Web",
            description: "A tutorial website for learning C# programming...",
            image: tutorialImage, // Changed
            tags: ["HTML", "CSS", "JavaScript", "C#"],
            liveLink: "https://vgc12.github.io/csharp-tutorial-site/chapter1.html",
            githubLink: "https://github.com/vgc12/csharp-tutorial-site"
        },
        {
            id: 8,
            title: "Student Attendance Tracker",
            type: "Web",
            description: "A web application for tracking student attendance...",
            image: attendanceImage, // Changed
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