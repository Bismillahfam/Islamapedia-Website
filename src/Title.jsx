import "./index.css";
function TitleCard() {
  return (
    <div className="w-96 bg-primary text-white dark:bg-primary dark:text-black p-6 rounded-b-2xl shadow-md text-center fixed top-0 left-1/2 -translate-x-1/2">
      <h1 className="text-5xl font-bold">Islamapedia</h1>
      <p className="text-md opacity-80">A Vault of Islamic Knowledge</p>
    </div>
  );
}

export default TitleCard;
