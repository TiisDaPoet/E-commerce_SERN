const db = require("../models");
const CRUDservice = require("../services/CRUDservice");

let getHomePage = async (req, res) => {
  try {
    let data = await db.User.findAll();
    return res.render("homepage.ejs",{
        data: JSON.stringify(data)
    });

  } catch (error) {
    console.log(error);
  }

  
};

let getAboutPage = (req,res) =>{
  return res.render("about.ejs");
}

let getCRUD = (req,res) =>{
  return res.render("crud.ejs");
}

let postCRUD = async(req,res) =>{
  let message = await CRUDservice.createNewUser(req.body);
  console.log(message); 
  return res.send('post CRUD from server')
}

module.exports = {
  getHomePage: getHomePage,
  getAboutPage: getAboutPage,
  getCRUD: getCRUD,
  postCRUD:postCRUD,
};
