const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserById,
  deleteUserById,
  update,
} = require("../controllers/usersController");
const {validarJWT} = require("../middlewares/validarJWT");
const {esAdminRol} = require("../middlewares/validateRole");
const authMiddleware = require("../middlewares/authMiddleware");

/* GET users listing. */
/* router.get('/', async(req, res, next) => {
  try {
    const userBD = await User.findAll({});
    return res.json(userBD);
  } catch (error) {
    next(error);
  }
  res.send('respond with a resource');
}); */
router.get("/", [validarJWT, esAdminRol], getAllUser);
router.get("/:id", getUserById);
router.delete("/:id", [validarJWT, esAdminRol], deleteUserById);
router.patch("/:id", [validarJWT], update);

/*GET user by Id */

/* router.get("/:id", async (req, res, next) => {
  try {
    const {id} = req.params;
    let user = await User.findByPk(id, {});
    if (!user) {
      return res.send("User not found");
    } else {
      return res.send(user);
    }
  } catch (error) {
    next(error);
  }
}); */

/*POST a newUser. */
/* router.post("/user", async (req, res, next) => {
  const {firstName, lastName, email, password} = req.body;
  // res.send('Prueba')
  if (email && password) {
    try {
      const newUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        email: email, //aca creo un nuevo user con las propiedades que necesito
        password: password,
      });
      //         const rol =  role.findOne({
      //             where: {
      //                 //aca busco en la base de datos donde uno tenga la propiedad client
      //                 name: "client",
      //             },
      //         });
      //          newUser.setRole(rol);
      emailsController.sendWelcomeEmail(email); // esta funcion envia el welcome email


      return res.send(await User.findByPk(newUser.id, {})); //aca seteo a un nuevo user con el rol "cliente"
    } catch (error) {
      next(error);
    }
  } else {
    res.status(404).send({msg: "Faltan los valores basicos"});
  }
}); */

/*DELETE user by Id*/

/* router.delete("/:id", async function (req, res, next) {
  const {id} = req.params;
  try {
    let existsInDB = await User.findOne({
      where: {
        id,
      },
    });
    if (existsInDB) {
      User.destroy({
        where: {
          id,
        },
      });
      return res
        .status(200)
        .send("User has been deleted from database successfully");
    } else throw new Error("ERROR 500: User with given name does not exist in database");
  } catch (err) {
    next(err);
  }
}); */

/*LOGIN user*/

/* router.post('/auth/login', loginValidator, usersController.login)



 */

//router.post("/auth/login", loginValidator, usersController.login);

module.exports = router;

/* router.post('/auth/login', loginValidator, usersController.login)
router.get('/auth/me', usersController.me);
router.patch('/:id', usersController.update);
 */
