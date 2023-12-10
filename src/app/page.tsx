import BlurBlob from "./components/BlurBlob";
import Card from "./components/Card";
import CodeBlock from "./components/CodeBlock";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background-primary">
      <Navbar />
      <CodeBlock />
      <BlurBlob />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
