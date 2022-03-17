import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { url, title, author, imageurl , date} = this.props;
    return (
      <div>
        <div className='grid grid-cols-3 bg-white rounded-lg border border-gray-200 hover:shadow-md dark:hover:shadow dark:bg-gray-800 dark:border-gray-700 justify-between gap-2 hover:shadow-slate-900 lg:w-[600px] lg:h-[200px] items-center transition duration-100 dark:hover:shadow-white'>
          <div className='col-span-2 flex flex-col space-y-5 p-2'>
            <div className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white cursor-pointer hover:underline hover:underline-offset-2"><a href={url} target="_blank" rel="noreferrer">{title}</a></div>
            <div>
              <div className='flex flex-col sm:flex-row'>
                <p className='mb-2 font-semibold text-slate-800 dark:text-white mr-2'>{author}</p>
                <p className='mb-2 font-semibold text-slate-700 dark:text-white'>{new Date(date).toDateString()}&nbsp;{(new Date(date).toTimeString()).split(':')[0]+":"+(new Date(date).toTimeString()).split(':')[1]}</p>
              </div>
            </div>
          </div>
          <div><img src={imageurl} alt="" className='rounded-lg border-[#f8f8f8] px-1 w-auto h-32 md:h-36 lg:h-44' /></div>
        </div>
      </div>
    )
  }
}

export default NewsItem
