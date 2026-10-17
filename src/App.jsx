
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border-4 border-orange-400 p-8">

        <h1 className="text-3xl font-black text-center text-purple-800 mb-2">
          Student Registration
        </h1>

        <p className="text-center text-gray-500 font-semibold mb-8">
          Fill in your student details
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-gray-800 font-extrabold mb-2">
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border-2 border-purple-300 rounded-xl px-4 py-3 text-gray-900 font-semibold outline-none focus:border-purple-600 focus:ring-2 focus:ring-purple-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-extrabold mb-2">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border-2 border-blue-300 rounded-xl px-4 py-3 text-gray-900 font-semibold outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-extrabold mb-2">
              Course:
            </label>
            <input
              type="text"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              placeholder="Enter your course"
              className="w-full border-2 border-pink-300 rounded-xl px-4 py-3 text-gray-900 font-semibold outline-none focus:border-pink-600 focus:ring-2 focus:ring-pink-200"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-black text-lg py-3 rounded-xl border-2 border-orange-300 shadow-lg hover:shadow-xl transition duration-300"
          >
            Register Now
          </button>
        </form>

        {submitted && (
          <div className="mt-8 bg-green-50 border-2 border-green-500 rounded-2xl p-5">
            <h2 className="text-xl font-black text-green-700 mb-4">
              Student Details
            </h2>

            <p className="text-gray-800 font-bold mb-2">
              Name: <span className="text-purple-700">{name}</span>
            </p>

            <p className="text-gray-800 font-bold mb-2">
              Email: <span className="text-blue-700">{email}</span>
            </p>

            <p className="text-gray-800 font-bold">
              Course: <span className="text-pink-700">{course}</span>
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

export default App;
