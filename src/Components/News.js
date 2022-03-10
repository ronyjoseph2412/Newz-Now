import PropTypes from 'prop-types'
import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinners from './Spinners'

export class News extends Component {
  static defaultProps = {
    country:'in',
    pageSize:16,
    category:'general'
  }
  static propTypes = {
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string,
  }
  articles=[{source:{id:null,name:"Hindustan Times"},author:"HT Tech",title:"Apple iPhone SE Launch LIVE: iPhone to come with A15 Bionic Chip- Know price, colours - HT Tech",description:"Apple iPhone SE 3 Launch Live Updates: Apple launches the all new iPhone SE 3 today, March 8, 2022. You can check the live updates from Apple Event regarding the iPhone SE 3 here.",url:"https://tech.hindustantimes.com/mobile/news/iphone-se-3-launch-live-updates-apple-event-starts-at-11-30pm-price-to-specs-know-it-all-here-71646742785728.html",urlToImage:"https://images.hindustantimes.com/tech/img/2022/03/08/1600x900/Apple-iPhoneSE-color-lineup-4up-220308_big.jpg.large_1646765193229_1646765212027.jpg",publishedAt:"2022-03-08T18:29:15Z",content:"Apple iPhone SE 3 Launch Live Updates: Apple has announced several new launches on March 8 including new colour for iPhone 13, iPhone 13 Pro, all new iPhone SE 3 or iPhone SE 2022, iPad Air, among ot… [+3643 chars]"}]
  constructor(props){
    super(props);
    this.state ={
      'articles':this.articles,
      loading:true,
      page:1,
      totalResults:1,
      no_pages:1
    }
  }
    // this.componentDidMount loads after the entire 
    componentDidMount = async ()=>{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7765ca30f37345ae9dcae2f9c57b6d18&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({'articles':parsedData.articles,totalResults:parsedData.totalResults,loading:false,})
    }
    handlePrevClick = async ()=>{
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7765ca30f37345ae9dcae2f9c57b6d18&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState()
      this.setState({
        page:this.state.page-1,
        'articles':parsedData.articles,
        loading:false,
      })
    }
    handleNextclick =async ()=>{
      if(this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)){
        console.log("No more results to show");
      }
      else{
        let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=7765ca30f37345ae9dcae2f9c57b6d18&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState()
        this.setState({
          page:this.state.page+1,
          'articles':parsedData.articles,
          loading:false,
        })
      }
      }
  
  render() {
    return (
      <div className='dark:bg-slate-900' id="#top">
        {this.state.loading && <Spinners />}
      {(this.state.loading) ?"":  
      <div className='mx-auto container pt-3 space-x-3 space-y-5 grid grid-col-1 md:grid-cols-2 justify-center'>
      <div className='py-5'>
      <NewsItem key={this.state.articles[0].url} url={this.state.articles[0].url} title={this.state.articles[0].title.slice(0,100)} author={this.state.articles[0].source.name} imageurl={this.state.articles[0].urlToImage===null ? 'https://png.pngtree.com/png-vector/20201027/ourlarge/pngtree-breaking-news-banner-lower-png-image_2378724.jpg' : this.state.articles[0].urlToImage} date={this.state.articles[0].publishedAt} />
      </div>
      {this.state.articles.map((element)=>{
        if(element===this.state.articles[0]){
          return("")
        }
        else{
            return(<div key={element.url}><NewsItem url={element.url} title={element.title.slice(0,100)+"..."} author={element.source.name} imageurl={(element.urlToImage ===null) ? 'https://png.pngtree.com/png-vector/20201027/ourlarge/pngtree-breaking-news-banner-lower-png-image_2378724.jpg' : element.urlToImage} date={element.publishedAt}  /></div>)
          
        }
      })}
      </div>
  }
      <div className='mx-auto container flex flex-row justify-between py-5'>
        <button className='p-2 bg-slate-900 dark:bg-[#212529] text-white rounded-lg disabled:bg-slate-600 dark:disabled:bg-slate-600 disabled:cursor-not-allowed' disabled={this.state.page<=1} onClick={this.handlePrevClick}>&larr; Previous</button>
        <button className='p-2 bg-slate-900 dark:bg-[#212529] text-white rounded-lg disabled:bg-slate-600 dark:disabled:bg-slate-600 disabled:cursor-not-allowed' disabled={this.state.page+1 > Math.ceil((this.state.totalResults)/this.props.pageSize)} onClick={this.handleNextclick} >Next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default News