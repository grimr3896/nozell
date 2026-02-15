"use server";

/**
 * File maintained for potential future server-side extensions.
 * Currently, booking and inquiries are handled via client-side mailto: links
 * as requested to ensure direct communication to the company mail.
 */

export async function submitBooking() {
  return { success: true, message: "Use the email app to send your request." };
}

export async function submitInquiry() {
  return { success: true, message: "Use the email app to send your inquiry." };
}
