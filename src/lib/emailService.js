/**
 * Simple email service utility to handle form submissions.
 * In a production environment, this would call a real backend endpoint.
 * For this implementation, it simulates an API call and stores submission data in localStorage.
 */

export const emailService = {
  /**
   * Sends form data to the configured email destination.
   * @param {Object} formData - The data to send
   * @returns {Promise<{success: boolean, message: string}>}
   */
  sendFormEmail: async (formData) => {
    // Add metadata
    const submissionData = {
      ...formData,
      to: 'Hello@tinyteachpress.com',
      timestamp: new Date().toISOString(),
      id: crypto.randomUUID(),
    };

    console.log('📧 Sending email via EmailService:', submissionData);

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      // Store in localStorage for persistence demo (mocking a database)
      const previousSubmissions = JSON.parse(localStorage.getItem('ttp_form_submissions') || '[]');
      previousSubmissions.push(submissionData);
      localStorage.setItem('ttp_form_submissions', JSON.stringify(previousSubmissions));

      console.log('✅ Email simulated success. Data saved to localStorage.');
      
      return { 
        success: true, 
        message: 'Email sent successfully' 
      };
    } catch (error) {
      console.error('❌ Email simulated failure:', error);
      throw new Error('Failed to send email');
    }
  },

  /**
   * Sends confirmation email for Offline Survival Club sign-ups.
   */
  sendOfflineSurvivalClubEmail: async (name, email, kidAge) => {
    const emailPayload = {
      subject: "Welcome to the Offline Survival Club! 🎮➡️🏕️",
      to: email,
      name: name,
      kidAge: kidAge,
      welcomeMessage: "You're in! Get ready for screen-free adventures tailored for your young gamer.",
      links: [
        "/offline/crossword-1",
        "/offline/crossword-2",
        "/offline/logic-challenge"
      ],
      timestamp: new Date().toISOString(),
      id: crypto.randomUUID(),
    };

    console.log('📧 Sending Offline Survival Club Welcome Email:', emailPayload);

    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulating API call

    try {
      const existingMembers = JSON.parse(localStorage.getItem('osc_members') || '[]');
      existingMembers.push(emailPayload);
      localStorage.setItem('osc_members', JSON.stringify(existingMembers));

      console.log('✅ Offline Survival Club email simulated success. Data saved.');
      return {
        success: true,
        message: 'Welcome email sent successfully'
      };
    } catch (error) {
      console.error('❌ OSC Email simulated failure:', error);
      throw new Error('Failed to send Offline Survival Club email');
    }
  }
};