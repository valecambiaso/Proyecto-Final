import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  action!: string;
  userForm!: FormGroup;
  user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private dialogRef: MatDialogRef<UserFormComponent>,
    @Inject(MAT_DIALOG_DATA) public userId: string
  ){
    if(this.userId != ''){
      this.buildFormEdit();
    }else{
      this.buildFormAdd();
    }
  }

  private buildFormEdit(): void{
    this.usersService.getUserById(this.userId).subscribe((user: User) => {
      this.user = user;

      this.action = 'Editar';

      this.userForm = this.formBuilder.group({
        username: [this.user.username, [Validators.required, Validators.minLength(4)]], 
        password: [this.user.password, [Validators.required, Validators.minLength(4)]], 
        isAdmin: [this.user.isAdmin]
      });
    });
  }

  private buildFormAdd(): void{
    this.action = 'Crear';

    this.userForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(4)]], 
        password: ['', [Validators.required, Validators.minLength(4)]], 
        isAdmin: [false]
    });
  }

  addUser(): void{
    const user: User = {
      id: this.userId,
      username: this.userForm.get('username')!.value,
      password: this.userForm.get('password')!.value,
      isAdmin: this.userForm.get('isAdmin')!.value
    };

    if(this.userId != ''){
      this.usersService.editUser(user, this.userId).subscribe((user: User) => {});
    }else{
      this.usersService.addNewUser(user).subscribe((user: User) => {});
    }
    this.closeForm();
  }

  closeForm(): void{
    this.dialogRef.close();
  }
}
