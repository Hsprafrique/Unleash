import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const nav = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    // simulated registration
    nav("/success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 
      bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500 animate-fadeIn">
      
      <form
        onSubmit={submit}
        className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Register</h2>

        <input
          className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-400"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
          Register
        </button>
      </form>
    </div>
  );
}