'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, Clock, Send, ChevronRight } from 'lucide-react';
import { QUIZZES } from '@/mock-data';

export default function QuizPage({ params }: { params: { courseId: string, quizId: string } }) {
  const quiz = QUIZZES[params.quizId as keyof typeof QUIZZES];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(quiz ? quiz.durationMinutes * 60 : 0);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  if (!quiz) return <div className="p-10 text-center">Data kuis tidak ditemukan.</div>;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswer = (optionId: string) => {
    setAnswers({ ...answers, [quiz.questions[currentIdx].id]: optionId });
  };

  const currentQuestion = quiz.questions[currentIdx];

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Header Kuis */}
      <header className="navbar bg-base-100 shadow-sm sticky top-0 z-30 px-4">
        <div className="flex-1">
          <Link href={`/courses/${params.courseId}`} className="btn btn-ghost btn-sm mr-2 lg:hidden">
            <ChevronLeft size={20} />
          </Link>
          <div>
            <h1 className="font-bold text-sm md:text-base truncate max-w-[200px] md:max-w-none">
              {quiz.title}
            </h1>
            <span className="text-xs opacity-50">Soal {currentIdx + 1} dari {quiz.questions.length}</span>
          </div>
        </div>
        <div className="flex-none gap-4">
          <div className={`flex items-center gap-1 font-mono font-bold ${timeLeft < 300 ? 'text-error animate-pulse' : 'text-primary'}`}>
            <Clock size={18} />
            {formatTime(timeLeft)}
          </div>
          <button className="btn btn-primary btn-sm hidden md:flex" onClick={() => (window as any).submit_modal.showModal()}>
            Kirim Jawaban
          </button>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row flex-1 p-4 gap-6 max-w-7xl mx-auto w-full">
        {/* Area Soal */}
        <main className="flex-1 space-y-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="badge badge-outline mb-2">Pertanyaan {currentIdx + 1}</div>
              <p className="text-lg md:text-xl font-medium leading-relaxed">
                {currentQuestion.text}
              </p>

              <div className="mt-8 space-y-3">
                {currentQuestion.options.map((opt) => (
                  <label 
                    key={opt.id} 
                    className={`flex items-center gap-4 p-4 border-2 rounded-xl cursor-pointer transition-all hover:bg-base-200 ${
                      answers[currentQuestion.id] === opt.id ? 'border-primary bg-primary/5' : 'border-base-300'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="quiz-opt" 
                      className="radio radio-primary radio-sm md:radio-md"
                      checked={answers[currentQuestion.id] === opt.id}
                      onChange={() => handleAnswer(opt.id)}
                    />
                    <span className="font-bold">{opt.id.toUpperCase()}.</span>
                    <span>{opt.text}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          {/* Navigasi Bawah Mobile */}
          <div className="flex justify-between items-center bg-base-100 p-4 rounded-xl shadow-lg md:shadow-none">
            <button 
              className="btn btn-ghost" 
              disabled={currentIdx === 0}
              onClick={() => setCurrentIdx(prev => prev - 1)}
            >
              <ChevronLeft size={20} /> Kembali
            </button>
            <button 
              className="btn btn-primary px-8"
              onClick={() => currentIdx < quiz.questions.length - 1 ? setCurrentIdx(prev => prev + 1) : (window as any).submit_modal.showModal()}
            >
              {currentIdx < quiz.questions.length - 1 ? (
                <>Lanjut <ChevronRight size={20} /></>
              ) : 'Selesai'}
            </button>
          </div>
        </main>

        {/* Sidebar Navigasi Soal (Desktop) */}
        <aside className="w-full lg:w-80 space-y-4">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h3 className="font-bold mb-4">Navigasi Soal</h3>
              <div className="grid grid-cols-5 gap-2">
                {quiz.questions.map((q, index) => (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(index)}
                    className={`btn btn-sm btn-square ${
                      currentIdx === index ? 'btn-primary' : 
                      answers[q.id] ? 'btn-success text-white' : 'btn-outline'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <div className="divider"></div>
              <button className="btn btn-block btn-outline btn-error md:hidden" onClick={() => (window as any).submit_modal.showModal()}>
                Kirim Semua Jawaban
              </button>
            </div>
          </div>
        </aside>
      </div>

      {/* Modal Konfirmasi */}
      <dialog id="submit_modal" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <Send className="mx-auto text-primary mb-4" size={48} />
          <h3 className="font-bold text-lg">Kumpulkan Jawaban?</h3>
          <p className="py-4">Pastikan semua soal telah terjawab. Anda tidak dapat mengubah jawaban setelah menekan tombol kirim.</p>
          <div className="modal-action flex flex-col gap-2">
            <button className="btn btn-primary" onClick={() => alert('Jawaban terkirim!')}>Ya, Kirim Sekarang</button>
            <form method="dialog">
              <button className="btn btn-ghost w-full">Periksa Kembali</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}