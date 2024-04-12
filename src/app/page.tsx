import Sidebar from "./components/Sidebar";
import BoardTasks from "./components/BoardTask";

export default function Home() {
return (
 <main className="flex h-full">
   <Sidebar />
   <BoardTasks />
 </main>
);
}