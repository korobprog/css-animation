export default class Collapsible {
   button = document.createElement("button");
   buttonText = document.createTextNode("collapse");
   buttonClasses = this.button.classList;
   constructor() {
      this.buttonClasses.add("collapsible");
      this.button.appendChild(this.buttonText);
      this.content = document.createElement("div");
      const contentText = document.createTextNode(
         "В рамках реализации большого портала вам необходимо сделать виджет collapsible-контейнеров, который может разворачиваться и сворачиваться."

      );
      const contentClasses = this.content.classList;
      contentClasses.add("content");
      this.content.appendChild(contentText);
   }
   init() {
      this.addPend();
      this.onClick();
   }
   addPend() {
      document.body.appendChild(this.button);
      document.body.appendChild(this.content);
   }
   onClick() {
      this.button.addEventListener("click", () => {
         if (this.content.style.display === "block") {
            this.content.style.display = "none";
         } else {
            this.content.style.display = "block";
         }
      });
   }
}