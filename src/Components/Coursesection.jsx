import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Coursesection = () => {
  const courses = [
    {
      courseName: "Web Development",
      subjectName: "Frontend - React",
      videoSrc: "https://www.youtube.com/watch?v=UU4dvv5wwuM",
      professor: "Prof. John Doe",
    },
    {
      courseName: "Data Science",
      subjectName: "Python for Data Analysis",
      videoSrc: "https://www.youtube.com/watch?v=-beC3GAbBYM&list=PLMcAl_x-z5jl82FUq2yc4fDjgeIGfLAiy&index=2",
      professor: "Prof. Jane Smith",
    },
    {
      courseName: "UI/UX Design",
      subjectName: "Figma Essentials",
      videoSrc: "https://www.youtube.com/watch?v=A4hH8XePuDU&list=PLMcAl_x-z5jl82FUq2yc4fDjgeIGfLAiy&index=3",
      professor: "Prof. Emily Clark",
    },
    {
      courseName: "Cyber Security",
      subjectName: "Ethical Hacking Basics",
      videoSrc: "https://www.youtube.com/watch?v=VhQd9KvWsv8&list=PLMcAl_x-z5jl82FUq2yc4fDjgeIGfLAiy&index=4",
      professor: "Prof. Alan Turner",
    },
    {
      courseName: "Mobile App Development",
      subjectName: "Flutter & Dart",
      videoSrc: "https://www.youtube.com/watch?v=VhQd9KvWsv8&list=PLMcAl_x-z5jl82FUq2yc4fDjgeIGfLAiy&index=4",
      professor: "Prof. Olivia Watson",
    },
    {
      courseName: "AI Basics",
      subjectName: "Intro to Machine Learning",
      videoSrc: "https://www.youtube.com/watch?v=1Rs2ND1ryYc",
      professor: "Prof. Noah Lee",
    },
    {
      courseName: "Backend Development",
      subjectName: "Node.js Essentials",
      videoSrc: "https://www.w3schools.com/html/movie.mp4",
      professor: "Prof. Amelia Brown",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 4;

  const nextCourses = () => {
    setStartIndex((prev) =>
      prev + cardsPerPage < courses.length ? prev + cardsPerPage : 0
    );
  };

  const prevCourses = () => {
    setStartIndex((prev) =>
      prev - cardsPerPage >= 0
        ? prev - cardsPerPage
        : Math.max(courses.length - cardsPerPage, 0)
    );
  };

  const getEmbedUrl = (url) => {
    if (url.includes("youtube.com/watch")) {
      const videoId = url.split("v=")[1]?.split("&")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  const visibleCourses = courses.slice(startIndex, startIndex + cardsPerPage);


  return (
    <div className="bg-white min-h-screen py-10">
      <div className="relative w-[90%] mx-auto bg-black text-white rounded-2xl p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Classes</h1>
          <button className="bg-white text-black px-4 py-2 rounded-md font-medium">
            View More
          </button>
        </div>

        {/* Prev Button */}
        <button
          onClick={prevCourses}
          className="absolute top-1/2 -translate-y-1/2 left-[-20px] bg-white text-black p-3 rounded-full shadow-md z-10"
        >
          <FaArrowLeft />
        </button>

        {/* Next Button */}
        <button
          onClick={nextCourses}
          className="absolute top-1/2 -translate-y-1/2 right-[-20px] bg-white text-black p-3 rounded-full shadow-md z-10"
        >
          <FaArrowRight />
        </button>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl shadow-md overflow-hidden p-4 flex flex-col"
            >
              <h2 className="text-lg font-semibold mb-1">{course.courseName}</h2>
              <p className="text-gray-600 mb-2">{course.subjectName}</p>

              <div className="aspect-video mb-4">
                {course.videoSrc.includes("youtube") ? (
                  <iframe
                    className="w-full h-full rounded-lg"
                    src={getEmbedUrl(course.videoSrc)}
                    title="YouTube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video
                    controls
                    className="w-full h-full object-cover rounded-lg"
                    preload="metadata"
                  >
                    <source src={course.videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>

              <p className="text-gray-800 font-medium mt-auto">
                Professor: {course.professor}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Coursesection;
