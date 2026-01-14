#  CorpGenius AI: Automação Inteligente de Comunicados de RH

O **CorpGenius AI** é uma solução de automação ponta a ponta desenvolvida para otimizar a comunicação interna em departamentos de Recursos Humanos. Através da integração entre ferramentas do Google Workspace e modelos de linguagem de grande escala (LLMs), o projeto transforma tópicos rápidos em textos profissionais, empáticos e estruturados.

##  Fluxo do Projeto
1. **Entrada:** O usuário preenche um Google Form com o público-alvo, tom de voz e tópicos principais.
2. **Processamento:** Um script em Google Apps Script captura os dados, estrutura um prompt de engenharia e consulta uma API de Inteligência Artificial.
3. **Saída:** O colaborador recebe em poucos segundos um rascunho completo no seu e-mail para revisão final.



##  Stack Tecnológica
- **Interface:** Google Forms
- **Backend/Automação:** Google Apps Script (JavaScript)
- **Cérebro (IA):** gpt-4o-mini
- **Notificação:** Gmail API (MailApp)

##  Principais Diferenciais
- **Agilidade:** Reduz o tempo de redação de 15 minutos para menos de 15 segundos.
- **Padronização:** Garante que a identidade verbal da empresa seja mantida através de diferentes "Tons de Voz".
- **Baixo Custo:** Implementado utilizando camadas gratuitas de APIs de alta performance.

##  Como Reproduzir
1. Crie um formulário com os campos: E-mail, Tipo de Texto, Conteúdo, Público e Tom.
2. No menu do formulário, vá em `Extensões > Apps Script`.
3. Cole o código deste repositório no arquivo `codigo.gs`.
4. Obtenha sua chave de API no site do provedor e insira-a na variável `API_KEY`.
5. Configure um acionador (trigger) para a função `onFormSubmit` ao enviar o formulário.

---
*Projeto desenvolvido como parte do desafio técnico de integração de IA Generativa.*
