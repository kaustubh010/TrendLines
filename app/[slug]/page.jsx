"use client";
import { React, useState } from "react";
import News from "@/components/News";
import LoadingBar from "react-top-loading-bar";
import { useParams } from "next/navigation";

export default function Post() {
  const params = useParams();
  const slug = params.slug;
  const [progress, setProgress] = useState(0);
  if (slug == "sports") {
    return (
      <>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <News setProgress={setProgress} category="sports" />
      </>
    );
  } else if (slug == "technology") {
    return (
      <>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <News setProgress={setProgress} category="technology" />
      </>
    );
  } else if (slug == "world") {
    return (
      <>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <News setProgress={setProgress} category="world" />
      </>
    );
  } else if (slug == "finance") {
    return (
      <>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <News setProgress={setProgress} category="business" />
      </>
    );
  } else if (slug == "entertainment") {
    return (
      <>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <News setProgress={setProgress} category="movies" />
      </>
    );
  } else if (slug == "science") {
    return (
      <>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <News setProgress={setProgress} category="science" />
      </>
    );
  } else if (slug == "health") {
    return (
      <>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <News setProgress={setProgress} category="health" />
      </>
    );
  }
};
