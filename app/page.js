"use client";
import News from "@/components/News";
import { useState } from "react";
import LoadingBar from 'react-top-loading-bar'

export default function Home() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <LoadingBar height={3} color="#f11946" progress={progress} />
      <News setProgress={setProgress} category="all" />
    </>
  );
}
