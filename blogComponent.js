<script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>
const LikeButton = function() {
  return (
   <div>i am a like button</div>
  )
}
const domContainer = document.querySelector('#root'); //element is created in blogspot
console.log(domContainer);
ReactDOM.render(<LikeButton />, domContainer);
