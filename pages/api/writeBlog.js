import nc from "next-connect";
import isEmail from "validator/lib/isEmail";
import normalizeEmail from "validator/lib/normalizeEmail";
import bcrypt from "bcryptjs";
import all from "../../middlewares/index";
import { extractUser } from "../../lib/api-helper";
import { insertUser, findUserByEmail, findUserById } from "../../db/index";
import { insertBlog } from "../../db/blog";


const handler = nc();
handler.use(all);

handler.post(async (req, res) => {
    const { subject, content, writer, blogImage, category } = req.body;

    const result = await insertBlog(req.db, { subject, content, writer, blogImage, category });

    
    // const { name, password } = req.body;
    // const email = normalizeEmail(req.body.email);
    // if (!isEmail(email)) {
    //     res.status(400).send("The email you entered is invalid.");
    //     return;
    // }
    // if (!password || !name) {
    //     res.status(400).send("Missing field(s)");
    //     return;
    // }
    // if (await findUserByEmail(req.db, email)) {
    //     res.status(403).send("The email has already been used.");
    //     return;
    // }
    // const hashedPassword = await bcrypt.hash(password, 10);
    // const userId = await insertUser(req.db, {
    //     email,
    //     password: hashedPassword,
    //     name,
    // });
    // const user = await findUserById(req.db, userId);
    // req.logIn(user, (err) => {
    //     if (err) throw err;
    //     res.status(201).json({
    //         user: extractUser(req.user),
    //     });
    // });
});

export default handler;