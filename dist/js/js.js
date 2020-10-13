class Cursor {
    constructor( el, target ) {
      this.el = el
      this.target = target
      this.triggerDistance = 90
      
      this.bind()
    }
    
    bind() {
      window.addEventListener( 'mousemove', this.move.bind( this ), false )
    }
    
    move( e ) {
      const cursorPosition = {
        left: e.clientX,
        top: e.clientY
      }
  
      const targetPosition = {
        left: this.target.getBoundingClientRect().left + this.target.getBoundingClientRect().width / 2,
        top: this.target.getBoundingClientRect().top + this.target.getBoundingClientRect().height / 2,
      }
  
      const distance = {
        x: targetPosition.left - cursorPosition.left,
        y: targetPosition.top - cursorPosition.top
      }
  
      const angle = Math.atan2( distance.x, distance.y )
      const hypotenuse = Math.sqrt( distance.x * distance.x + distance.y * distance.y )
  
      if( hypotenuse < this.triggerDistance ) {
        this.el.classList.add( 'expanded' )
        this.el.classList.remove( 'not-active' )
        this.target.classList.add( 'expanded' )
      } else {
        this.el.classList.add( 'not-active' )
        this.el.classList.remove( 'expanded' )
        this.target.classList.remove( 'expanded' )
      }
    }
  }
  
  const element = document.querySelector(".cursor")
  const target = document.querySelector(".target")
  const cursor = new Cursor( element, target )
  const target2 = document.querySelector(".target2")
  const cursor2 = new Cursor( element, target2 )
  const target3 = document.querySelector(".target3")
  const cursor3 = new Cursor( element, target3 )
