import React, { Component } from 'react';
import {CSSTransition, TransitionGroup, Transition} from 'react-transition-group';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
class QuoteMachine extends Component {


  constructor() {
    super();
    this.state = {
      author: '',
      quote: '',
      visible: true
    }
    this.END_POINT = 'https://talaikis.com/api/quotes/random/'
    this.getRandomQuote = this.getRandomQuote.bind(this)
    this.shareOnTwitter = this.shareOnTwitter.bind(this)

  }

  getRandomQuote = () => {
    this.fadeIn()
    fetch(this.END_POINT)
    .then(response => response.json())
    .then(data => {

      if(data.author && data.quote){
        this.setState({
          author: data.author,
          quote: data.quote
        });

      }
      else{
        return console.error('No quote has been found 404')
      }
    })
}

  componentDidMount() {
  window.addEventListener('load', this.getRandomQuote)
  }
  shareOnTwitter = (text, author) => {
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + text + '" ' + author));
  }

  fadeOut = () => {
    this.setState({visible: false})
    setTimeout(this.getRandomQuote, 1000)
  }
  fadeIn = () => {
    this.randomizeColor()
    this.randomizeFont()
    this.setState({visible:true})
  }
  randomizeColor = () => {
  let hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];
  let newColor = "#";

  for ( let i = 0; i < 6; i++ ) {
    let x = Math.round( Math.random() * 14 );
    let y = hexValues[x];
    newColor += y;
  }
    document.body.style.backgroundColor = newColor;
  }
  randomizeFont = () => {
    let fontValues = ["Amatic SC","Anton","Arvo","Cinzel","Do Hyeon","EB Garamond","Hanalei Fill","Josefin Sans","Knewave","Merienda","Pacifico","Passion One","Permanent Marker","Poiret One","Raleway","Ranga","Roboto Mono","Ruslan Display","Sacramento", "Teko"]
    let x = Math.round(Math.random() * 19);
    let font = fontValues[x];
    document.getElementById('sect').style.fontFamily = font;
  }
  render(){
    const { author, quote } = this.state;
    let divClass = this.state.visible ? "sect-appear" : "sect-remove";
    return (

      <body id="body">
      <div id="sect" className={divClass}>

        <h3 className="quote">"{quote}"</h3>
        <br />
        <p>--{author}</p>
        <br />
      <div className="buttonDiv">
        <a id="quoteButton" className='button btn' onClick={this.fadeOut}>
          New Quote
        </a>
        <a className='button btn' id="tweetQuote" title="Tweet this!"
         target="_blank" onClick={() => this.shareOnTwitter(quote, author)}>
         <i className="fa fa-twitter" aria-hidden="true"></i>

        </a>
        </div>
      </div>
      </body>
      )


  }


}


export default QuoteMachine;
