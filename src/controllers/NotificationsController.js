const { v4: uuidv4 } = require("uuid");


module.exports = {
    postNotification(request, response) {
        const notification = {
            id: uuidv4(),
            receivedAt: new Date(),
            notifiedTo: request.body?.tags?.sendTo,
            originalRequest: {
                method: request.method,
                body: request.body
            }
        };
        console.log(JSON.stringify(notification, null, 2));
        return response.status(201).json(notification);
    }
}