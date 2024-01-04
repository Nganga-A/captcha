import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Get the directory of the current module
  const currentModuleDir = path.dirname(new URL(import.meta.url).pathname);

  // Constructing the file path to the image using the 'path' module
  const imagePath = path.join(currentModuleDir, 'public', 'dogs-and-muffins', 'dog1.png');

  try {
    // Log the image path for debugging
    console.log('Image path:', imagePath);

    // Reading the image file synchronously using 'fs' module
    const imageBuffer = fs.readFileSync(imagePath);

    // Setting the response headers to indicate that the response contains a PNG image
    res.setHeader('Content-Type', 'image/png');

    // Sending the image buffer in the HTTP response
    res.end(imageBuffer);
  } catch (error) {
    // Handling errors that may occur during file reading
    console.error('Error reading the image file:', error);

    // Sending a 500 Internal Server Error response if an error occurs
    res.status(500).end('Internal Server Error');
  }
}
