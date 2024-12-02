
import { User } from './user';
import { TaskManagement, Observable, Employee } from './interfaces';


export class ShopManager extends User implements TaskManagement, Observable {
    private observers: Employee[] = [];

    constructor(user: User) {
        // Directly pass the user data to the parent class (User)
        super(
            user.user_id,
            user.first_name,
            user.last_name,
            user.address,
            user.gender,
            user.dob,
            user.telephone,
            user.age,
            user.salary,
            user.password,
            user.image,
            "Shop Manager"
        );
    }

    // Create a task and assign it to the role-specific employees
    async createTask(title: string, description: string, roleRequired: string): Promise<Object> {
        
        // const result = await db.query(
        //     'INSERT INTO tasks(title, description, role_required) VALUES ($1, $2, $3) RETURNING *', 
        //     [title, description, roleRequired]
        // );

        // if (result.rows.length === 0) {
        //     return {'message': 'Task not created'};
        // } else {
        //     return {'message': 'Task created'};
        // }
        return {'message': 'Task created'};
    }

    // Load observers from the database
    async loadObserversFromDatabase(): Promise<Object> {
        // const result = await db.query(
        //     'SELECT * FROM users WHERE role IN ($1, $2, $3, $4)',
        //     ['Seller', 'Guard', 'Cleaner', 'Worker']  // Matching any of these roles
        // );
        
        // if (result.rows.length === 0) {
        //     return {'message': 'No observers found'};
        // } else { 
        //     this.observers = result.rows;  // Store the list of observers in this.observers
        //     return { 'message': 'Observers loaded' };
        // }
        return {'message': 'Observers loaded'};
    }

    // Add an observer to the list
    async addObserver(observer: Employee): Promise<Object> {
        this.observers.push(observer);
        return {'message': 'Observer added'};
    }

    // Remove an observer from the list
    async removeObserver(observer: Employee): Promise<Object> {
        // this.observers = this.observers.filter((item) => item.user_id !== observer.user_id);
        return {'message': 'Observer removed'};
    }

    // Notify all observers about a task
    async notifyObservers(taskId: number): Promise<Object> {
        // this.observers.forEach((observer) => observer.update(`Task ${taskId} assigned`));
        return {'message': 'Observers notified'};
    }
}