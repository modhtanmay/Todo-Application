import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_Jpa_URL, API_URL } from 'src/app/app.constants';
import { Todo } from 'src/app/classes/todo';

@Injectable({
    providedIn: 'root'
})
export class TodoDataService {

    constructor(private http: HttpClient) { }

    retrieveAllTodos(username) {
        return this.http.get<Todo[]>(`${API_Jpa_URL}/users/${username}/todos`);
    }

    deleteTodo(username, id) {
        return this.http.delete(`${API_Jpa_URL}/users/${username}/todos/${id}`);
    }

    retrieveTodo(username, id) {
        return this.http.get<Todo>(`${API_Jpa_URL}/users/${username}/todos/${id}`);
    }

    updateTodo(username, id, todo) {
        return this.http.put(`${API_Jpa_URL}/users/${username}/todos/${id}`, todo);
    }

    createTodo(username, todo) {
        return this.http.post(`${API_URL}/users/${username}/todos`, todo);
    }

}
