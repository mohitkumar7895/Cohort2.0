import { useState } from "react";
import Men from "./components/Men";
import Women from "./components/Women";


const App = () => {
  const [gender, setGender] = useState("Male");

  return (
    <div className="parent p-6">
      <h1 className="text-xl font-semibold mb-4">
        Your gender is ~ <span className="text-blue-600">{gender}</span>
      </h1>

      <div className="flex gap-6">
        <Men gender={gender} setGender={setGender} />
        <Women gender={gender} setGender={setGender} />
      </div>
    </div>
  );
};

export default App;
