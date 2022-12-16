import { Request, Response } from "express";
import { uploadImage } from './img.service';
import fs from 'fs';

export async function handleUpload(req: Request, res: Response) {
    
  const { path, size } = req.file as Express.Multer.File;

  const maxSize = 1024 * 1024 * 2 // 5MB

  if (size > maxSize) {
    fs.unlinkSync(path)
    return res.status(400).json({ message: 'File is too large' })
  }

  try {
    const result = await uploadImage(path)

    res.json(result)
  } catch (error: any) {
    return res.status(500).json({ message: error.message })
  } finally {
    fs.unlinkSync(path)
  }
}

export async function uploadMultipleHandler(req: Request, res: Response){
  const files = req.files as Express.Multer.File[];

  const results = []
  for (const file of files) {
    const { path } = file
    try {
      const result = await uploadImage(path)
      results.push(result)
    } catch (error: any) {
      return res.status(500).json(error.message)
    } finally {
      fs.unlinkSync(path)
    }
  }

  return res.status(200).json(results)

}
  