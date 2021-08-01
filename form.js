class Form{

  constructor(){

    this.title=createElement("h2")
    this.input=createInput("Name")
    this.button=createButton("Play")
    this.greeting=createElement("h3")


       
  }

  display(){
   // var  title=createElement("h2")
   this.title.html("Car Racing Game");
   this.title.position(520,100);

   this.input.position(450,220);

   this.button.position(450,380);

   this.button.mousePressed( ()=>{
    
       
        this.input.hide();
        this.button.hide();
   
        var  name = this.input.value()
   
        this.greeting.html("Hello " + name);
        this.greeting.position(450,240);
   
   
      
   }  );
  }

}