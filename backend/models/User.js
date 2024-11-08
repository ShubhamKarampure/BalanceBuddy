import mongoose from 'mongoose';

const parentSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    childCode: { 
        type: String,
        sparse: true,
        unique: true
    },
    childId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Child',
        sparse: true 
    }
}, { timestamps: true });

const childSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    parentId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Parent',
        sparse: true 
    }
}, { timestamps: true });

const Parent = mongoose.model('Parent', parentSchema);
const Child = mongoose.model('Child', childSchema);

export { Parent, Child };