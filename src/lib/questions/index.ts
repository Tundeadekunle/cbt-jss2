import { Question, Subject } from '@/types';
import { historyQuestions } from './history';
import { ccaQuestions } from './cca';
import { scienceQuestions } from './science';
import { scsQuestions } from './social-studies';
import { businessQuestions } from './business';
import { crsQuestions } from './crs';
import { pheQuestions } from './phe';
import { englishQuestions } from './english';
import {vocationalStudiesQuestions} from './vocation';

export const getQuestionsBySubject = (subject: Subject): Question[] => {
  switch (subject) {
    case 'history':
      return historyQuestions;
    case 'vocational-studies':
      return vocationalStudiesQuestions;
      case 'business':
      return businessQuestions;
    case 'cca':
      return ccaQuestions;
      case 'phe':
      return pheQuestions;
      case 'science':
       return scienceQuestions;
    case 'scs':
      return scsQuestions;
      case 'english':
      return englishQuestions;
    default:
      return historyQuestions;
  }
};

export const getExamDurationBySubject = (subject: Subject): number => {
  // All subjects have 60-minute duration
  return 60; // 60 minutes in minutes
};

export const getSubjectDisplayName = (subject: Subject): string => {
  switch (subject) {
    case 'history':
      return 'History';
    case 'cca':
      return 'Cultural & Creative Arts';
      case 'phe':
      return 'Physical & Health Education';
      case 'crs':
      return 'CRS';
      case 'business':
      return 'Business Studies';
    case 'science':
      return 'Basic Science';
    case 'scs':
      return 'Social and Citizenship Studies';
      case 'english':
      return 'English Language';
      case 'vocational-studies':
      return 'Vocational Studies';
    default:
      return 'CCA';
  }
};

export const getAllSubjects = (): Subject[] => {
  return ['history', 'business', 'scs', 'science', 'phe', 'english', 'vocational-studies', 'cca'];
};


//  'cca', 'crs',  case 'crs':
//       return crsQuestions;
//     case 'science':
//       return scienceQuestions;
// case 'cca':
//       return ccaQuestions;