import { Question, Subject } from '@/types';
import { historyQuestions } from './history';
import { ccaQuestions } from './cca';
import { scienceQuestions } from './science';
import { socialStudiesQuestions } from './social-studies';
import { businessQuestions } from './business';
import { crsQuestions } from './crs';
import { pheQuestions } from './phe';

export const getQuestionsBySubject = (subject: Subject): Question[] => {
  switch (subject) {
    case 'history':
      return historyQuestions;
      case 'business':
      return businessQuestions;
    case 'cca':
      return ccaQuestions;
      case 'phe':
      return pheQuestions;
      case 'crs':
      return crsQuestions;
    case 'science':
      return scienceQuestions;
    case 'scs':
      return socialStudiesQuestions;
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
      return 'CCA';
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
    default:
      return 'CCA';
  }
};

export const getAllSubjects = (): Subject[] => {
  return ['history', 'cca', 'crs', 'science', 'business', 'scs', 'phe'];
};