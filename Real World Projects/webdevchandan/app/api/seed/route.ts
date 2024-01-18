import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    // await prisma.home.deleteMany();
    // await prisma.about.deleteMany();
    // await prisma.socialLinks.deleteMany();
    // await prisma.skill.deleteMany();
    // await prisma.experience.deleteMany();
    // await prisma.organization.deleteMany();
    // await prisma.education.deleteMany();
    // await prisma.institution.deleteMany();
    // await prisma.resume.deleteMany();
    // await prisma.certificate.deleteMany();
    // await prisma.certificateDetail.deleteMany();
    // await prisma.certificateHeaderDetail.deleteMany();
    // await prisma.certificateMainDetail.deleteMany();
    // await prisma.portfolioFilter.deleteMany();
    // await prisma.portfolio.deleteMany();
    // await prisma.portfolioDetail.deleteMany();
    // await prisma.portfolioHeaderDetail.deleteMany();
    // await prisma.portfolioMainDetail.deleteMany();
    // await prisma.contact.deleteMany();
    // await prisma.testimonial.deleteMany();

    // await prisma.home.create({
    //     data: {
    //         image: "Chandan_Kumar.webp",
    //         role: ["Web Developer", "Java Developer"],
    //     }
    // })

    // await prisma.about.create({
    //     data: {
    //         info: "Hello, My name is Chandan Kumar. I am a <span>Full-Stack Web/Java Developer</span> from Jharkhand, India. I like to code things from scratch and enjoy bringing ideas to life in the browser. I value simple content structure, clean design patterns, and thoughtful interactions. I've done remote work for agencies, consulted for startups, and also worked as a Freelancer in a various online digital platform. <br>I love in turning People's Imagination into Reality.Feel free to take a look at my latest projects on <a href=' / portfolio/ className='portfolioPage' > Portfolio Page</a>",
    //         img: "Chandan_Kumar.webp",
    //     }
    // })

    // await prisma.socialLinks.createMany({
    //     data: [
    //         {
    //             label: "Linkedin",
    //             link: "https://www.linkedin.com/in/webdevchandan/"
    //         }, {
    //             label: "Leetcode",
    //             link: "https://leetcode.com/WebDevChandan/",
    //         }, {
    //             label: "Github",
    //             link: "https://github.com/WebDevChandan",
    //         }, {
    //             label: "Twitter",
    //             link: "https://twitter.com/WebChandan",
    //         }
    //     ]
    // })

    // await prisma.skill.createMany({
    //     data: [
    //         {
    //             name: "HTML",
    //             level: "90%",
    //         },
    //         {
    //             name: "CSS",
    //             level: "75%",
    //         },
    //         {
    //             name: "Javascript",
    //             level: "70%",
    //         },
    //         {
    //             name: "Bootstrap",
    //             level: "85%",
    //         },
    //         {
    //             name: "Jquery",
    //             level: "60%",
    //         },
    //         {
    //             name: "PHP",
    //             level: "65%",
    //         },
    //         {
    //             name: "SQL",
    //             level: "85%",
    //         },
    //         {
    //             name: "WordPress",
    //             level: "90%",
    //         },
    //     ]
    // })

    // await prisma.resume.create({
    //     data: {
    //         file: "myResume.pdf"
    //     }
    // })

    // await prisma.testimonial.createMany({
    //     data: [
    //         {
    //             name: "Lori Wolfe-1",
    //             img: "female.png",
    //             region: "USA",
    //             feedback: "Chandankumar went above and beyond. Great to work with. Communication was awesome, and he fixed my broken blog! Attitude was more than GREAT, always ready and willing. I will be back. SUPER DEVELOPER!",
    //             active: false,
    //         },
    //         {
    //             name: "Lori Wolfe-2",
    //             img: "female.png",
    //             region: "USA",
    //             feedback: "Chandankumar went above and beyond. Great to work with. Communication was awesome, and he fixed my broken blog! Attitude was more than GREAT, always ready and willing. I will be back. SUPER DEVELOPER!",
    //             active: true,
    //         },
    //         {
    //             name: "Lori Wolfe-3",
    //             img: "female.png",
    //             region: "USA",
    //             feedback: "Chandankumar went above and beyond. Great to work with. Communication was awesome, and he fixed my broken blog! Attitude was more than GREAT, always ready and willing. I will be back. SUPER DEVELOPER!",
    //             active: false,
    //         },
    //     ]
    // })

    // await prisma.contact.createMany({
    //     data: [
    //         {
    //             label: "phone",
    //             details: "+91 6207472428",
    //         }, {
    //             label: "email",
    //             details: "hirechandan@gmail.com",
    //         }, {
    //             label: "address",
    //             details: "Chas-Bokaro, Jharkhand- 827013",
    //         },
    //     ]
    // })


    // await prisma.organization.createMany({
    //     data: [
    //         {
    //             title: "Fiverr",
    //             location: "Israel",
    //         },
    //         {
    //             title: "All India Tour & Taxi",
    //             location: "India",
    //         }
    //     ]
    // })
    // const organizations = await prisma.organization.findMany();

    // // Getting organizationId to map with the experience
    // const fiverrOrganizationId =
    //     organizations.find((organization) => organization.title === "Fiverr")?.id || 1;
    // const allIndiaTourOrganizationId =
    //     organizations.find((organization) => organization.title === "All India Tour & Taxi")?.id || 1;

    // await prisma.experience.createMany({
    // data: [
    //     {
    //         from: "May, 2019",
    //         to: "Current",
    //         role: "Full-Stack & WordPress developer",
    //         experienceDetail: "Currently, I'm working at Fiverr as Freelancer by providing my services as Front End Developer over 100+ clients per month.Fiverr is an Israeli online marketplace for freelance services.The company provide a platform for freelancers to offer services to customers worldwide.",
    //         organization_id: fiverrOrganizationId,
    //     },
    //     {
    //         from: "Oct, 2017",
    //         to: "Nov, 2017",
    //         role: "WordPress Developer Intern",
    //         experienceDetail: "I've worked remotely with this company as a Senior WordPress Developer to build a Car Rental Website for their business. This is a Car Rental Service providing Company in over 3+ states across India which are located in Uttar Pradesh, India.",
    //         organization_id: allIndiaTourOrganizationId,
    //     },
    // ]
    // })


    // await prisma.institution.createMany({
    //     data: [
    //         {
    //             title: "Crescent Public School",
    //             location: "Jharkhand, India"
    //         },
    //         {
    //             title: "C.V. Raman Global University",
    //             location: "Odisha, India"
    //         }
    //     ]
    // })

    // const institutions = await prisma.institution.findMany();
    // //Getting institutionId to map with the education
    // const collegeInstitutionId =
    //     institutions.find((institution) => institution.title === "C.V. Raman Global University")?.id || 1;
    // const schoolInstitutionId =
    //     institutions.find((institution) => institution.title === "Crescent Public School")?.id || 1;

    // await prisma.education.createMany({
    //     data: [
    //         {
    //             from: "2019",
    //             to: "2023",
    //             level: "Bachelor of Technology In Computer Science & Soft. Engineering",
    //             info: "Currently, I'm pursuing my B.Tech Degree in Computer Science and Software Engineering from <a href = 'https://cgu-odisha.ac.in/' target = '_blank' rel = 'nofollow' > C.V.Raman Global University</a > since August 2019. This is an engineering and management institution located in Bhubaneswar, Odisha.",
    //             institution_id: collegeInstitutionId,
    //         },
    //         {
    //             from: "2017",
    //             to: "2019",
    //             level: "Higher Secondary Education",
    //             info: "I've completed my Intermediate with Science Stream(Physics, Chemistry, Maths and Computer Fundamentals) from CBSE Board in India.I studied from<label> Crescent PublicSchool</label > (Affiliated from CBSE Board), SEC - VI, BOKARO STEEL CITY, JHARKHAND.",
    //             institution_id: schoolInstitutionId,
    //         },
    //         {
    //             from: "2019",
    //             to: "2023",
    //             level: "Secondary Education",
    //             info: "I've completed my Matriculation from CBSE Board in India. I studied at <label> Crescent Public School</label > (Affiliated from CBSE Board), SEC - VI, BOKARO STEEL CITY, JHARKHAND.",
    //             institution_id: schoolInstitutionId,
    //         },
    //     ]
    // })

    //Certificate Section:-
    // await prisma.certificateHeaderDetail.createMany({
    //     data: [{
    //         authority: "HackerRank",
    //         issueDate: "08 Nov, 2021",
    //         expiryDate: "No Expiry",
    //         skill: "CSS",
    //         link: "https://google.com",
    //         description: "It covers topics like exploring Cascading and Inheritance, exploring text styling fundamentals, understanding the use of layouts in CSS, understand the boxing of elements in CSS, among others.",
    //     },]
    // })

    // await prisma.certificateMainDetail.createMany({
    //     data: [{
    //         largeImage: "HackerRank-Verfied-CSS-Certificate.png",
    //         imgText: "HackerRank CSS Certificate",
    //     }]
    // })


    // const certificateHeaderDetails = await prisma.certificateHeaderDetail.findMany();
    // const certificateMainDetails = await prisma.certificateMainDetail.findMany();

    // const first_certificateHeaderDetail_Id =
    //     certificateHeaderDetails.find(certificateHeaderDetail => certificateHeaderDetail.name === "CSS")?.id || 1;
    // const first_certificateMainDetail_Id =
    //     certificateMainDetails.find(certificateMainDetail => certificateMainDetail.imgText === "HackerRank CSS Certificate")?.id || 1;

    // await prisma.certificateDetail.createMany({
    //     data: [
    //         {
    //             header_details_id: first_certificateHeaderDetail_Id,
    //             main_details_id: first_certificateMainDetail_Id,
    //         }
    //     ]
    // })

    // const certificateDetails = await prisma.certificateDetail.findMany();
    // const firsCertificateDetail_Id =
    //     certificateDetails.find(certificateDetail => certificateDetail.header_details_id === 1)?.slug || "";

    // //Certificate Card:
    // await prisma.certificate.createMany({
    //     data: [
    //         {
    //             label: "CSS",
    //             src: "HackerRank-Verfied-CSS-Certificate.png",
    //             info: "HackerRank Verfied CSS Certificate",
    //             details_id: firsCertificateDetail_Id,
    //         }
    //     ]
    // })


    //PORTFOLIO SECTION:-
    // await prisma.portfolioHeaderDetail.createMany({
    //     data: [
    //         {
    //             from: "Apr, 2021",
    //             to: "Jul , 2021",
    //             client: "Chandan Kumar",
    //             link: "https://www.google.com",
    //             tools: ["HTML", "CSS", "JavaScript"],
    //             demo: "Email: Demo@demo.com / Pass: demo",
    //             description: "Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Officiis provident, vitae iure tempora voluptatum quasi sequi atque. Iusto doloremque, vero!",
    //         },
    //         {
    //             from: "Apr, 2022",
    //             to: "Jul , 2023",
    //             client: "Chandan Kumar",
    //             link: "https://www.google.com",
    //             tools: ["HTML", "CSS", "JavaScript"],
    //             demo: "Email: Demo@demo.com / Pass: demo",
    //             description: "Lorem, ipsum dolor, sit amet consectetur adipisicing elit. Officiis provident, vitae iure tempora voluptatum quasi sequi atque. Iusto doloremque, vero!",
    //         },
    //     ]
    // })

    // await prisma.portfolioMainDetail.createMany({
    //     data: [
    //         {
    //             imgSrc: ["/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp"],
    //             altText: "GoChat Admin Panel",
    //             titleText: "Admin Panel",
    //             webFrameLink: "https://webdevchandan.github.io/text-speech-converter/"
    //         },
    //         {
    //             imgSrc: ["/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp", "/img/portfolio/large/project-1/GoChat_Admin_Panel.webp"],
    //             altText: "GoChat Admin Panel",
    //             titleText: "Admin Panel",
    //             webFrameLink: "https://webdevchandan.github.io/text-speech-converter/"
    //         }
    //     ]
    // })

    // const portfolioHeaderDetails = await prisma.portfolioHeaderDetail.findMany();
    // const portfolioMainDetails = await prisma.portfolioMainDetail.findMany();

    // const firstPortfolioHeaderDetail_Id =
    //     portfolioHeaderDetails.find(portfolioHeaderDetail => portfolioHeaderDetail.id === 1)?.id || 1;

    // const firstPortfolioMainDetail_Id =
    //     portfolioMainDetails.find(portfolioMainDetail => portfolioMainDetail.id === 1)?.id || 1;

    // const secondPortfolioHeaderDetail_Id =
    //     portfolioHeaderDetails.find(portfolioHeaderDetail => portfolioHeaderDetail.id === 2)?.id || 2;

    // const secondPortfolioMainDetail_Id =
    //     portfolioMainDetails.find(portfolioMainDetail => portfolioMainDetail.id === 2)?.id || 2;

    // await prisma.portfolioDetail.createMany({
    //     data: [
    //         {
    //             header_details_id: firstPortfolioHeaderDetail_Id,
    //             main_details_id: firstPortfolioMainDetail_Id,
    //         },
    //         {
    //             header_details_id: secondPortfolioHeaderDetail_Id,
    //             main_details_id: secondPortfolioMainDetail_Id,
    //         }
    //     ]
    // })

    const portfolioDetails = await prisma.portfolioDetail.findMany();
    const firstPortfolioDetail_Id =
        portfolioDetails.find(portfolioDetail => portfolioDetail.id === 1)?.slug || "";
    const secondPortfolioDetail_Id =
        portfolioDetails.find(portfolioDetail => portfolioDetail.id === 2)?.slug || "";

    // await prisma.portfolioCategory.createMany({
    //     data: [
    //         {
    //             label: "All",
    //             active: true,
    //         }, {
    //             label: "Web application",
    //             active: false,
    //         }, {
    //             label: "WordPress",
    //             active: false,
    //         }, {
    //             label: "E-Commerce",
    //             active: false,
    //         }, {
    //             label: "Web Design & Development",
    //             active: false,
    //         }
    //     ]
    // })

    // const categories = await prisma.portfolioCategory.findMany();
    // const webCategory_Id =
    //     categories.find(category => category.label === "Web application")?.id || 1;
    // const wordPressCategory_Id =
    //     categories.find(category => category.label === "WordPress")?.id || 1;

    // await prisma.portfolio.createMany({
    //     data: [
    //         {
    //             title: "GoChat",
    //             src: "/img/portfolio/thumb/project-1/goChat_thumb.webp",
    //             altText: "GoChat by MoviesRocker.co",
    //             details_id: firstPortfolioDetail_Id,
    //             category_id: webCategory_Id,
    //         },
    //         {
    //             title: "GoChat (WordPress)",
    //             src: "/img/portfolio/thumb/project-1/goChat_thumb.webp",
    //             altText: "GoChat by MoviesRocker.co",
    //             details_id: secondPortfolioDetail_Id,
    //             category_id: wordPressCategory_Id
    //         }
    //     ]
    // })

    return NextResponse.json({
        name: "Database Seeded Successfully"
    });
}
