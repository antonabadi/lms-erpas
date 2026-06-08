'use client';

import React from 'react';
import { COURSES } from '@/mock-data';
import { ChevronLeft, PlayCircle, FileText, Lock, CheckCircle2, Clock } from 'lucide-react';
import Link from 'next/link';

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = COURSES.find(c => c.id === params.id) || COURSES[0];

  return (
    <div className="min-h-screen bg-base-200 pb-20">
      {/* Hero Header */}
      <div className="bg-primary text-primary-content p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/dashboard" className="btn btn-ghost btn-sm mb-4 gap-2">
            <ChevronLeft size={20} /> Kembali ke Dashboard
          </Link>
          <h1 className="text-3xl font-bold mb-2">{course.title}</h1>
          <p className="opacity-90 mb-4">Pengajar: {course.teacher}</p>
          <div className="flex items-center gap-4">
            <div className="radial-progress text-secondary" style={{"--value": course.progress, "--size": "3rem"} as any} role="progressbar">
              {course.progress}%
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Progres Belajar</p>
              <p className="text-xs opacity-75">Selesaikan semua materi untuk sertifikat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Syllabus */}
      <div className="max-w-4xl mx-auto p-4 -mt-6">
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-bold mb-6">Silabus Pelajaran</h2>
          
          <div className="space-y-4">
            {course.chapters.map((chapter) => (
              <div key={chapter.id} className="collapse collapse-arrow bg-base-200">
                <input type="checkbox" defaultChecked /> 
                <div className="collapse-title font-bold text-lg">
                  {chapter.title}
                </div>
                <div className="collapse-content p-0">
                  <ul className="menu w-full bg-base-100">
                    {chapter.lessons.map((lesson) => (
                      <li key={lesson.id} className="border-b last:border-0">
                        <Link 
                          href={`/lessons/${course.id}`} 
                          className="flex justify-between py-4"
                        >
                          <div className="flex items-center gap-3">
                            {lesson.type === 'video' ? <PlayCircle className="text-primary" /> : <FileText className="text-info" />}
                            <span>{lesson.title}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {lesson.duration && <span className="text-xs opacity-50 flex items-center gap-1"><Clock size={12}/> {lesson.duration}</span>}
                            {lesson.completed ? <CheckCircle2 size={20} className="text-success" /> : <Lock size={18} className="opacity-30" />}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}