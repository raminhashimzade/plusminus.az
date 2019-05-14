import { Directive, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[fly-to-cart]'
})
export class FlyToCartDirective implements OnInit{
  @Input() id: number;
  @HostListener('click') click() { this.onClick()}
  constructor(private element: ElementRef) { }
  ngOnInit() {
  }
  onClick() {
    try {
      this.flyToCart();
    } catch (er) {
      console.log(er);
    }
  }
  flyToCart() {
    const cartElem = document.getElementById('compare-cart') as HTMLElement;
    var offsetLeftCart = cartElem.offsetLeft;
    var widthCart = cartElem.offsetWidth;
    const imgElem =  document.querySelector(`[loan-img-id="${this.id}" ]`) as HTMLElement;
  //  const imgElem =  document.querySelector(`img[loan-img-id=${this.id}]`) as HTMLElement;
   const parentElem=  document.querySelector(`[loan-id="${this.id}" ]`) as HTMLElement;
    const imgClone = imgElem.cloneNode() as HTMLElement;
    imgClone.classList.add('itemaddedanimate');
    imgClone.style.height = 'auto';
    imgClone.style.width = '150px';
    imgClone.style.position = 'fixed';
    imgClone.style.top = (this.element.nativeElement as HTMLElement).getBoundingClientRect().top - 10 + 'px';
    imgClone.style.left = (this.element.nativeElement as HTMLElement).getBoundingClientRect().left + 'px';
    imgClone.style.opacity = '0.7';
    imgClone.style.zIndex = '9999';
    parentElem.append(imgClone);

    // console.log('offsetLeft', offsetLeft)
    // console.log('offsetTop', offsetTop);
    // console.log('parentEl', parentElem);
    // console.log(imgElem);
    // console.log(imgElem.getBoundingClientRect());
    // console.log(offsetTopCart);
    // console.log(heightCart);
    // console.log(cartElem.offsetLeft)
    // console.log((offsetLeftCart+widthCart/2) )
    setTimeout(() => {
      imgClone.style.height = '50px';
      imgClone.style.top = (cartElem.offsetTop) +'px';
      imgClone.style.left = cartElem.getBoundingClientRect().left + cartElem.offsetWidth/2 - 20 +'px' ;
      imgClone.style.opacity = '0.5';
    }, 500);

    setTimeout(function () {
      imgClone.style.height = '0';
      imgClone.style.opacity = '0.5';
      cartElem.classList.add('shakeit');
    }, 1000);
    setTimeout(function () {
      cartElem.classList.remove('shakeit');
      imgClone.remove();
    }, 1500);
  }

}
