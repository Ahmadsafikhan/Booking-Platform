import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const state = useSelector((state)=> state)
  return (
    <div class="container mx-auto p-5 text-center">
      <h1 class="text-5xl">Home {JSON.stringify(state)}</h1>
    </div>
  );
};

export default Home;
