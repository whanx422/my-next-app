import templatesData from './templates.json';

export interface Template {
  id: number;
  name: string;
  category: string;
  content: string;
}

export const getAllTemplates = (): Template[] => {
  return templatesData as Template[];
};
