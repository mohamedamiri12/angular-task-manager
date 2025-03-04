import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [TaskComponent,TasksComponent,NewTaskComponent],
    exports: [TasksComponent],
    imports: [SharedModule,CommonModule,FormsModule]
})
export class TasksModule {}