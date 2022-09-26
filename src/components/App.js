import React, { useState } from "react";
import AppRouter from "components/Router";

function App() {
  const [isLoggedIn, setIsLoggendIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Jwitter</footer>
    </>
  );
}

export default App;
