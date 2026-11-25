"use client";

import { useState } from "react";

interface TaskFormProps {
  onAddTask: (judul: string, deadline: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [judul, setJudul] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!judul || !deadline) return;

    onAddTask(judul, deadline);
    setJudul("");
    setDeadline("");
  };

  return (
    <section className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-xl font-semibold text-slate-800 mb-4">Tambah Tugas Baru</h2>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Nama tugas atau mata pelajaran..."
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
        />
        <input
          type="date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          className="px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-700"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-lg transition"
        >
          Simpan Tugas
        </button>
      </form>
    </section>
  );
}