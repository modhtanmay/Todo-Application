import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from 'src/app/services/data/welcome-data.service';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {


    name = '';
    msg = '';
    errorMsg = '';

    constructor(private service: WelcomeDataService, private route: ActivatedRoute) { }

    ngOnInit(): void {

        this.name = this.route.snapshot.params['name'];
    }

    getVariableWelcomeMsg() {
        this.service.getVariableMsg(this.name).subscribe(
            response => this.handleResponse(response),
            error => this.handleError(error)
        );
    }
    getWelcomeMsg() {
        console.log(this.service.getWelcomeMsg());
        this.service.getWelcomeMsg().subscribe(
            response => this.handleResponse(response),
            error => this.handleError(error)
        );
    }

    handleResponse(response) {
        this.msg = response.message;
    }

    handleError(error) {
        this.errorMsg = error.error.message;
    }

}
