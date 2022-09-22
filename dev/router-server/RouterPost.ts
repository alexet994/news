import { Router } from "express";
import { Posts } from "../models-server/Posts";


const router = Router()

router.post('/', async (req, res) => {
   try {
      const NewPost = new Posts(req.query)
      const result = await NewPost.save()
      if (!result) throw Error('не сохранилось')
      res.status(200)
   }
   catch (err) {
      console.log(err)
      res.status(500)
   }
})

router.get('/', async (req, res) => {
   try {
      const getItems = await Posts.find()
      if (!getItems) throw new Error('no items')
      res.status(200).send(getItems)
   } catch (err) {
      console.log(err)
      res.status(500).send(err)
   }
})
router.put('/:id', async (req, res) => {
   try {
      const result = await Posts.updateOne({ "_id": req.params.id }, { $set: req.query })
      if (!result) throw new Error('no items')
      res.status(200).send(result)
   } catch (err) {
      console.log(err)
      res.status(500).send(err)
   }
})

router.delete('/:id', async (req, res) => {
   try {
      const result = await Posts.deleteOne({ "_id": req.params.id }, { $set: req.query })
      if (!result) throw new Error('no items')
      res.status(200).send(result)
   } catch (err) {
      console.log(err)
      res.status(500).send(err)
   }
})

export const PostRouter = router