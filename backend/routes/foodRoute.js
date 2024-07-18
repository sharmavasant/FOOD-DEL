 
import express from 'express'
import { addFood ,listFood, removeFood} from '../controllers/foodController.js'
import multer from 'multer'

const foodRouter = express.Router();


// image storage engine using multer diskstorage function
const storage = multer.diskStorage({
    // where we want to store image => in uploads folder
    destination:"uploads",
    // cb=>callback
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }

})

const upload = multer({storage:storage})
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get('/list',listFood)
foodRouter.post("/remove",removeFood);

export default foodRouter;