import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ResponseApi } from 'src/app/shared/model/response-api';
import { Produto } from '../produto';
import { ProdutoService } from '../produto.service';

/** Error when the parent is invalid */
class CrossFieldErrorMatcher implements ErrorStateMatcher{
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-produto',
  templateUrl: './create-produto.component.html',
  styleUrls: ['./create-produto.component.scss']
})
export class CreateProdutoComponent implements OnInit {

  formGroup: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();
  matcher = new MyErrorStateMatcher();

  constructor(
    private service: ProdutoService,
    private ngxLoader: NgxUiLoaderService,
    private toastr: ToastrService,
    public dialogRef: MatDialogRef<CreateProdutoComponent>,
    @Inject(MAT_DIALOG_DATA) public produto: Produto
  ) {
    
    this.showSuccess();
  }

  onClose(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = new FormGroup({
      nome: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      precoVenda: new FormControl('', [Validators.required]),
      precoCompra: new FormControl('', )
    });
  }

  salvar(){
    this.ngxLoader.start();
    this.service.create(this.produto).subscribe((responseApi: ResponseApi) => {
      this.showSuccess();
      this.onClose();
      this.ngxLoader.stop();
    }, err => {
      console.log('################error');
      this.showError();
    });
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.formGroup.controls[controlName].hasError(errorName);
  }

  showSuccess() {
    this.toastr.success('Operação realizada com sucesso!', 'Sucesso');
  }

  showError() {
    this.toastr.error('Ocorreu um error!', 'Error');
  }

}
