import bcrypt from 'bcryptjs';
import { Child, Parent } from '../models/User.js';
import { generateChildCode } from '../utils/codeGenerator.js';

export const registerParent = async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingParent = await Parent.findOne({ username });
        if (existingParent) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        let childCode;
        let isUnique = false;
        while (!isUnique) {
            childCode = generateChildCode(); 
            const existingCode = await Parent.findOne({ childCode });
            if (!existingCode) {
                isUnique = true;
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newParent = new Parent({
            username,
            password: hashedPassword,
            childCode
        });

        await newParent.save();

        res.status(201).json({
            message: 'Parent registration successful',
            childCode,
            username: newParent.username
        });

    } catch (error) {
        console.error('Parent registration error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
};
export const registerChild = async (req, res) => {
    try {
        const { username, childCode, password } = req.body;

        const parent = await Parent.findOne({ childCode });
        if (!parent) {
            return res.status(400).json({ message: 'Invalid child code' });
        }

        const existingChild = await Child.findOne({ username });
        if (existingChild) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newChild = new Child({
            username,
            password: hashedPassword,
            parentId: parent._id
        });

        await newChild.save();

        parent.childId = newChild._id;
        await parent.save();

        res.status(201).json({
            message: 'Child registration successful',
            username: newChild.username
        });

    } catch (error) {
        console.error('Child registration error:', error);
        res.status(500).json({ message: 'Server error during registration' });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        let user;
        if (role === 'parent') {
            user = await Parent.findOne({ username });
        } else if (role === 'child') {
            user = await Child.findOne({ username });
        }

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        res.json({
            message: 'Login successful',
            user: userData
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Server error during login' });
    }
};
