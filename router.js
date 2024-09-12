const express = require("express")
const { get_login, post_login,get_loginEmail,authenticateToken, update_login, delete_login, userDetail, get_username, get_email, validUser } = require("./login_crud")
const router = express.Router()
const multer = require("multer")
const { get_customer, post_customer, delete_customer, update_customer } = require("./Createcuscrud")
const { get_attend, post_attend, update_attend, delete_attend } = require("./Attendnce_crud")
const { get_customerl, post_customerl, update_customerl, delete_customerl } = require("./leadcrud")
const { get_customers, post_customers, update_customers, delete_customers } = require("./Vendorcrud")
const { get_customerr, post_customerr, update_customerr, delete_customerr } = require("./recieptcrud")
const { get_customerc, post_customerc, update_customerc, delete_customerc } = require("./crStaff")
const { get_customef, post_customef, update_customef, delete_customef } = require("./coursefee")
const {get_data, post_data, update_data, delete_data, get_img, create_img, edit_img, delete_img} = require("./crud")
const {get_datas, post_datas, update_datas, delete_datas, get_imgs, create_imgs, edit_imgs, delete_imgs} = require("./Interview")
const { get_emp, post_emp, update_emp, delete_emp, getEmp_img, createEmp_img, editEmp_img, deleteEmp_img, getEdit_emp, getid_img } = require("./employee_crud")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./fb/src/component/images");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
    });
    const upload = multer({ storage: storage });

// login
router.get("/getlogin", get_login)
router.get("/getloginemail", get_loginEmail)
router.get("/checkemail", get_email)
router.post("/createlogin", post_login)
router.put("/editlogin/:id", update_login)
router.delete("/logindel/:id", delete_login)
router.post("/userdetails", userDetail)

// student
router.get("/getstd", get_data)
router.post("/create", post_data)
router.put("/update/:id", update_data)
router.delete("/delete/:id", delete_data)
router.get("/getimg", get_img)
router.post("/createimg", upload.single("images") ,create_img)
router.put("/editimg/:id", upload.single("images") ,edit_img)
router.delete("/delimg/:id" ,delete_img)

// employee
router.get("/empget", get_emp)
router.get("/empeditget/:id", getEdit_emp)
router.post("/empcreate", post_emp)
router.put("/empedit/:id", update_emp)
router.delete("/empdelete/:id", delete_emp)
router.get("/getempimg", getEmp_img)
router.get("/getempimgs/:id", getid_img)
router.post("/createempimg", upload.single("imagesemp") ,post_emp)
router.put("/editempimg/:id", upload.single("imagesemp") ,editEmp_img)
router.delete("/delempimg/:id" ,deleteEmp_img)

// Attendance
router.get("/getattend", get_attend)
router.post("/postattend", post_attend)
router.put("/updateattend/:id", update_attend)
router.delete("/delattend/:id", delete_attend)

// createcustomer
router.get("/crtcustomer", get_customer)
router.post("/postcus", post_customer)
router.put("/editcus/:id", update_customer)
router.delete("/delcustomer/:id", delete_customer)

// interview
router.get("/interget", get_datas)
router.post("/createinterv", post_datas)
router.put("/updateinterv/:id", update_datas)
router.delete("/deleteinterv/:id", delete_datas)
router.get("/getimginter", get_imgs)
router.post("/createimginter", upload.single("images") ,create_imgs)
router.put("/editimginter/:id", upload.single("images") ,update_datas)
router.delete("/delimginter/:id" ,delete_imgs)

// vendor
router.get("/crtvendor", get_customers)
router.post("/postven", post_customers)
router.put("/editven/:id", update_customers)
router.delete("/delven/:id", delete_customers)

// lead
router.get("/crtlead", get_customerl)
router.post("/postlead", post_customerl)
router.put("/editvlead/:id", update_customerl)
router.delete("/delvlead/:id", delete_customerl)

// reciept
router.get("/crtrecp", get_customerr)
router.post("/postrecp", post_customerr)
router.put("/editrecp/:id", update_customerr)
router.delete("/delrecp/:id", delete_customerr)

// createstaff
router.get("/crtstaff", get_customerc)
router.post("/poststaff", post_customerc)
router.put("/editstaff/:id", update_customerc)
router.delete("/delstaff/:id", delete_customerc)

// coursefee
router.get("/crtfee", get_customef)
router.post("/postfee", post_customef)
router.put("/editfee/:id", update_customef)
router.delete("/delfee/:id", delete_customef)

module.exports = router