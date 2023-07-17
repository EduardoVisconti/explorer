const { hash, compare } = require("bcryptjs");
const sqliteConnection = require("../database/sqlite");
const AppError = require("../utils/AppError");

class UsersController {
    /* create and insert and database data from users */
    async create(request, response) {
        const { name, email, password, is_admin } = request.body;

        const database = await sqliteConnection();
        const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email])

        if(checkUserExists) {
            throw new AppError("Este e-mail ja está em uso.");
        }

        const hashedPassword = await hash(password, 8);

        await database.run(
            "INSERT INTO users (name, email, password, is_admin) VALUES (?, ?, ?, ?)",
            [name, email, hashedPassword, Boolean(is_admin) ?? false]
        );
        
        return response.status(201).json({ name, email, password, is_admin });
    }

    /* user data update */
    async update(request, response) {
        const { name, email, password, old_password } = request.body;
        const user_id = request.user.id;

        const database = await sqliteConnection();
        const user = await database.get("SELECT * FROM users WHERE id = (?)", [user_id]);

        if(!user) {
            throw new AppError("Usuário não encontrado")
        }

        const userWithUpdateEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

        if(userWithUpdateEmail && userWithUpdateEmail.id !== user.id) {
            throw new AppError("Este e-mail já está em uso.");
        }

        user.name = name ?? user.name;
        user.email = email ?? user.email;

        if (password && !old_password) {
            throw new AppError("Você precisa informar a senha antiga");
        }

        if (password && old_password) {
            const checkUserPassword = await compare(old_password, user.password);

            if (!checkUserPassword) {
                throw new AppError("A senha antiga não confere.");
            }

            user.password = await hash(password, 8);
        }

        await database.run(`UPDATE users SET
        name = ?,
        email = ?,
        password = ?,
        updated_at = DATETIME('now')
        WHERE id = ?`,
        [user.name, user.email, user.password, user_id]
        );

        return response.json();
    }
    
}

module.exports = UsersController;