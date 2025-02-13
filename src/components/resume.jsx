import React from 'react';

const Resume = () => {
    return (
        <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200">
            <header className="text-center mb-8">
                <img 
                    className="w-32 h-32 mx-auto rounded-full border-4 border-gray-300 shadow-md" 
                    src="https://media.licdn.com/dms/image/v2/D5603AQEbOr3huxeb2w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1695266645091?e=1744243200&v=beta&t=5yf6GBMar_in2B9z0zg1m2mlQDRBYIwzWrgp2urTZ7Q" 
                    alt="Srujan Moolya" 
                />
                <h1 className="text-3xl font-bold text-gray-800 mt-4">Srujan Moolya</h1>
                <p className="text-lg text-gray-600">Web and Game Developer</p>
            </header>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Summary</h2>
                <p className="text-gray-700 mt-2">
                    Passionate web and game developer with experience in creating dynamic and engaging applications. Skilled in various programming languages and frameworks, with a strong focus on delivering high-quality user experiences.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Skills</h2>
                <ul className="grid grid-cols-2 gap-2 mt-2 text-gray-700">
                    <li>JavaScript, React, Node.js</li>
                    <li>HTML, CSS, Tailwind CSS</li>
                    <li>Unity, C#</li>
                    <li>Git, GitHub</li>
                    <li>Firebase, MongoDB</li>
                    <li>Agile Development</li>
                </ul>
            </section>

            <section className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Experience</h2>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">Web Developer</h3>
                    <p className="text-gray-600">Company Name - Location | Jan 2020 - Present</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Developed and maintained web applications using React and Node.js.</li>
                        <li>Collaborated with designers to create responsive and user-friendly interfaces.</li>
                        <li>Implemented RESTful APIs and integrated third-party services.</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold text-gray-800">Game Developer</h3>
                    <p className="text-gray-600">Company Name - Location | Jan 2018 - Dec 2019</p>
                    <ul className="list-disc list-inside text-gray-700 mt-2">
                        <li>Developed 2D and 3D games using Unity and C#.</li>
                        <li>Worked on game mechanics, physics, and AI.</li>
                        <li>Collaborated with artists and designers to create engaging gameplay experiences.</li>
                    </ul>
                </div>
            </section>

            <section>
                <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2">Education</h2>
                <div className="mt-2">
                    <h3 className="text-xl font-semibold text-gray-800">Master of Computer Applications (MCA)</h3>
                    <p className="text-gray-600">PPC College, Udupi - Mangalore University</p>
                    <p className="text-gray-600">2024 - 2026</p>
                </div>
                <div className="mt-4">
                    <h3 className="text-xl font-semibold text-gray-800">Bachelor of Computer Applications (BCA)</h3>
                    <p className="text-gray-600">St. Mary's College, Shirva - Mangalore University</p>
                    <p className="text-gray-600">2021 - 2024</p>
                </div>
            </section>
        </div>
    );
};

export default Resume;
