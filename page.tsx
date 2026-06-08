'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Menu, CheckCircle2, PlayCircle, FileText } from 'lucide-react';
import { COURSES } from '@/mock-data';
import Link from 'next/link';

export default function LessonPlayer({ params }: { params: { courseId: string } }) {
  const course = COURSES.find(c => c.id === params.courseId) || COURSES[0];
  const [activeLesson, setActiveLesson] = useState(course.chapters[0].lessons[0]);

  return (
    <div className="flex flex-col h-screen bg-base-100">
      {/* Top Navigation */}
      <div className="navbar bg-base-100 border-b px-4 gap-2">
        <Link href="/dashboard" className="btn btn-ghost btn-sm">
          <ChevronLeft size={20} /> Kembali
        </Link>
        <div className="flex-1">
          <h1 className="font-bold text-sm md:text-base truncate">{course.title}</h1>
        </div>
        <div className="flex-none lg:hidden">
          <label htmlFor="course-drawer" className="btn btn-square btn-ghost">
            <Menu size={24} />
          </label>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-base-200">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Video Player / Content Viewer */}
            <div className="card bg-base-100 shadow-xl overflow-hidden aspect-video">
              {activeLesson.type === 'video' ? (
                <iframe
                  className="w-full h-full"
                  src={activeLesson.videoUrl}
                  title={activeLesson.title}
                  allowFullScreen
                ></iframe>
              ) : (
                <div className="p-8 prose max-w-none">
                  <h2>{activeLesson.title}</h2>
                  <p>{activeLesson.content || "Materi teks sedang dimuat..."}</p>
                </div>
              )}
            </div>

            {/* Lesson Info */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-base-100 p-6 rounded-2xl shadow-sm">
              <div>
                <h2 className="text-xl font-bold">{activeLesson.title}</h2>
                <p className="opacity-60 text-sm">Tipe: {activeLesson.type.toUpperCase()}</p>
              </div>
              <button className="btn btn-primary w-full md:w-auto">
                Tandai Selesai & Lanjut <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </main>

        {/* Sidebar Navigation (Desktop) */}
        <aside className="hidden lg:block w-80 border-l overflow-y-auto bg-base-100">
          <div className="p-4 font-bold border-b bg-base-200">Kurikulum Kursus</div>
          <ul className="menu w-full p-2">
            {course.chapters.map((chapter) => (
              <li key={chapter.id}>
                <details open>
                  <summary className="font-semibold">{chapter.title}</summary>
                  <ul>
                    {chapter.lessons.map((lesson) => (
                      <li key={lesson.id}>
                        <button 
                          className={`flex justify-between ${activeLesson.id === lesson.id ? 'active' : ''}`}
                          onClick={() => setActiveLesson(lesson)}
                        >
                          <span className="flex items-center gap-2">
                            {lesson.type === 'video' ? <PlayCircle size={16}/> : <FileText size={16}/>}
                            {lesson.title}
                          </span>
                          {lesson.completed && <CheckCircle2 size={16} className="text-success" />}
                        </button>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}