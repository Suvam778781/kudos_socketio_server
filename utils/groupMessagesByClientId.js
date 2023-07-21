const groupMessagesByClientId = (messages) => {
    const conversations = [];
    const clientsMap = new Map();
  
    // Group messages by clientId
    messages.forEach((message) => {
      const { client_id, ...rest } = message;
      if (!clientsMap.has(client_id)) {
        clientsMap.set(client_id, []);
      }
      const clientMessages = clientsMap.get(client_id);
      clientMessages.push({ client_id, ...rest });
    });
  
    // Convert Map values to the desired format
    clientsMap.forEach((messages, clientId) => {
      conversations.push({
        clientId,
        messages,
      });
    });
  
    return conversations;
  };
  
  module.exports={groupMessagesByClientId}