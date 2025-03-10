import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: "public/uploads",
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 1e2);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + "-" + uniqueSuffix + ext);
    },
});
const fileUpload = multer({ storage: storage });

export default fileUpload;
