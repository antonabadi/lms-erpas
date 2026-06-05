'use client';

import React from 'react';
import { Users, BookOpen, GraduationCap, Plus, FileText, Settings } from 'lucide-react';
import { TEACHER_PROFILE, STUDENT_GRADES, TEACHER_COURSES } from '@/mock-data';

export default function TeacherDashboard() {
  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Halo, {TEACHER_PROFILE.name}!</h1>
            <p className="opacity-70">Selamat datang di Panel Pengajar {TEACHER_PROFILE.school}.</p>
          </div>
          <button className="btn btn-primary">
            <Plus size={20} /> Buat Materi Baru
          </button>
        </div>

        {/* Stats Summary */}
        <div className="stats shadow w-full bg-base-100 overflow-x-auto">
          <div className="stat">
            <div className="stat-figure text-primary">
              <Users size={32} />
            </div>
            <div className="stat-title">Total Siswa</div>
            <div className="stat-value text-primary">60</div>
            <div className="stat-desc">Dari 2 Kelas yang diajar</div>
          </div>
          
          <div className="stat">
            <div className="stat-figure text-secondary">
              <BookOpen size={32} />
            </div>
            <div className="stat-title">Materi Aktif</div>
            <div className="stat-value text-secondary">12</div>
            <div className="stat-desc">4 Bab telah selesai</div>
          </div>

          <div className="stat">
            <div className="stat-figure text-accent">
              <GraduationCap size={32} />
            </div>
            <div className="stat-title">Rata-rata Nilai</div>
            <div className="stat-value text-accent">76.5</div>
            <div className="stat-desc">Meningkat 5% dari bulan lalu</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Daftar Kursus/Materi */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <FileText size={20} /> Mata Pelajaran
            </h2>
            {TEACHER_COURSES.map((course) => (
              <div key={course.id} className="card bg-base-100 shadow-sm border border-base-300">
                <div className="card-body p-4">
                  <h3 className="font-bold">{course.name}</h3>
                  <div className="flex justify-between text-xs opacity-70 mt-2">
                    <span>{course.students} Siswa</span>
                    <span>Avg: {course.avgScore}</span>
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-xs btn-outline">Kelola</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Buku Nilai (Gradebook) */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xl font-bold flex items-center gap-2">
              <Settings size={20} /> Buku Nilai Siswa
            </h2>
            <div className="overflow-x-auto bg-base-100 rounded-xl shadow-sm border border-base-300">
              <table className="table table-zebra w-full">
                <thead>
                  <tr>
                    <th>Nama Siswa</th>
                    <th>Kelas</th>
                    <th>Kuis</th>
                    <th>Nilai</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {STUDENT_GRADES.map((grade) => (
                    <tr key={grade.id}>
                      <td className="font-medium">{grade.name}</td>
                      <td>{grade.class}</td>
                      <td>{grade.quizTitle}</td>
                      <td className="font-bold">{grade.score}</td>
                      <td>
                        <div className={`badge badge-sm ${grade.status === 'Lulus' ? 'badge-success' : 'badge-error'} text-white`}>
                          {grade.status}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}