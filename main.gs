function salvarChave() {
  PropertiesService.getScriptProperties()
    .setProperty("OPENAI_API_KEY", "SUA_CHAVE_AQUI");
}

function onFormSubmit(e) {
  if (!e || !e.values) return;

  var respostas = e.values;
  var userEmail = respostas[1];
  var tipoTexto = respostas[2];
  var topicos   = respostas[3];
  var publico   = respostas[4];
  var tomVoz    = respostas[5];

  var prompt = `
Atue como redator de RH.
Crie um ${tipoTexto} para ${publico},
com tom ${tomVoz}.
Conteúdo: ${topicos}
`;

  var apiKey = PropertiesService.getScriptProperties()
    .getProperty("OPENAI_API_KEY");

  var url = "https://api.openai.com/v1/chat/completions";

  var payload = {
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7
  };

  var options = {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: "Bearer " + apiKey
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  try {
    var response = UrlFetchApp.fetch(url, options);
    var json = JSON.parse(response.getContentText());

    var textoIA = json.choices[0].message.content;

    MailApp.sendEmail(
      userEmail,
      "Seu texto está pronto",
      textoIA
    );

  } catch (err) {
    console.error("Erro:", err);
  }
}
