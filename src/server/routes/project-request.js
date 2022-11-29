const express = require('express');
const router = express.Router();

const command = require('/LLT/backend/DB-management/SQL/commands.js');
const DAO = require('../database.js');
const RequestHandler = require('/LLT/backend/Requests/RequestHandler.js');

const sendEmail = require('/LLT/backend/functionalities/email-sending/sendEmail.js');

router.post('/project-request', async (request, response) => {
  const body = request.body;
  const handler = new RequestHandler([
    {
      name: 'sendToAdmin',
      function: async () => await sendToAdmin(body)
    },
    {
      name: 'sendToUser',
      function: async () => await sendToUser(body)
    },
    {
      name: 'saveOnDatabase',
      function: async () => {
        let insertedRows = await DAO.executeCommand(
          new command.Insert('requests', [
            {
              // 'subject': body.subject,
              'from_name': body.name,
              'from_email': body.email,
              'message': body.message,
              'type_id': 2, // project request
              'additional_data': JSON.stringify(body.additionalData)
            }
          ])
        );
        return insertedRows;
      }
    }
  ]);
  let results = await handler.execute();
  response.json(results);
});

const sendToAdmin = async (body) => {
  let output = `
    <p>Hay una nueva solicitud de proyecto</p>
    <h3>Detalles:</h3>
    <ul>
      <li>Nombre: ${body.name}</li>
      <li>Email: ${body.email}</li>
      <li>Carrera: ${body.career}</li>
    </ul>
    <h3>¿Por qué necesita este proyecto?</h3>
    <p>${body.message}</p>
    <h3>Proyecto solicitado</h3>
    <p>Id: ${body.additionalData['projects'][0].id}</p>
    <p>Nombre: ${body.additionalData['projects'][0].name}</p>
    `;
  let options = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `LLT-dev - Mensaje de ${body.name} < ${body.email} >`,
    html: output
  }
  return await sendEmail(options);
}

const sendToUser = async (body) => {
  const context = {
    title: `Hello there, ${body.name}!`,
    parag1: `You have sent a message to LamboLead Tech. My name is Juan David, and I'm at your service.`,
    messageTitle: "This was your message:",
    message: body.message,
    parag2: `In a few moments, our team (me, really) will be answering you.`,
    footerTitle1: "What can I do for you?",
    footerInfo1: "I can help you grow your business, improve your online presence, build confidence in your clients, and much more.",
    footerTitle2: "Contact Info:",
    footerInfo21: "Carrera 44 #18-56. Ciudad del Río. Medellín, Antioquia, Colombia",
    footerInfo22: "+57 318 309 9879"
  }
  
  let options = {
    from: `"Semillero de Transición Energética y Microcogeneración" <${process.env.EMAIL}>`,
    to: body.email,
    subject: 'Hello from LLT-dev!',
    template: 'email',
    context: context
  }
  return await sendEmail(options);
}

module.exports = router;