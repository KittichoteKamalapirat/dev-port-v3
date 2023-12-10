import BlurBlob from "./components/BlurBlob";
import Card from "./components/Card";
import CodeBlock from "./components/CodeBlock";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background-primary">
      <Navbar />
      <CodeBlock />
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"></div>
      <BlurBlob />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Card />
        <Card />
        <Card />
        <Card />

        <p className="text-foreground-primary">Foreground primary</p>
        <p className="text-foreground-secondary">Foreground primary</p>
        <p className="text-foreground-tertiary">Foreground primary</p>
        <p className="text-background-primary">Background primary</p>
      </div>
    </main>
  );
}
