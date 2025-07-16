import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import NotificationPage from "./pages/NotificationPage";
import CallPage from "./pages/CallPage";
import OnboardingPage from "./pages/OnboardingPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className=" h-screen" data-theme="night">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
      </Routes>

      <Toaster />
    </div>
  );
};

export default App;
