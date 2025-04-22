import Menu from "./Menu.jsx";
import NotePanel from "./NotePanel.jsx";

export default function DashboardLayout() {
  return (
    <div className="flex justify-center items-start gap-10 mt-[10rem]">
      <Menu items={["Add note", "Search", "Donate"]} />
      <NotePanel />
    </div>
  );
}
