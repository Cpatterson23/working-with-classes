class circle {
    constructor(width, height, backgroundColor) {
        this.color = backgroundColor;
        this.height = `${height}px` ;
        this.width = `${width}px`;
        
    }

    render() {
      const body = document.body;
      const div = document.createElement("div");
      div.style.width = this.width;
      div.style.height = this.height;
      div.style.backgroundColor = this.color;
      div.style.borderRadius = "50%";
      body.appendChild(div);
    }
}

const myCircle = new circle(25,25, "red");
myCircle.render(myCircle);

//for (let i = 0; i <= 10; i += 1) {
    console.log(i);
}
