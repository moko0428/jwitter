import React, { useState } from "react";
import AppRouter from "components/Router";
import fbase from "fbase";
import authService from "../fbase";
function App() {
  console.log(authService.currentUser);
  const auth = fbase.auth();
  const [isLoggedIn, setIsLoggendIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} />
      <footer>&copy; {new Date().getFullYear()} Jwitter</footer>
    </>
  );
}

export default App;
