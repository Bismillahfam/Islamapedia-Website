import "./index.css";

function Title() {
  return (
    <div className="w-1/2 h-1/3 bg-primary text-white dark:bg-primary dark:text-black p-10 rounded-br-3xl shadow-xl text-center fixed top-0 left-0 flex flex-col justify-center">
      <h1 className="text-7xl font-bold">Islamapedia</h1>
      <p className="text-2xl opacity-80 mt-4">A Vault of Islamic Knowledge</p>
    </div>
  );
}

export default Title;
