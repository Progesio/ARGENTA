// Helper function untuk menangani URL gambar
export function getImageUrl(imagePath?: string): string {
  if (!imagePath) return '';
  
  // Jika sudah memiliki protocol (http/https) atau data URI, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://') || imagePath.startsWith('data:')) {
    return imagePath;
  }
  
  // Jika path relatif, tambahkan base URL
  return `https://allhub.progesio.my.id/storage/${imagePath}`;
}
