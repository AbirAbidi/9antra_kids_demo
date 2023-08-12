import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showIcon = false ;
  isDrawerOpen: boolean = false;
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.showIcon = true;
    }else {
      this.showIcon = false
    }
  }
  
  

 
  
}
