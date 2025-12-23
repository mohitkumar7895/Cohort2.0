import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Nav />

      {/* Page Content */}
      <main className="px-6 py-10 flex-grow">
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome to My React App 🚀
        </h1>
        <p className="mt-3 text-gray-600">
          Build your Kanban board efficiently
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default App;
