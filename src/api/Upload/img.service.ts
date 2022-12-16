import Cloudinary from 'cloudinary';

const cloudinary = Cloudinary.v2;


cloudinary.config({
  cloud_name: 'df4snwy5t',
  api_key: '846778159981894',
  api_secret: 'b85CaLVmV-pAOSwUHJ7JL8VDrGU'
})

export async function uploadImage(image: string) {
    try {
      const result  = await cloudinary.uploader.upload(image, {
        folder: 'dataFiles',
        use_filename: true,
        unique_filename: false,
      })
      return result
    } catch (error) {
      console.log(error)
    }
  }