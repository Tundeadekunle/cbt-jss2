import { Question, Subject } from '@/types';
import { historyQuestions } from './history';
import { ccaQuestions } from './cca';
import { scienceQuestions } from './science';
import { socialStudiesQuestions } from './social-studies';
import { businessQuestions } from './business';

export const getQuestionsBySubject = (subject: Subject): Question[] => {
  switch (subject) {
    case 'history':
      return historyQuestions;
      case 'business':
      return businessQuestions;
    case 'cca':
      return ccaQuestions;
    case 'science':
      return scienceQuestions;
    case 'social-studies':
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
    case 'science':
      return 'Basic Science';
    case 'social-studies':
      return 'Social Studies';
    default:
      return 'CCA';
  }
};

export const getAllSubjects = (): Subject[] => {
  return ['history', 'cca', 'science', 'social-studies'];
};