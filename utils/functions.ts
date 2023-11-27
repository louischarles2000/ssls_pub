import { deleteObject, getStorage, ref } from "firebase/storage";

export function _shortenText(text: string, maxLength: number) {

  if (text.length <= maxLength) {
    return text; // Return the original text if it's already within or equal to the maxLength
  } else {
    // Cut the text and add ellipsis
    return text.slice(0, maxLength) + '...';
  }
}

export function _generateProductNumber() {
  // Generate a random number between 1000 and 9999
  const randomNum = Math.floor(Math.random() * 9000) + 1000;

  // Concatenate the prefix "LBB" with the random number
  const productNumber = `LBB${randomNum}`;

  return productNumber;
}

export const _deleteImages = async (downloadURLs: string[]) => {
  const storage = getStorage();

  // Loop through each download URL and delete the corresponding file
  const deletePromises = downloadURLs.map(async (url) => {
    const storageRef = ref(storage, url);

    try {
      await deleteObject(storageRef);
      console.log(`Image with URL ${url} deleted successfully`);
    } catch (error: any) {
      console.error(`Error deleting image with URL ${url}:`, error.message);
    }
  });

  // Wait for all delete operations to complete
  try {
    await Promise.all(deletePromises);
    console.log('All images deleted successfully');
  } catch (error: any) {
    console.error('Error deleting images:', error.message);
  }
};

export const _format_numbers = (number: string) => {
  // Convert the number to a string
  const numberString = number.toString();

  // Use regular expression to add commas
  const formattedNumber = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return formattedNumber;
}
