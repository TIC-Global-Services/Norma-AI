"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

interface PageWrapperProps {
  children: React.ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsReady(true);
  };

  const handleFadeComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="bg-black min-h-screen">
      {/* Content - hidden*/}
      <div
        className={`min-h-screen transition-opacity duration-700 ease-out ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
        onTransitionEnd={isReady ? handleFadeComplete : undefined}
      >
        {children}
      </div>

      {/* Loading Screen */}
      {isLoading && (
        <div
          className={`fixed inset-0 z-[9999] bg-black transition-opacity duration-500 ${
            isReady ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onTransitionEnd={isReady ? () => setIsLoading(false) : undefined}
        >
          <LoadingScreen onComplete={handleLoadingComplete} />
        </div>
      )}
    </div>
  );
}
