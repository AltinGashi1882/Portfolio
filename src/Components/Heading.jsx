
export default function Heading() {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold text-white md:text-5xl lg:text-6xl leading-tight">
        Web{" "}
        <mark className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-3 py-1 rounded-2xl">
          Developer
        </mark>
      </h1>
      <p className="pb-10 text-lg font-medium text-white lg:text-xl max-w-2xl">
        Passionate web developer crafting scalable, responsive web applications
        with clean, efficient, and user-centric code.
      </p>
    </div>
  );
}
