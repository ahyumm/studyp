"use client";

export interface Task {
  id: number;
  judul: string;
  deadline: string;
  status: "Belum Selesai" | "Selesai";
}

interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export default function TaskList({ tasks, onToggleStatus, onDeleteTask }: TaskListProps) {
  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Daftar Tugas & Deadline</h2>
      {tasks.length === 0 ? (
        <p className="text-slate-400 text-center py-8">Belum ada tugas yang ditambahkan.</p>
      ) : (
        <div className="space-y-3">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-xl border border-slate-200 bg-slate-50 gap-4"
            >
              <div>
                <h3 className={`font-medium text-lg ${task.status === "Selesai" ? "line-through text-slate-400" : "text-slate-800"}`}>
                  {task.judul}
                </h3>
                <p className="text-sm text-slate-500 mt-0.5">Deadline: {task.deadline}</p>
              </div>
              <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
                <button
                  onClick={() => onToggleStatus(task.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition ${
                    task.status === "Selesai"
                      ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                      : "bg-amber-100 text-amber-700 hover:bg-amber-200"
                  }`}
                >
                  {task.status}
                </button>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-red-500 hover:text-red-700 text-sm font-medium px-2 py-1"
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}