// Professional QA Logging Utility
export const QALogger = {
  info: (message: string, data?: any) => {
    console.log(`[QA-INFO] ${new Date().toISOString()}: ${message}`, data || "");
    // In a real GCP setup, you'd send this to a Cloud Function here
  },
  error: (message: string, error: any) => {
    console.error(`[QA-CRITICAL] ${new Date().toISOString()}: ${message}`, error);
    // This is where you'd trigger a GCP Alert
  }
};