import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NotificationCard from "./components/NotificationCard";
import { useProductStore } from "./store/product";
import { useEffect } from "react";

export default function App() {
  const { notification, setNotification } = useProductStore();

  useEffect(() => {
    if (notification.message) {
      const timer = setTimeout(() => {
        setNotification('', false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [notification.message, setNotification]);

  return (
    <div className="
      min-h-screen
      bg-white text-black
      dark:bg-gray-900 dark:text-white
      transition-colors
    ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
      <div className="fixed bottom-40 left-1/2 transform -translate-x-1/2">
        {notification.message && (
          <NotificationCard message={notification.message} success={notification.success} onClose={() => setNotification('',false)} />
        )}
      </div>
    </div>
  );
}
