const { v4: uuidv4 } = require("uuid");


module.exports = {
    postNotification(request, response) {
        const notification = {
            id: uuidv4(),
            notifiedTo: ["whatsapp", "email"],
            ...request.body
        };        
        return response.status(201).json(notification);
    }
}