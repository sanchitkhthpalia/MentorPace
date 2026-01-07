import { getImgPath } from "@/utils/image";

// Old menuItems removed - using headerData from menuData.tsx instead

export const count = [
    {
        icon: getImgPath("/images/counter/star.svg"),
        value: "4.8+",
        description: "Average rating from satisfied mentees",
    },
    {
        icon: getImgPath("/images/counter/admin.svg"),
        value: "500+",
        description: "Successful mentorship sessions completed",
    },
    {
        icon: getImgPath("/images/counter/bag.svg"),
        value: "50+",
        description: "Expert mentors across various domains",
    },
];

export const whyUsBenefits = [
    { 
        title: 'Personalized Career Counseling', 
        description: 'Get tailored advice that matches your unique career goals and aspirations.',
        icon: '🎯'
    },
    { 
        title: 'Clear & Actionable Roadmaps', 
        description: 'Receive step-by-step guidance to help you navigate your career path with confidence.',
        icon: '🗺️'
    },
    { 
        title: 'Experienced Industry Mentors', 
        description: 'Connect with professionals who have real-world experience in your field.',
        icon: '👥'
    },
    { 
        title: 'Affordable & Accessible Sessions', 
        description: 'Quality mentorship that fits your budget, available when you need it.',
        icon: '💰'
    }
];

export const Servicebox = [
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Software Engineers',
        description: '1:1 mentorship and clear, actionable roadmaps to grow your software career.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'MBA',
        description: 'Guidance from experienced mentors for management careers and specializations.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'App Development',
        description: 'Mentorship on mobile and web app development paths, skills, and portfolios.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_1.svg'),
        title: 'Product Management',
        description: 'Break into PM with roadmap planning, interview prep, and portfolio guidance.',
    },
    {
        icon: getImgPath('/images/services/perfomance-optimization.svg'),
        title: 'Creative Designers',
        description: 'Personalized feedback on UX/UI, visual design, and case study storytelling.',
    },
    {
        icon: getImgPath('/images/services/ux-design-product_2.svg'),
        title: 'Human Resource',
        description: 'Career advice from HR mentors on hiring, profiles, and career transitions.',
    },
]

// portfolioinfo removed - Portfolio page and components have been deleted