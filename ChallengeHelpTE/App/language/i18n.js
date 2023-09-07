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
          nome: 'Name',
          ER_user: 'Type your user',
          ER_user_len: 'Minimum 4 characters',
          ER_senha: 'Type your password',
          ER_senha_len: 'Minimum 6 characters',
          ER_nome: 'Type your name',
          ER_email: 'Email is required.',
          ER_invalid_email: 'Invalid e-mail',
          ER_idade: 'Age is required',
          ER_invalid_idade: 'Invalid Age',
          ER_int: 'Must be an integer number',
          ER_positivo: 'Must be an positive number.',
          confirmar : 'CONFIRM'
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
          nome: 'Nome',
          ER_user: 'Informe seu usuário',
          ER_user_len: 'Deve conter no mínimo 4 dígitos',
          ER_senha: 'Digite uma senha',
          ER_senha_len: 'Deve conter no mínimo 6 dígitos',
          ER_nome: 'Informe seu nome',
          ER_email: 'E-mail é obrigatório',
          ER_invalid_email: 'Insira um e-mail válido',
          ER_idade: 'Informe sua idade',
          ER_invalid_idade: 'Idade inválida',
          ER_int: 'Deve ser um número inteiro',
          ER_positivo: 'Deve ser um número positivo',
          confirmar : 'CONFIRMAR'
        },
      },
      // Adicione mais idiomas e traduções conforme necessário
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'en', // Idioma de fallback se o idioma do dispositivo não estiver disponível
    interpolation: {
      escapeValue: false, // Permite interpolção de variáveis nas traduções
    },
  });

export default i18n;
