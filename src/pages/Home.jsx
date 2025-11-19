import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 animate-fadeIn">

      {/* Hero / Landing Banner */}
      <section className="flex flex-col items-center justify-center text-center p-12 space-y-6">
        <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">UNLEASH</h1>
        <p className="text-white text-lg drop-shadow-md max-w-xl">
          Complete your trade readiness survey and unlock access to our digital trade portal.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
          <Link
            to="/survey"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transform hover:scale-105 transition shadow-lg"
          >
            Start Survey
          </Link>
          <Link
            to="/coming-soon"
            className="px-8 py-4 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700 transform hover:scale-105 transition shadow-lg"
          >
            Other
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            "Digital Identity Verification",
            "Trade Readiness Test",
            "Document & E-Certification",
            "Product & Service Catalog",
            "Payment Escrow",
            "Smart Matchmaking",
            "Knowledge Hub",
            "Government Dashboard"
          ].map((item, idx) => (
            <div key={idx} className="bg-indigo-100 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transition">
              <h3 className="text-xl font-semibold mb-2">{item}</h3>
              <p className="text-gray-700 text-sm">
                {/* Placeholder for description */}
                Brief description about {item.toLowerCase()}.
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
            <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition flex-1">
              <h3 className="text-2xl font-semibold mb-2">{benefit}</h3>
              <p className="text-gray-700 text-sm">
                {/* Placeholder */}
                Explain how this benefit impacts businesses and trade.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trade Stats / Numbers */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-4xl font-bold text-center mb-12">Portal Stats</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-12 max-w-5xl mx-auto text-center">
          {[
            { label: "Registered Businesses", value: 1250 },
            { label: "Completed Surveys", value: 980 },
            { label: "Active Users", value: 430 },
            { label: "Transactions", value: 2100 }
          ].map((stat, idx) => (
            <div key={idx}>
              <h3 className="text-4xl font-extrabold text-indigo-600">{stat.value}</h3>
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
              <li><Link to="/survey" className="hover:underline">Take Survey</Link></li>
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link to="/resources" className="hover:underline">Resources</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/knowledge-hub" className="hover:underline">Knowledge Hub</Link></li>
              <li><Link to="/government-dashboard" className="hover:underline">Government Dashboard</Link></li>
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
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