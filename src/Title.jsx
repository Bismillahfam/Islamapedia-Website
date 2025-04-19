// Title.jsx
export default function Title() {
  return (
    <div className="relative w-[70%] h-64 bg-[#f4f4d9] text-black px-10 py-12 rounded-3xl shadow-2xl border-4 border-yellow-200 mx-auto mt-10 overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105">
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold font-serif text-blue-950">
          Islamapedia
        </h1>
        <p className="text-xl opacity-80 m-4 font-sans text-blue-950">
          A Vault of Islamic Knowledge
        </p>
      </div>
    </div>
  );
}
