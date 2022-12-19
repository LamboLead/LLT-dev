import * as Fetch from '/LLT/frontend/functionalities/data-management/fetch.js';

export default {
  id: 'mainpage-contact-form',
  title: '¡Contáctanos!',
  description: 'Envíanos un mensaje e iniciemos una conversación',
  fields: [
    {
      type: 'Input',
      name: 'name',
      label: 'Nombre',
      placeholder: 'Fulano de Tal',
      // class: 'custom-class',
      validation: {
        regex: /^([\w\d\,\.\?\&\!\$\(\)#%¡¿:áéíóúüñ]{1,}\s){1,}\.*[\w\d\s\,\.\?\!áéíóúüñ]{1,}$/,
        errorMsg: 'Tu nombre debe tener al menos dos palabras',
        classes: {
          correct: 'corrField',
          incorrect: 'incorrField'
        }
      }
    },
    {
      type: 'Input',
      name: 'email',
      label: 'E-mail',
      placeholder: 'fulano@detal.com',
      // class: 'custom-class',
      validation: {
        regex: /.*@(.|\.){1,}/,
        errorMsg: 'Escribe un e-mail válido'
      }
    },
    {
      type: 'Input',
      name: 'subject',
      label: 'Asunto',
      placeholder: 'Mi solicitud de contacto',
      // class: 'custom-class',
      validation: {
        regex: /^([\w\d\,\.\?\&\!\$\(\)#%¡¿:áéíóúüñ]{1,}\s){2,}\.*[\w\d\s\,\.\?\!áéíóúüñ]{1,}$/,
        errorMsg: 'Escribe al menos tres palabras'
      }
    },
    {
      type: 'TextArea',
      name: 'message',
      label: 'Mensaje',
      placeholder: 'Ideas, proyectos, solicitudes, comentarios... ¡Todo es bienvenido!',
      // class: 'custom-class',
      validation: {
        regex: /^([\w\d\,\.\?\&\!\$\(\)#%¡¿:áéíóúüñ]{1,}\s){4,}\.*[\w\d\s\,\.\?\!áéíóúüñ]{1,}$/,
        errorMsg: 'Al menos cinco palabras'
      }
    }
  ],
  classes: {
    fields: {
      correct: 'corr',
      incorrect: 'incorr'
    }
  },
  status: {
    loading: {
      class: 'is-form-submitting',
      message: 'Enviando solicitud',
      submitAgain: false
    },
    success: {
      class: 'form-has-submitted',
      message: '¡Solicitud enviada con éxito!<br>Pronto llegará un mensaje de confirmación a tu correo electrónico',
      submitAgain: true,
      resetOnSubmit: true,
      buttonMessage: 'Enviar nuevo mensaje'
    },
    error: {
      class: 'error-submitting-form',
      message: 'Hubo un error en el envío.<br>Verifica el email ingresado o inténtalo de nuevo más tarde',
      submitAgain: true,
      buttonMessage: 'Intentarlo de nuevo'
    },
    submissionDenied: {
      class: 'submission-denied',
      message: '¡Calmaos ventarrón!<br>Has enviado muchos mensajes últimamente',
      submitAgain: false,

    }
  },
  methods: {
    async submit(data) {
      let result = await Fetch.post('http://localhost:3007/contact-request', data);
      // console.log(result); // For debugging purposes
      return this.setUpStatus(result);
    },
    setUpStatus(result) {
      // This looks gross
      switch (result.status) {
        case 'OK':
          return 'success';
        case 'Failed':
          return 'error';
        default:
          return undefined
      }
    },
    validateSubmission() {
      return true;
    }
  }
}