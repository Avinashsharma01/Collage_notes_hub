import { useEffect } from "react";

const CIVIL = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className="bg-[#1E2A38] text-white w-full min-h-screen flex flex-col items-center p-4">
            {/* Header Section */}
            <div className="flex justify-center items-center flex-col mb-12">
                <h1 className="text-5xl font-bold mb-6 text-blue-400 text-center">
                    Civil Engineering (CIVIL)
                </h1>
                <p className="text-lg text-center text-gray-300 max-w-2xl leading-relaxed">
                    The **Civil Engineering (CIVIL)** branch focuses on the
                    design, construction, and maintenance of infrastructure such
                    as buildings, roads, bridges, and water supply systems.
                    Civil engineers play a crucial role in shaping the physical
                    and environmental aspects of society.
                </p>
            </div>

            {/* Core Subjects Section */}
            <div className="bg-[#2A3A4D] p-4 rounded-lg w-full max-w-4xl mb-12 shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-blue-400">
                    Core Subjects
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        "Structural Engineering",
                        "Geotechnical Engineering",
                        "Transportation Engineering",
                        "Environmental Engineering",
                        "Water Resources Engineering",
                        "Construction Technology",
                        "Surveying & Geomatics",
                        "Concrete Technology",
                        "Project Management",
                    ].map((subject, index) => (
                        <li
                            key={index}
                            className="bg-[#3A4B5F] p-4 rounded-lg hover:bg-[#4A5B6F] transition-all duration-300 cursor-pointer"
                        >
                            <span className="text-lg font-medium">
                                {subject}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Career Opportunities Section */}
            <div className="bg-[#2A3A4D] p-4 rounded-lg w-full max-w-4xl mb-12 shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-blue-400">
                    Career Opportunities
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Civil Engineering graduates have a wide range of career
                    opportunities in fields such as:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                        "Structural Engineer",
                        "Geotechnical Engineer",
                        "Transportation Engineer",
                        "Environmental Engineer",
                        "Water Resources Engineer",
                        "Construction Manager",
                        "Urban Planner",
                        "Project Manager",
                        "Surveyor",
                    ].map((role, index) => (
                        <li
                            key={index}
                            className="bg-[#3A4B5F] p-3 rounded-lg hover:bg-[#4A5B6F] transition-all duration-300 cursor-pointer"
                        >
                            <span className="text-lg">{role}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Top Recruiters Section */}
            <div className="bg-[#2A3A4D] p-4 rounded-lg w-full max-w-4xl mb-12 shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-blue-400">
                    Top Recruiters
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Civil Engineering graduates are highly sought after by top
                    companies and organizations worldwide. Some of the leading
                    recruiters include:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        "Larsen & Toubro (L&T)",
                        "Tata Projects",
                        "Shapoorji Pallonji",
                        "Jacobs Engineering",
                        "AECOM",
                        "Gammon India",
                        "Hindustan Construction Company (HCC)",
                        "Afcons Infrastructure",
                    ].map((company, index) => (
                        <div
                            key={index}
                            className="bg-[#3A4B5F] p-4 rounded-lg flex items-center justify-center hover:bg-[#4A5B6F] transition-all duration-300 cursor-pointer"
                        >
                            <span className="text-lg font-medium">
                                {company}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Eligibility & Admission Section */}
            <div className="bg-[#2A3A4D] p-4 rounded-lg w-full max-w-4xl mb-12 shadow-lg">
                <h2 className="text-3xl font-semibold mb-6 text-blue-400">
                    Eligibility & Admission
                </h2>
                <p className="text-gray-300 leading-relaxed">
                    Admission to the Civil Engineering branch is typically based
                    on entrance exams like **JEE Mains**, **JEE Advanced**, or
                    state-level engineering entrance tests. Candidates must have
                    a strong foundation in mathematics and science to excel in
                    this field.
                </p>
            </div>
        </div>
    );
};

export default CIVIL;
