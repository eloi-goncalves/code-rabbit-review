import Image from "next/image";
import styles from "./page.module.css";
import './globals.css'; // Import Tailwind CSS

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-500">
      <h1 className="text-white text-4xl font-bold">Hello, Tailwind!</h1>
    </div>
  );
}
