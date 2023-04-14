import { Component, ElementRef, Input, ViewChild, AfterViewChecked } from '@angular/core';
import { Message } from 'src/app/types';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.css']
})
export class ChatScreenComponent implements AfterViewChecked {

  @ViewChild('scrollScreen', {static: true}) scrollScreenRef!: ElementRef;
  
  @Input()
  messages: Message[] = [];

  
  ngAfterViewChecked() {
    this.scrollDown();
  }
  
  scrollDown() {
  }
  
}

// const element = this.scrollScreenRef.nativeElement;
// element.scrollTop = 100;
// console.log('scrollTop:', element.scrollTop);
// console.log('scrollHeight:', element.scrollHeight);
// console.log('offsetHeight:', element.offsetHeight);

// const element = document.getElementById("focusBtn");
// console.log(element)
// console.log(window)
// console.log(document.body)
// element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });