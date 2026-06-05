export const COURSES = [
  {
    id: 'math-101',
    title: 'Matematika Dasar (Aljabar)',
    teacher: 'Bpk. Budi Susanto',
    progress: 65,
    chapters: [
      {
        id: 'ch-1',
        title: 'Bab 1: Pengenalan Aljabar',
        lessons: [
          { id: 'l-1', title: 'Apa itu Variabel?', type: 'video', duration: '10:00', completed: true, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'l-2', title: 'Operasi Dasar Aljabar', type: 'text', content: 'Aljabar adalah cabang matematika yang menggunakan simbol...', completed: true },
          { id: 'l-3', title: 'Latihan Soal Sederhana', type: 'quiz', completed: false },
        ]
      },
      {
        id: 'ch-2',
        title: 'Bab 2: Persamaan Linear',
        lessons: [
          { id: 'l-4', title: 'Satu Variabel', type: 'video', duration: '15:00', completed: false, videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
          { id: 'l-5', title: 'Dua Variabel', type: 'text', content: 'Persamaan linear dua variabel memiliki bentuk umum ax + by = c...', completed: false },
        ]
      }
    ]
  }
];

export const QUIZZES = {
  'l-3': {
    id: 'l-3',
    title: 'Kuis Latihan Aljabar Dasar',
    durationMinutes: 30,
    questions: [
      {
        id: 'q1',
        text: 'Berapakah nilai x dari persamaan 2x + 4 = 10?',
        options: [
          { id: 'a', text: '2' },
          { id: 'b', text: '3' },
          { id: 'c', text: '4' },
          { id: 'd', text: '5' },
          { id: 'e', text: '6' }
        ]
      },
      {
        id: 'q2',
        text: 'Manakah di bawah ini yang merupakan variabel dalam ekspresi 3y + 7?',
        options: [
          { id: 'a', text: '3' },
          { id: 'b', text: 'y' },
          { id: 'c', text: '7' },
          { id: 'd', text: '+' },
          { id: 'e', text: 'Tidak ada' }
        ]
      }
    ]
  }
};

export const USER_PROFILE = {
  name: 'Ahmad Siswa',
  role: 'Siswa',
  school: 'SMA 1 Yayasan Pendidikan',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad'
};