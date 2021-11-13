import library from './library.json';

const t = (key: keyof typeof library): string => {
  if (!library[key]) console.warn(`No text content found for key "${key}"`);
  return library[key] || '';
};

export default t;
