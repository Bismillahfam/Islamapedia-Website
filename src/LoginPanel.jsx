import { webUser } from "./AuthenticationBtn";

function LoginPanel(show) {
  if (show) {
    return (
      <div className="rounded-lg h-64">
        <h2>What would you like to be known as?</h2>
        <input
          type="text"
          className="border border-gray-300 rounded-lg p-2 w-full"
          placeholder="Enter your name"
        />
        <button
          className="bg-primary text-white rounded-lg p-2 mt-4 w-full"
          onClick={() => {
            setShow(false);
          }}
        >
          Finish
        </button>
      </div>
    );
  }
}
