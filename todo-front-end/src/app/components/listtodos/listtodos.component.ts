import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/classes/todo';
import { TodoDataService } from 'src/app/services/data/todo-data.service';

@Component({
    selector: 'app-listtodos',
    templateUrl: './listtodos.component.html',
    styleUrls: ['./listtodos.component.css']
})
export class ListtodosComponent implements OnInit {

    todos: Todo[];

    message: string;

    constructor(private router: Router, private todoService: TodoDataService) { }

    ngOnInit(): void {
        this.refreshTodos();
    }

    deleteTodo(id) {
        console.log(`Delete todo ID: ${id}`);
        this.todoService.deleteTodo('tanmay', id).subscribe(
            response => {
                console.log(response);
                this.message = `Delete of Todo ${id} Successful !!`;
                this.refreshTodos();
            }
        )
    }

    addTodo() {
        this.router.navigate(['todos', -1]);
    }

    updateTodo(id) {
        console.log(`Update Todo : ${id}`);
        this.router.navigate(['todos', id]);

    }

    refreshTodos() {
        this.todoService.retrieveAllTodos('tanmay').subscribe(response => {
            console.log(response);
            this.todos = response;
        });
    }

}
