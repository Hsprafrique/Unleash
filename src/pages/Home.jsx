import { Link, useNavigate } from "react-router-dom";
import { FaIdCard, FaClipboardCheck, FaCertificate, FaBoxOpen, FaMoneyCheckAlt, FaHandshake, FaBook, FaChartLine } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const navigate = useNavigate();

  // Redirect logic
  const handleRedirect = (path) => {
    if (path === "/survey") {
      navigate("/survey");
    } else {
      navigate("/coming-soon");
    }
  };

  // Features
  const features = [
    { title: "Digital Identity Verification", icon: <FaIdCard size={40} className="mx-auto mb-2 text-indigo-600" /> },
    { title: "Trade Readiness Test", icon: <FaClipboardCheck size={40} className="mx-auto mb-2 text-indigo-600" /> },
    { title: "Document & E-Certification", icon: <FaCertificate size={40} className="mx-auto mb-2 text-indigo-600" /> },
    { title: "Product & Service Catalog", icon: <FaBoxOpen size={40} className="mx-auto mb-2 text-indigo-600" /> },
    { title: "Payment Escrow", icon: <FaMoneyCheckAlt size={40} className="mx-auto mb-2 text-indigo-600" /> },
    { title: "Smart Matchmaking", icon: <FaHandshake size={40} className="mx-auto mb-2 text-indigo-600" /> },
    { title: "Knowledge Hub", icon: <FaBook size={40} className="mx-auto mb-2 text-indigo-600" /> },
    { title: "Government Dashboard", icon: <FaChartLine size={40} className="mx-auto mb-2 text-indigo-600" /> },
  ];

  // Stats
  const stats = [
    { label: "Registered Businesses", value: 1250 },
    { label: "Completed Surveys", value: 980 },
    { label: "Active Users", value: 430 },
    { label: "Transactions", value: 2100 }
  ];

  // Intersection Observer for stats
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 animate-fadeIn">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center p-12 space-y-6">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">UNLEASH</h1>
        <p className="text-white text-lg drop-shadow-md max-w-xl">
          Complete your trade readiness survey and unlock access to our digital trade portal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
          <button
            onClick={() => handleRedirect("/survey")}
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition shadow-lg"
          >
            Take Survey
          </button>
          <button
            onClick={() => handleRedirect("/coming-soon")}
            className="px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transform hover:scale-105 transition shadow-lg"
          >
            Other Features
          </button>
        </div>
      </section>

      {/* How It Works / Platform Features */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-indigo-100 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
              onClick={() => handleRedirect("/coming-soon")}
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">
                Brief description about {item.title.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits / Impact */}
      <section className="py-16 px-6 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100">

<h2 className="text-4xl font-bold text-center mb-12">Benefits & Impact</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8 max-w-5xl mx-auto text-center">
          {["Empower MSMEs", "Break Trade Barriers", "Ensure Compliance", "Drive Efficiency"].map((benefit, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition flex-1 hover:-translate-y-1 hover:scale-105 cursor-pointer">
              <h3 className="text-2xl font-semibold mb-2">{benefit}</h3>
              <p className="text-gray-700 text-sm">
                Explain how this benefit impacts businesses and trade.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portal Stats */}
      <section ref={statsRef} className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Portal Stats</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-12 max-w-5xl mx-auto text-center">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-extrabold text-indigo-600">
                {statsInView ? <CountUp start={0} end={stat.value} duration={2} separator="," /> : 0}
              </h3>
              <p className="text-gray-700 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6 mt-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleRedirect("/survey")} className="hover:underline">Take Survey</button></li>
              <li><button onClick={() => handleRedirect("/coming-soon")} className="hover:underline">About</button></li>
              <li><button onClick={() => handleRedirect("/coming-soon")} className="hover:underline">Contact Us</button></li>
              <li><button onClick={() => handleRedirect("/coming-soon")} className="hover:underline">Resources</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><button onClick={() => handleRedirect("/coming-soon")} className="hover:underline">Knowledge Hub</button></li>
              <li><button onClick={() => handleRedirect("/coming-soon")} className="hover:underline">Government Dashboard</button></li>
              <li><button onClick={() => handleRedirect("/coming-soon")} className="hover:underline">FAQ</button></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Contact</h3>
            <p>Email: support@unleashportal.com</p>
            <p>Phone: +123 456 7890</p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-indigo-400">FB</a>
              <a href="#" className="hover:text-indigo-400">TW</a>
              <a href="#" className="hover:text-indigo-400">LI</a>
            </div>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-8">© 2025 UNLEASH. All rights reserved.</p>
      </footer>
    </div>
  );
}