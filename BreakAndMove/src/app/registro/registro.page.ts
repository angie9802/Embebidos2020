import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from '../../providers/post-provider';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(
    private router: Router,
    private postPvdr: PostProvider 
  ) { }

  ngOnInit() {
  }
  back(){
    this.router.navigate(['/login']);
  }

}
