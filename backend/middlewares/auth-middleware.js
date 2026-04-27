const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        const authHeaders = req.headers.authorization; 

        if (!authHeaders || !authHeaders.startsWith('Bearer ')) {
            return res.status(401).json({ message: "No token, access denied" });
        }

        const token = authHeaders.split(' ')[1]; 

        const decoded = jwt.verify(token, process.env.JWT_SECRET); 

        req.user = decoded; 

        next(); 

    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = authMiddleware;