// import React from 'react';
import Footer from "./components/Footer"
import ShoesStore from "./components/ShoesStore"

const App = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <ShoesStore />
      <Footer />
    </div>
  )
}

export default App
