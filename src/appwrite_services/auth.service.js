import conf from '../conf/conf.js';          // Import Appwrite config (URL, Project ID)
import { Client, Account, ID } from "appwrite"; // Appwrite SDK modules

export class AuthService {
    client = new Client();  // Initialize Appwrite Client
    account;                // Will hold Appwrite Account instance

    constructor() {
        // Configure Client with Appwrite endpoint & project ID
        this.client
            .setEndpoint(conf.appwriteUrl)          // Set API endpoint
            .setProject(conf.appwriteProjectId);     // Set project ID
        this.account = new Account(this.client);      // Initialize Account service
    }

    async createAccount({ email, password, name }) {
        try {
            // Create user account with unique ID
            const userAccount = await this.account.create(
                ID.unique(),  // Auto-generate user ID
                email,
                password,
                name
            );

            // If account created, log the user in automatically
            if (userAccount) {
                return this.login({ email, password }); // Return login result
            } else {
                return userAccount; // Fallback (unlikely)
            }
        } catch (error) {
            throw error; // Propagate errors (e.g., email exists)
        }
    }

    async login({ email, password }) {
        try {
            // Create a session (log in)
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error; // E.g., invalid credentials
        }
    }

    async getCurrentUser() {
        try {
            // Fetch current logged-in user data
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite error :: getCurrentUser ::", error);
        }
        return null; // No user found
    }

    async logout() {
        try {
            // Delete all active sessions (log out everywhere)
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite error :: logout ::", error);
        }
    }
}
const authService = new AuthService(); // Single instance
export default authService;            // Export for app-wide use