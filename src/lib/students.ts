import { Student } from '@/types';

export const students: Student[] = [
  { 
    id: 'MTH029STU', 
    name: 'Okeowo Anjola', 
    class: 'JSS 2', 
    email: 'sodim@school.edu',
    subjects: [ 'history',  'business', 'scs', 'phe', 'english', 'vocational-studies', 'cca' ]
  },
  { 
    id: 'MTH032STU', 
    name: 'Olaokun Omodesire', 
    class: 'JSS 2', 
    email: 'salam@school.edu',
    subjects: [  'history', 'business', 'scs', 'phe', 'english', 'vocational-studies', 'cca' ]
  },
  { 
    id: 'MTH031STU', 
    name: 'Erinoso Olarenwaju', 
    class: 'JSS 2', 
    email: 'alamuy@school.edu',
    subjects: [  'history', 'business', 'scs', 'phe', 'english', 'vocational-studies', 'cca' ]
  },
  
{ 
    id: 'MTH030STU', 
    name: 'Adeoye Fathia', 
    class: 'JSS 2', 
    email: 'adefathia@school.edu',
    subjects: [  'history', 'business', 'scs', 'phe', 'english', 'vocational-studies', 'cca' ]
  },

  { 
    id: 'MTH033STU', 
    name: 'Oluwalose Rokeebat', 
    class: 'JSS 2', 
    email: 'alamuy@school.edu',
    subjects: [  'history', 'business', 'scs', 'phe', 'english', 'vocational-studies', 'cca' ]
  },
{ 
    id: 'MTH0027STU', 
    name: 'Wale Seun', 
    class: 'BASIC VI', 
    email: 'jsy@school.edu',
    subjects: [  'history', 'business', 'scs', 'phe', 'english', 'vocational-studies', 'cca' ]
  },
  { 
    id: 'MTH0028STU', 
    name: 'Kay Will', 
    class: 'JSS 2', 
    email: 'jsy@school.edu',
    subjects: [ 'history', 'business', 'scs', 'phe', 'english', 'vocational-studies', 'cca' ]
  },
  
  //  Add more students...
];

export const getStudentById = (id: string): Student | undefined => {
  return students.find(student => student.id === id);
};

export const getStudentByName = (name: string): Student | undefined => {
  return students.find(student => 
    student.name.toLowerCase().includes(name.toLowerCase())
  );
};

export const validateStudent = (id: string, name: string): { isValid: boolean; student?: Student } => {
  const student = getStudentById(id);
  if (student && student.name.toLowerCase() === name.toLowerCase()) {
    return { isValid: true, student };
  }
  return { isValid: false };
};