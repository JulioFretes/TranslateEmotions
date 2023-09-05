import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import 'intl-pluralrules';


i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          login: 'SIGN IN',
          cadastro: 'SIGN UP',
          prox: 'NEXT',
          slogan1: 'Understanding Beyond Words',
          slogan2: 'The AI that Translates Your Emotions.',
          user: 'Username',
          senha: 'Password',
          idade: 'Age',
          PH_user: 'Example: User123',
          PH_senha: 'Example: Password123',
          PH_nome: 'Example: Jhon',
          PH_email: 'Example: John@email.com',
          PH_idade: 'Example: 25',
          nome: 'Name'
        },
      },
      pt: {
        translation: {
          login: 'ENTRAR',
          cadastro: 'CADASTRO',
          prox: 'PRÓXIMO',
          slogan1: 'Compreendendo Além das Palavras',
          slogan2: 'A IA que Traduz Suas Emoções.',
          user: 'Nome de usuário',
          senha: 'Senha',
          idade: 'idade',
          PH_user: 'Exemplo: Usuário123',
          PH_senha: 'Exemplo: Senha123',
          PH_nome: 'Exemplo: João',
          PH_email: 'João@email.com',
          PH_idade: 'Exemplo: 25',
          nome: 'Nome'
        },
      },
      // Adicione mais idiomas e traduções conforme necessário
    },
    lng: 'en', // Idioma padrão
    fallbackLng: 'en', // Idioma de fallback se o idioma do dispositivo não estiver disponível
    interpolation: {
      escapeValue: false, // Permite interpolção de variáveis nas traduções
    },
  });

export default i18n;
