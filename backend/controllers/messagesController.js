import { messageModel } from "../models/Messages.js";

export const addMessage = async (request, response) => {
    try {
        const { userId, question, answer } = request.body;
        const message = await messageModel.create({ userId, question, answer });
        return response.status(200).json({
            success: true,
            message: "Message added successfully",
            addedMessage: message
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: 'Error updating user city',
        });
    }
}

export const getMessages = async (request, response) => {
    try {
        const userId = request.headers.userid;
        const messages = await messageModel.find({ userId }).sort({ createdAt: 1 });
        return response.status(200).json({
            success: true,
            messages,
            message: "Messages fetched successfully",
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: 'Error updating user city',
        });
    }
}

export const deleteMessages = async (request, response) => {
    try {
        const userId = request.headers.userid
        const messages = await messageModel.deleteMany({ userId });
        return response.status(200).json({
            success: true,
            message: "Messages deleted successfully",
        });
    } catch (error) {
        return response.status(500).json({
            success: false,
            message: 'Error updating user city',
        });
    }
}