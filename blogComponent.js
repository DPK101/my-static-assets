const LikeButton = function() {
  return (
   <div>i am a like button</div>
  )
}
const domContainer = document.querySelector('#root'); //element is created in blogspot
console.log(domContainer);
ReactDOM.render(<LikeButton />, domContainer);
