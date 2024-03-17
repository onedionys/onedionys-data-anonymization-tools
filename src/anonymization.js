// src/anonymization.js

/**
 * Anonymizes the given data.
 * @param {object} data - The data to be anonymized.
 * @returns {object} - The anonymized data.
 */
function anonymize(data) {
    // Copy the original data to avoid mutating it directly
    const anonymizedData = { ...data };
  
    // Anonymize email address
    if (anonymizedData.email) {
      anonymizedData.email = anonymizedData.email.replace(/./g, '*').substring(0, 3);
    }
  
    // Anonymize phone number
    if (anonymizedData.phone) {
      anonymizedData.phone = anonymizedData.phone.replace(/./g, '*').substring(0, 3);
    }
  
    // Add more anonymization logic for other sensitive fields if needed
  
    return anonymizedData;
  }
  
  module.exports = anonymize;
  