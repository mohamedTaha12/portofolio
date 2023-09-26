import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  @HostListener('window:scroll', ['$event'])
  ngOnInit(): void {

  }
  onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  home() {
    this.router.navigate(['/home'])
  }
  contactUs() {
    this.router.navigate(['/contact-us'])
  }
  resume() {
    this.router.navigate(['/resume'])
  }
  work() {
    this.router.navigate(['/work'])
  }
  myFunction() {
    console.log("test")
    let element = document.getElementById("myDIV");
    element?.classList.remove("d-flex ");
  }
}
