import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { Sidebar } from "./components/Sidebar"
import { Dashboard } from "./components/Dashboard";
import { Schedule } from "./components/ui/Schedule";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar menuOpen={menuOpen} />
      {
        menuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMenuOpen(false)}></div>
      }
      <div className="flex-1">
        <header className="sm:px-6">
          <Navbar setMenuOpen={() => setMenuOpen(prev => !prev)} />
        </header>

        <main className="w-full flex flex-col sm:flex-row">
          <section className="flex flex-col flex-1 p-4 gap-4">
            <Dashboard />
            <div className="p-4 border rounded-md mx-2">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Announcement</p>
                <p className="text-xs border rounded-md p-1 text-gray-600">{new Date().toLocaleString()}</p>
              </div>
              <Schedule
                title="Outgoing schedule for every department"
                date={new Date().toLocaleString()}
                canPin={true}
                pinned={true}
                className="mt-5"
              />
              <Schedule
                title="Meeting HR Department"
                date={new Date().toLocaleString()}
                canPin={true}
                pinned={false}
                className="mt-2.5"
              />
              <Schedule
                title="IT Department need two more talents for UI/UX Designer position"
                date={new Date().toLocaleString()}
                canPin={true}
                pinned={false}
                className="mt-2.5"
              />
            </div>
          </section>
          <section className="max-w-sm m-5 gap-4 flex flex-col">
            <div className="rounded-lg text-white bg-blue-950 p-5">
              <p>Recent Activity</p>
              <p className="text-xs text-gray-400 mt-6">{new Date().toLocaleString()}</p>
              <p className="">You Posted a New Job</p>
              <p className="text-gray-300 text-sm">Kindly check the requirements and terms of work and make sure everything is right.</p>
              <div className="flex items-center justify-between mt-4 text-sm">
                <span>Today you makes 12 Activity.</span>
                <button className="bg-rose-500 py-2.5 px-5 rounded-md hover:bg-rose-700">
                  See All Activity
                </button>
              </div>
            </div>

            <div className="p-4 border rounded-md">
              <div className="flex justify-between items-center">
                <p className="font-semibold">Upcoming Schedule</p>
                <p className="text-xs border rounded-md p-1 text-gray-600">{new Date().toLocaleString()}</p>
              </div>
              <p className="text-xs text-gray-600 mt-4">Priority</p>
              <Schedule
                title="Meeting with Client"
                date={new Date().toLocaleString()}
                className="mt-2.5"
              />
              <p className="text-xs text-gray-600 mt-4">Other</p>
              <Schedule
                title="Interview with Candidate"
                date={new Date().toLocaleString()}
                className="mt-2.5"
              />
              <Schedule
                title="Short meeting with product designer from IT Department"
                date={new Date().toLocaleString()}
                className="mt-2.5"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App