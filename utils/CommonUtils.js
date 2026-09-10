import CryptoJS from "crypto-js";

/**
 * Encrypts a string or object using AES.
 * @param {string|object} data
 * @param {string} secretKey
 * @returns {string}
 */
export function encryptData(data, secretKey) {
	if (!secretKey) {
		throw new Error("A secret key is required");
	}

	const value = typeof data === "string" ? data : JSON.stringify(data);
	return CryptoJS.AES.encrypt(value, secretKey).toString();
}

/**
 * Decrypts AES-encrypted data and returns the original string or object.
 * @param {string} encryptedData
 * @param {string} secretKey
 * @returns {string|object}
 */
export function decryptData(encryptedData, secretKey) {
	if (!secretKey) {
		throw new Error("A secret key is required");
	}

	const decrypted = CryptoJS.AES.decrypt(encryptedData, secretKey)
		.toString(CryptoJS.enc.Utf8);

	if (!decrypted) {
		throw new Error("Unable to decrypt data");
	}

	try {
		return JSON.parse(decrypted);
	} catch {
		return decrypted;
	}
}
