/**
 * Utility functions for the application
 */

export interface User {
	id: number;
	name: string;
	email: string;
	age: number;
}

export class UserService {
	private users: User[] = [];

	addUser(user: User): void {
		this.users.push(user);
	}

	getUserById(id: number): User | undefined {
		return this.users.find((user) => user.id === id);
	}

	getAllUsers(): User[] {
		return [...this.users];
	}

	getAdultUsers(): User[] {
		return this.users.filter((user) => user.age >= 18);
	}
}

export function formatUserInfo(user: User): string {
	return `${user.name} (${user.age}) - ${user.email}`;
}

export function validateEmail(email: string): boolean {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
}
