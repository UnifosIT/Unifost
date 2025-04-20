import React from 'react';

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">Welcome to Unifos IT</h1>
        <p className="text-lg text-blue-600">Innovating your digital journey.</p>
      </header>

      <main className="flex flex-col items-center space-y-6">
        <a
         
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition"
        >
          Explore Our Services
        </a>
      </main>

      <footer className="mt-16 text-gray-500 text-sm">
        © 2025 Unifos IT. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
