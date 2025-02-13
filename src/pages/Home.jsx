import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
            {/* Hero Section */}
            <header className="max-w-3xl">
                <h1 className="text-5xl font-extrabold text-gray-800 mb-4">Srujan Moolya</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Web & Game Developer | Passionate about building digital experiences.
                </p>
                <button className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-lg shadow-md hover:bg-blue-700 transition">
                    Explore My Work
                </button>
            </header>

            {/* About Me Section */}
            <section className="max-w-4xl mt-12 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Me</h2>
                <p className="text-gray-700 text-lg">
                    I am a full-stack web and game developer with experience in building dynamic web applications and interactive games.
                    My expertise lies in JavaScript, React.js, Tailwind CSS, Firebase, and Unity for game development. I thrive on crafting
                    high-quality digital products with engaging user experiences.
                </p>
            </section>

            {/* Services Section */}
            <section className="max-w-4xl mt-12">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">What I Do</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">Web Development</h3>
                        <p className="text-gray-600 mt-2">Building modern, responsive, and scalable web applications.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">Game Development</h3>
                        <p className="text-gray-600 mt-2">Designing and developing engaging 2D and 3D games using Unity.</p>
                    </div>
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">UI/UX Design</h3>
                        <p className="text-gray-600 mt-2">Creating visually appealing and user-friendly interfaces.</p>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="max-w-4xl mt-12 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Let's Connect</h2>
                <p className="text-gray-700 text-lg">
                    Looking for a developer to bring your idea to life? Let's work together!
                </p>
                <div className="mt-4">
                    <a
                        href="mailto:srujan@example.com"
                        className="text-blue-600 font-medium text-lg hover:underline"
                    >
                        srujan@example.com
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Home;
