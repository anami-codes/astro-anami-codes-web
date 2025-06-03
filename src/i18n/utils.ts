import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function gatTranslatedPath(url: URL, lang:string) {
  const path:string[] = url.pathname.split('/');
  var newPath:string = (lang == "en") ? "/es/" : "/en/";
  let index = 0;

  path.forEach(s => {
    if (index > 1 && s.length > 0) newPath += (s + "/");
    index++;
  });

  return newPath;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}